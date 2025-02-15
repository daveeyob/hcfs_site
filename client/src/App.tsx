import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Pages
import Home from "@/pages/Home";
import History from "@/pages/History";
import ServicesPage from "@/pages/ServicesPage";
import Branches from "@/pages/Branches";
import Team from "@/pages/Team";
import About from "@/pages/About";
import Contact from "@/pages/Contact";

// Mobile Money Pages
import MobileMoneyHome from "@/pages/mobile-money/Home";
import MobileMoneyPartners from "@/pages/mobile-money/Partners";
import MobileMoneyStructure from "@/pages/mobile-money/Structure";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/history" component={History} />
          <Route path="/services" component={ServicesPage} />
          <Route path="/branches" component={Branches} />
          <Route path="/team" component={Team} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          
          {/* Mobile Money Routes */}
          <Route path="/mobile-money" component={MobileMoneyHome} />
          <Route path="/mobile-money/partners" component={MobileMoneyPartners} />
          <Route path="/mobile-money/structure" component={MobileMoneyStructure} />
          
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
