import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Contact from "./pages/Contact.tsx";
import About from "./pages/About.tsx";
import Team from "./pages/Team.tsx";
import Careers from "./pages/Careers.tsx";
import Blog from "./pages/Blog.tsx";
import Manufacturing from "./pages/Manufacturing.tsx";
import Logistics from "./pages/Logistics.tsx";
import Staffing from "./pages/Staffing.tsx";
import Healthcare from "./pages/Healthcare.tsx";
import Finance from "./pages/Finance.tsx";
import Energy from "./pages/Energy.tsx";
import Retail from "./pages/Retail.tsx";
import SapS4Hana from "./pages/SapS4Hana.tsx";
import SapEcc from "./pages/SapEcc.tsx";
import SapRise from "./pages/SapRise.tsx";
import SapBdc from "./pages/SapBdc.tsx";
import SapSac from "./pages/SapSac.tsx";
import SapBtp from "./pages/SapBtp.tsx";
import SapDataSphere from "./pages/SapDataSphere.tsx";
import MicrosoftDynamics365 from "./pages/MicrosoftDynamics365.tsx";
import BusinessCentral from "./pages/BusinessCentral.tsx";
import DynamicsAx from "./pages/DynamicsAx.tsx";
import Snowflake from "./pages/Snowflake.tsx";
import Databricks from "./pages/Databricks.tsx";
import Fabric from "./pages/Fabric.tsx";
import ErpAiAgents from "./pages/ErpAiAgents.tsx";
import AiFoundry from "./pages/AiFoundry.tsx";
import DatabricksGenie from "./pages/DatabricksGenie.tsx";
import DataLedAi from "./pages/DataLedAi.tsx";
import SapJoule from "./pages/SapJoule.tsx";
import SnowflakeCortex from "./pages/SnowflakeCortex.tsx";
import AiTesting from "./pages/AiTesting.tsx";
import BlueGecko from "./pages/BlueGecko.tsx";
import FalconMapping from "./pages/FalconMapping.tsx";
import CodeCheetah from "./pages/CodeCheetah.tsx";
import OwlSight from "./pages/OwlSight.tsx";
import OrcaMigrate from "./pages/OrcaMigrate.tsx";
import AmsServices from "./pages/AmsServices.tsx";
import CaseStudy from "./pages/CaseStudy.tsx";
import Edt from "./pages/Edt.tsx";
import HomePage2 from "./pages/HomePage2.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
