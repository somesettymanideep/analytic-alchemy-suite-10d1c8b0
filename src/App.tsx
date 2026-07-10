import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTopOnRouteChange from "./components/ScrollToTopOnRouteChange";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import HomePage3 from "./pages/HomePage3.tsx";
import Contact from "./pages/Contact.tsx";
import About from "./pages/About.tsx";
import Team from "./pages/Team.tsx";
import Careers from "./pages/Careers.tsx";
import Blog from "./pages/Blog.tsx";
import BlogDetail from "./pages/BlogDetail.tsx";
import Whitepapers from "./pages/Whitepapers.tsx";
import Research from "./pages/Research.tsx";
import ResearchDetail from "./pages/ResearchDetail.tsx";
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
import SapBtp from "./pages/SapBtp.tsx";
import MicrosoftDynamics365 from "./pages/MicrosoftDynamics365.tsx";
import BusinessCentral from "./pages/BusinessCentral.tsx";
import DynamicsAx from "./pages/DynamicsAx.tsx";
import Snowflake from "./pages/Snowflake.tsx";
import Databricks from "./pages/Databricks.tsx";
import Fabric from "./pages/Fabric.tsx";
import SapAnalyticsCloud from "./pages/SapAnalyticsCloud.tsx";
import DataGovernance from "./pages/DataGovernance.tsx";
import AiTraining from "./pages/AiTraining.tsx";
import DataMaturity from "./pages/DataMaturity.tsx";
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
import CaseStudy from "./pages/CaseStudy.tsx";
import CaseStudyDetail from "./pages/CaseStudyDetail.tsx";
import Edt from "./pages/Edt.tsx";
import NotFound from "./pages/NotFound.tsx";
import { AuthProvider } from "./hooks/useAuth";
import AdminLogin from "./pages/AdminLogin.tsx";
import AdminLayout from "./components/AdminLayout.tsx";
import AdminDashboard from "./pages/admin/AdminDashboard.tsx";
import AdminBlogs from "./pages/admin/AdminBlogs.tsx";
import AdminWhitepapers from "./pages/admin/AdminWhitepapers.tsx";
import AdminResearch from "./pages/admin/AdminResearch.tsx";
import AdminContacts from "./pages/admin/AdminContacts.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTopOnRouteChange />
        <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage3 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/whitepapers" element={<Whitepapers />} />
          <Route path="/research" element={<Research />} />
          <Route path="/research/:id" element={<ResearchDetail />} />
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
          <Route path="/solutions/sap-btp" element={<SapBtp />} />
          <Route path="/solutions/microsoft-dynamics-365" element={<MicrosoftDynamics365 />} />
          <Route path="/solutions/business-central" element={<BusinessCentral />} />
          <Route path="/solutions/dynamics-ax-migration" element={<DynamicsAx />} />
          <Route path="/solutions/snowflake" element={<Snowflake />} />
          <Route path="/solutions/databricks" element={<Databricks />} />
          <Route path="/solutions/microsoft-fabric-data-engineering" element={<Fabric />} />
          <Route path="/solutions/sap-analytics-cloud" element={<SapAnalyticsCloud />} />
          <Route path="/solutions/data-governance" element={<DataGovernance />} />
          <Route path="/solutions/ai-organisation-training" element={<AiTraining />} />
          <Route path="/solutions/data-maturity-assessment" element={<DataMaturity />} />
          <Route path="/solutions/erp-ai-agents-powered-by-blue-gecko" element={<ErpAiAgents />} />
          <Route path="/solutions/ai-strategy-and-readiness-assessment" element={<AiFoundry />} />
          <Route path="/solutions/predictive-and-prescriptive-analytics" element={<DatabricksGenie />} />
          <Route path="/solutions/data-led-ai-transformation" element={<DataLedAi />} />
          <Route path="/solutions/conversational-ai" element={<SapJoule />} />
          <Route path="/solutions/ai-powered-data-insights" element={<SnowflakeCortex />} />
          <Route path="/solutions/ai-testing-validation" element={<AiTesting />} />
          <Route path="/products/bluegecko" element={<BlueGecko />} />
          <Route path="/products/falcon-mapping" element={<FalconMapping />} />
          <Route path="/products/code-cheetah" element={<CodeCheetah />} />
          <Route path="/products/owl-sight" element={<OwlSight />} />
          <Route path="/products/orca-migrate" element={<OrcaMigrate />} />
          <Route path="/client-work" element={<CaseStudy />} />
          <Route path="/client-work/:slug" element={<CaseStudyDetail />} />
          <Route path="/edt" element={<Edt />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="blogs" element={<AdminBlogs />} />
            <Route path="whitepapers" element={<AdminWhitepapers />} />
            <Route path="research" element={<AdminResearch />} />
            <Route path="contacts" element={<AdminContacts />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
