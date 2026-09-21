import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { Layout } from "@/components/layout";
import { HomePage } from "@/pages/home";
import { AboutPage } from "@/pages/about";
import { ServicesPage } from "@/pages/services";
import { TeamPage } from "@/pages/team";
import { TestimonialsPage } from "@/pages/testimonials";
import { ContactPage } from "@/pages/contact";
import { PatientInfoPage } from "@/pages/patient-info";

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="meridian-theme">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="team" element={<TeamPage />} />
            <Route path="testimonials" element={<TestimonialsPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="patient-info" element={<PatientInfoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
