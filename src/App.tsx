import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";

const Contact = lazy(() => import("./pages/Contact.tsx"));
const About = lazy(() => import("./pages/About.tsx"));
const Team = lazy(() => import("./pages/Team.tsx"));
const Careers = lazy(() => import("./pages/Careers.tsx"));
const Blog = lazy(() => import("./pages/Blog.tsx"));
const Manufacturing = lazy(() => import("./pages/Manufacturing.tsx"));
const Logistics = lazy(() => import("./pages/Logistics.tsx"));
const Staffing = lazy(() => import("./pages/Staffing.tsx"));
const Healthcare = lazy(() => import("./pages/Healthcare.tsx"));
const Finance = lazy(() => import("./pages/Finance.tsx"));
const Energy = lazy(() => import("./pages/Energy.tsx"));
const Retail = lazy(() => import("./pages/Retail.tsx"));
const SapS4Hana = lazy(() => import("./pages/SapS4Hana.tsx"));
const SapEcc = lazy(() => import("./pages/SapEcc.tsx"));
const SapRise = lazy(() => import("./pages/SapRise.tsx"));
const SapBdc = lazy(() => import("./pages/SapBdc.tsx"));
const SapSac = lazy(() => import("./pages/SapSac.tsx"));
const SapBtp = lazy(() => import("./pages/SapBtp.tsx"));
const SapDataSphere = lazy(() => import("./pages/SapDataSphere.tsx"));
const MicrosoftDynamics365 = lazy(() => import("./pages/MicrosoftDynamics365.tsx"));
const BusinessCentral = lazy(() => import("./pages/BusinessCentral.tsx"));
const DynamicsAx = lazy(() => import("./pages/DynamicsAx.tsx"));
const Snowflake = lazy(() => import("./pages/Snowflake.tsx"));
const Databricks = lazy(() => import("./pages/Databricks.tsx"));
const Fabric = lazy(() => import("./pages/Fabric.tsx"));
const ErpAiAgents = lazy(() => import("./pages/ErpAiAgents.tsx"));
const AiFoundry = lazy(() => import("./pages/AiFoundry.tsx"));
const DatabricksGenie = lazy(() => import("./pages/DatabricksGenie.tsx"));
const DataLedAi = lazy(() => import("./pages/DataLedAi.tsx"));
const SapJoule = lazy(() => import("./pages/SapJoule.tsx"));
const SnowflakeCortex = lazy(() => import("./pages/SnowflakeCortex.tsx"));
const AiTesting = lazy(() => import("./pages/AiTesting.tsx"));
const BlueGecko = lazy(() => import("./pages/BlueGecko.tsx"));
const FalconMapping = lazy(() => import("./pages/FalconMapping.tsx"));
const CodeCheetah = lazy(() => import("./pages/CodeCheetah.tsx"));
const OwlSight = lazy(() => import("./pages/OwlSight.tsx"));
const OrcaMigrate = lazy(() => import("./pages/OrcaMigrate.tsx"));
const AmsServices = lazy(() => import("./pages/AmsServices.tsx"));
const CaseStudy = lazy(() => import("./pages/CaseStudy.tsx"));
const Edt = lazy(() => import("./pages/Edt.tsx"));
const HomePage2 = lazy(() => import("./pages/HomePage2.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const RouteFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="h-8 w-8 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/industries/manufacturing" element={<Manufacturing />} />
          <Route path="/industries/logistics" element={<Logistics />} />
          <Route path="/industries/staffing" element={<Staffing />} />
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route path="/industries/financial-services" element={<Finance />} />
          <Route path="/industries/energy" element={<Energy />} />
          <Route path="/industries/retail" element={<Retail />} />
          <Route path="/solutions/sap-s4hana" element={<SapS4Hana />} />
          <Route path="/solutions/sap-ecc" element={<SapEcc />} />
          <Route path="/solutions/rise-with-sap" element={<SapRise />} />
          <Route path="/solutions/sap-business-data-cloud" element={<SapBdc />} />
          <Route path="/solutions/sap-analytics-cloud" element={<SapSac />} />
          <Route path="/solutions/sap-btp" element={<SapBtp />} />
          <Route path="/solutions/sap-datasphere" element={<SapDataSphere />} />
          <Route path="/solutions/microsoft-dynamics-365" element={<MicrosoftDynamics365 />} />
          <Route path="/solutions/business-central" element={<BusinessCentral />} />
          <Route path="/solutions/dynamics-ax-migration" element={<DynamicsAx />} />
          <Route path="/solutions/snowflake" element={<Snowflake />} />
          <Route path="/solutions/databricks" element={<Databricks />} />
          <Route path="/solutions/microsoft-fabric" element={<Fabric />} />
          <Route path="/solutions/erp-ai-agents" element={<ErpAiAgents />} />
          <Route path="/solutions/ai-foundry" element={<AiFoundry />} />
          <Route path="/solutions/databricks-genie" element={<DatabricksGenie />} />
          <Route path="/solutions/data-led-ai-transformation" element={<DataLedAi />} />
          <Route path="/solutions/sap-joule" element={<SapJoule />} />
          <Route path="/solutions/snowflake-cortex" element={<SnowflakeCortex />} />
          <Route path="/solutions/ai-testing-validation" element={<AiTesting />} />
          <Route path="/products/bluegecko" element={<BlueGecko />} />
          <Route path="/products/falcon-mapping" element={<FalconMapping />} />
          <Route path="/products/code-cheetah" element={<CodeCheetah />} />
          <Route path="/products/owl-sight" element={<OwlSight />} />
          <Route path="/products/orca-migrate" element={<OrcaMigrate />} />
          <Route path="/ams-services" element={<AmsServices />} />
          <Route path="/case-study" element={<CaseStudy />} />
          <Route path="/edt" element={<Edt />} />
          <Route path="/home-2" element={<HomePage2 />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
