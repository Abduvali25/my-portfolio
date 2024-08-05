"use client"
import AchievementsSection from "./components/AchievmentSection";
import AboutSection from "./components/AboutSection";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MyProjects from "./components/MyProjects";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen scroll-smooth">
      <header>
       <Navbar />
      </header>
      <section>
       <HeroSection />
      </section>
      <AchievementsSection/>
      <AboutSection />
      <MyProjects />
      <ContactSection />
      <Footer />
    </main>
  );
}
