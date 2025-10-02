import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WorkerDashboard from "./pages/WorkerDashboard";
import FacilityDashboard from "./pages/FacilityDashboard";
import BrowseShifts from "./pages/BrowseShifts";
import MySchedule from "./pages/MySchedule";
import Earnings from "./pages/Earnings";
import WorkerProfile from "./pages/WorkerProfile";
import Credentials from "./pages/Credentials";
import PostShift from "./pages/PostShift";
import ManageShifts from "./pages/ManageShifts";
import WorkerDirectory from "./pages/WorkerDirectory";
import FacilitySettings from "./pages/FacilitySettings";
import Analytics from "./pages/Analytics";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import Contact from "./pages/Contact";
import Support from "./pages/Support";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Worker Routes */}
          <Route path="/worker/dashboard" element={<WorkerDashboard />} />
          <Route path="/worker/shifts" element={<BrowseShifts />} />
          <Route path="/worker/schedule" element={<MySchedule />} />
          <Route path="/worker/earnings" element={<Earnings />} />
          <Route path="/worker/profile" element={<WorkerProfile />} />
          <Route path="/worker/credentials" element={<Credentials />} />
          
          {/* Facility Routes */}
          <Route path="/facility/dashboard" element={<FacilityDashboard />} />
          <Route path="/facility/post-shift" element={<PostShift />} />
          <Route path="/facility/manage-shifts" element={<ManageShifts />} />
          <Route path="/facility/workers" element={<WorkerDirectory />} />
          <Route path="/facility/settings" element={<FacilitySettings />} />
          <Route path="/facility/analytics" element={<Analytics />} />
          
          {/* General Routes */}
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/support" element={<Support />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
