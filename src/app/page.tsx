import Header from "@/sections/Header";
import HeroSection from "@/sections/Hero";
import ProjectsSection from "@/sections/Projects";
import TapeSection from "@/sections/Tape";
import Testimonials from "@/sections/Testimonials";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
      <Testimonials />
    </div>
  );
}
