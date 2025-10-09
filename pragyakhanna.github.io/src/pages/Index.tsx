import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/ui/hero-section";
import { AboutSection } from "@/components/ui/about-section";
import { ExperienceSection } from "@/components/ui/experience-section";
import { ProjectsSection } from "@/components/ui/projects-section";
import { BeyondSection } from "@/components/ui/beyond-section";
import { ContactSection } from "@/components/ui/contact-section";
import { Footer } from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <BeyondSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
