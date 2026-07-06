import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";


// Some binary assets (images, videos) live only as `.asset.json` CDN pointers.
// When running locally (e.g. in VS Code), raw imports like `@/assets/foo.png`
// would 404 because the real file was replaced by `foo.png.asset.json`.
// This plugin transparently redirects such imports to the CDN url.
function assetPointerFallback() {
  const exts = /\.(png|jpe?g|webp|gif|svg|mp4|webm|mov|avif)$/i;
  return {
    name: "asset-pointer-fallback",
    enforce: "pre" as const,
    async resolveId(source: string, importer: string | undefined) {
      if (!exts.test(source)) return null;
      let resolved: string | null = null;
      if (source.startsWith("@/")) {
        resolved = path.resolve(__dirname, "src", source.slice(2));
      } else if (source.startsWith(".") && importer) {
        resolved = path.resolve(path.dirname(importer), source);
      }
      if (!resolved) return null;
      if (fs.existsSync(resolved)) return null;
      const pointer = resolved + ".asset.json";
      if (!fs.existsSync(pointer)) return null;
      return "\0asset-pointer:" + pointer;
    },
    load(id: string) {
      if (!id.startsWith("\0asset-pointer:")) return null;
      const pointer = id.slice("\0asset-pointer:".length);
      const json = JSON.parse(fs.readFileSync(pointer, "utf8"));
      return `export default ${JSON.stringify(json.url)};`;
    },
  };
}

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    assetPointerFallback(),
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
