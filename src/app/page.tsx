import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Infrastructure from "@/components/Infrastructure";
import Experience from "@/components/Experience";
import Principles from "@/components/Principles";
import Philosophy from "@/components/Philosophy";
import GitHubActivity from "@/components/GitHubActivity";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Maintenance from "@/components/Maintenance";

export const dynamic = "force-dynamic";

export default function Home() {
  const isMaintenanceMode = process.env.MAINTENANCE_MODE?.toLowerCase() === "true";

  if (isMaintenanceMode) {
    return <Maintenance />;
  }

  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Infrastructure />
      <Experience />
      <TechStack />
      <Philosophy />
      <Principles />
      <GitHubActivity />
      <Blog />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
