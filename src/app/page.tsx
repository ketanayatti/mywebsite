"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Infrastructure from "@/components/Infrastructure";
import Experience from "@/components/Experience";
import Principles from "@/components/Principles";
import GitHubActivity from "@/components/GitHubActivity";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingParticles from "@/components/FloatingParticles";
import ScrollToTop from "@/components/ScrollToTop";
import CursorGlow from "@/components/CursorGlow";

export default function Home() {
  return (
    <main className="relative overflow-hidden noise-overlay">
      <FloatingParticles />
      <CursorGlow />
      <Navbar />
      <Hero />
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <Projects />
      <div className="section-divider" />
      <Infrastructure />
      <div className="section-divider" />
      <Experience />
      <div className="section-divider" />
      <TechStack />
      <div className="section-divider" />
      <Principles />
      <div className="section-divider" />
      <GitHubActivity />
      <div className="section-divider" />
      <Blog />
      <div className="section-divider" />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
