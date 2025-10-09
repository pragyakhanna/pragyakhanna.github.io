import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import profileImage from "@/assets/pragya-photo.jpg";
import { useState, useEffect } from "react";

const rotatingTexts = [
  "Computer Engineer",
  "Full-Stack Developer",
  "Lifelong Learner",
  "Explorer",
];

export const HeroSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-hero"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/8 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-48 h-48 bg-accent/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <div className="text-sm font-mono text-accent mb-4 tracking-wide">
              &lt;Developer/&gt;
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="text-gradient">Pragya</span>
            </h1>
            <div className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 font-light h-10 flex items-center justify-center lg:justify-start">
              <span key={currentTextIndex} className="animate-rotate-text">
                {rotatingTexts[currentTextIndex]}
              </span>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Computer Engineering graduate with 3+ years of experience building
              responsive, cross-platform web applications using React, Node.js,
              and modern technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary shadow-glow transition-smooth group"
                onClick={() => scrollToSection("#projects")}
              >
                View My Work
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-smooth" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/30 hover:bg-primary/10 transition-smooth"
                onClick={() =>
                  window.open("/Pragya_Khanna_Resume.pdf", "_blank")
                }
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10 hover:text-primary transition-smooth"
                onClick={() =>
                  window.open("https://github.com/PragyaKhanna", "_blank")
                }
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10 hover:text-primary transition-smooth"
                onClick={() =>
                  window.open("https://linkedin.com/in/pragya-khanna", "_blank")
                }
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10 hover:text-primary transition-smooth"
                onClick={() =>
                  window.open("mailto:pragyakhanna0810@gmail.com", "_blank")
                }
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative flex justify-center lg:justify-end animate-fade-scale">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-3xl opacity-30 animate-glow" />
              <img
                src={profileImage}
                alt="Pragya Khanna - Computer Engineer and Full-Stack Developer"
                className="relative w-96 h-96 rounded-full object-cover shadow-elegant border-6 border-background ring-4 ring-primary/20"
              />
              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-card rounded-full shadow-md flex items-center justify-center animate-float">
                <span className="text-2xl">⚛️</span>
              </div>
              <div
                className="absolute -bottom-4 -right-4 w-16 h-16 bg-card rounded-full shadow-md flex items-center justify-center animate-float"
                style={{ animationDelay: "1s" }}
              >
                <span className="text-2xl">🚀</span>
              </div>
              <div
                className="absolute top-1/2 -right-8 w-12 h-12 bg-card rounded-full shadow-md flex items-center justify-center animate-float"
                style={{ animationDelay: "2s" }}
              >
                <span className="text-xl">💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
