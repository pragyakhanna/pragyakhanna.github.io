import { Heart, Code, Github, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy to-navy/95" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">Let's Connect</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              Always excited to discuss new opportunities, interesting projects,
              or just chat about technology and engineering.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center md:justify-end">
            <Button
              variant="outline"
              size="sm"
              className="bg-transparent border-white/50 text-white hover:bg-primary/20 hover:border-primary hover:scale-105 transition-all duration-300"
              onClick={() => window.open("/Pragya_Khanna_Resume.pdf", "_blank")}
            >
              <FileText className="mr-2 h-4 w-4" />
              Resume
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="bg-transparent border-white/50 text-white hover:bg-primary/20 hover:border-primary hover:scale-105 transition-all duration-300"
              onClick={() =>
                window.open("https://github.com/pragyakhanna", "_blank")
              }
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="bg-transparent border-white/50 text-white hover:bg-primary/20 hover:border-primary hover:scale-105 transition-all duration-300"
              onClick={() =>
                window.open("https://linkedin.com/in/pragya-khanna", "_blank")
              }
            >
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="bg-transparent border-white/50 text-white hover:bg-primary/20 hover:border-primary hover:scale-105 transition-all duration-300"
              onClick={() =>
                window.open("mailto:pragyakhanna0810@gmail.com", "_blank")
              }
            >
              <Mail className="mr-2 h-4 w-4" />
              Email
            </Button>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-white/70">
              <span>Made using React, TypeScript & Tailwind CSS</span>
            </div>

            <div className="text-sm text-white/70">
              © {currentYear} Pragya Khanna. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
