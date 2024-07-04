import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, Briefcase, Building, Info, Phone } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/navbar"; // Use the navbar layout
import Index from "./pages/Index.jsx";
import Jobs from "./pages/Jobs.jsx";
import Companies from "./pages/Companies.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import PostJob from "./pages/PostJob.jsx";
import JobApplication from "./pages/JobApplication.jsx";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Jobs",
    to: "/jobs",
    icon: <Briefcase className="h-4 w-4" />,
  },
  {
    title: "Companies",
    to: "/companies",
    icon: <Building className="h-4 w-4" />,
  },
  {
    title: "About",
    to: "/about",
    icon: <Info className="h-4 w-4" />,
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <Phone className="h-4 w-4" />,
  },
  {
    title: "Post Job",
    to: "/post-job",
    icon: <Briefcase className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="jobs" element={<Jobs />} />
              <Route path="companies" element={<Companies />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="post-job" element={<PostJob />} />
              <Route path="apply/:jobId" element={<JobApplication />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;