import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const appBase = "/insight-spark-376/";

const redirectBaseWithoutTrailingSlash = (): Plugin => ({
  name: "redirect-base-without-trailing-slash",
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url?.startsWith(appBase.slice(0, -1))) {
        const suffix = req.url.slice(appBase.length - 1);
        if (suffix === "" || suffix.startsWith("?") || suffix.startsWith("#")) {
          res.statusCode = 302;
          res.setHeader("Location", `${appBase}${suffix}`);
          res.end();
          return;
        }
      }

      next();
    });
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: appBase,
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [redirectBaseWithoutTrailingSlash(), react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
