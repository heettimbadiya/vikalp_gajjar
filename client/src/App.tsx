import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import Layout from "@/components/layout";

import Home from "@/pages/home";
import ProductsPage from "@/pages/products";
import ProductDetailPage from "@/pages/product-detail";
import ContactPage from "@/pages/contact";
import AboutPage from "@/pages/about";
import SolutionsPage from "@/pages/solutions";

import ConstructionSolutionsPage from "@/pages/solutions/construction";
import WashingMSandSolutionsPage from "@/pages/solutions/washing-m-sand";
import CDRecyclingSolutionsPage from "@/pages/solutions/cd-recycling";
import MobileSolutionsPage from "@/pages/solutions/mobile";
import TurnkeySolutionsPage from "@/pages/solutions/turnkey-solutions";
import IndustryPage from "@/pages/industry";
import IndustryDetailPage from "@/pages/industries/[slug]";
import KnowledgeCenterPage from "@/pages/knowledge-center";
import ArticleDetailPage from "@/pages/knowledge-center/article";
import Dashboard from "@/pages/dashboard";
import NotFound from "@/pages/not-found";
import TechnicalConsultationPage from "@/pages/technical-consultation";
import CustomEngineeringPage from "@/pages/custom-engineering";
import InstallationSupportPage from "@/pages/installation-support";
import MaintenanceServicesPage from "@/pages/maintenance-services";
import PartsComponentsPage from "@/pages/parts-components";
import PrivacyPolicyPage from "@/pages/privacy-policy";
import TermsOfServicePage from "@/pages/terms-of-service";

function Router() {
  const [location] = useLocation();
  
  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/products" component={ProductsPage} />
        <Route path="/products/grizzly-screens" component={() => { window.location.href = '/products'; return null; }} />
        <Route path="/products/:slug" component={ProductDetailPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/solutions" component={SolutionsPage} />
        <Route path="/solutions/construction" component={ConstructionSolutionsPage} />
        <Route path="/solutions/washing-m-sand" component={WashingMSandSolutionsPage} />
        <Route path="/solutions/cd-recycling" component={CDRecyclingSolutionsPage} />
        <Route path="/solutions/mobile" component={MobileSolutionsPage} />
        <Route path="/solutions/mobile-modular-plants" component={MobileSolutionsPage} />
        <Route path="/solutions/turnkey-solutions" component={TurnkeySolutionsPage} />

        <Route path="/industries/:slug" component={IndustryDetailPage} />
        <Route path="/knowledge-center" component={KnowledgeCenterPage} />
        <Route path="/knowledge-center/:slug" component={ArticleDetailPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/privacy-policy" component={PrivacyPolicyPage} />
        <Route path="/terms-of-service" component={TermsOfServicePage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
