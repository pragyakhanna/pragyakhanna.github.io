import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Smartphone, Globe, Database, Cpu, FileText, Shield } from "lucide-react";

const projects = [
  {
    title: "Stealth Startup",
    subtitle: "Personal Startup Project",
    period: "Dec 2024 – Present",
    icon: <Smartphone className="h-6 w-6" />,
    description: "Cross-platform mobile application built with React Native, featuring real-time data synchronization and cloud integration.",
    impact: "Cross-platform deployment",
    achievements: [
      "Built cross-platform app using React Native CLI and TypeScript for iOS, Android, and Web",
      "Developed backend APIs with Node.js and integrated AWS Cognito for secure user authentication",
      "Integrated AWS S3 and DynamoDB for low-latency file uploads and scalable real-time data access"
    ],
    technologies: ["React Native", "TypeScript", "Redux", "Express.js", "MongoDB", "AWS Cognito", "AWS S3", "DynamoDB", "NGINX"],
    links: {
      github: "https://github.com/PragyaKhanna"
    },
    status: "In Development",
    featured: true
  },
  {
    title: "Fit-Plant",
    subtitle: "Smart Plant Monitoring System",
    period: "Dec 2024 – Apr 2025",
    icon: <Globe className="h-6 w-6" />,
    description: "IoT dashboard for real-time plant health monitoring with Firebase integration and multi-user support.",
    impact: "Real-time IoT monitoring",
    achievements: [
      "Developed cross-platform IoT dashboard using React and Next.js for real-time plant health monitoring",
      "Logged live sensor data via Firebase Firestore with Firebase Auth for multi-user sessions",
      "Optimized API calls with Node.js and Axios for efficient data retrieval and dashboard performance"
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Node.js", "Firebase", "IoT", "Real-time Data"],
    links: {
      github: "https://github.com/PragyaKhanna"
    },
    status: "Active",
    featured: true
  },
  {
    title: "RC Vehicle Project",
    subtitle: "Embedded Systems Project",
    period: "May 2025",
    icon: <Cpu className="h-6 w-6" />,
    description: "Remote-controlled vehicle with real-time video streaming and autonomous navigation capabilities.",
    impact: "Real-time control with <50ms latency",
    achievements: [
      "Designed and built RC vehicle with wireless control and camera streaming",
      "Implemented real-time video transmission with minimal latency",
      "Developed autonomous navigation using sensor fusion and obstacle detection"
    ],
    technologies: ["Arduino", "Raspberry Pi", "C++", "Computer Vision", "Wireless Communication"],
    links: {
      github: "https://github.com/PragyaKhanna"
    },
    status: "Completed"
  },
  {
    title: "FPGA Image Decompression",
    subtitle: "Hardware Acceleration Project",
    period: "Mar 2025",
    icon: <Database className="h-6 w-6" />,
    description: "Hardware-accelerated image decompression system using FPGA for real-time processing.",
    impact: "Hardware acceleration",
    achievements: [
      "Implemented JPEG decompression algorithm on FPGA hardware",
      "Achieved significant performance improvement over software implementation", 
      "Optimized parallel processing pipelines for maximum throughput"
    ],
    technologies: ["VHDL", "Xilinx Vivado", "FPGA", "Digital Signal Processing", "Hardware Design"],
    links: {
      github: "https://github.com/PragyaKhanna"
    },
    status: "Completed"
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work in full-stack development, mobile applications, 
            and system programming.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`premium-border hover:shadow-elegant hover-lift group ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              } ${project.featured ? "border-primary/40 bg-gradient-to-br from-card via-card to-primary/5" : ""}`}
            >
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-lg ${
                      project.featured 
                        ? "bg-primary/10 text-primary group-hover:text-accent" 
                        : "bg-muted text-muted-foreground group-hover:text-primary"
                    } transition-smooth`}>
                      {project.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                        {project.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <Badge 
                      variant={project.status === "In Development" ? "default" : "secondary"}
                      className={project.status === "In Development" ? "bg-accent text-accent-foreground" : ""}
                    >
                      {project.status}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{project.period}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-accent">Key Features:</h4>
                    <div className="text-sm font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                      {project.impact}
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-accent mt-1">•</span>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline"
                        className="text-xs hover:bg-primary/10 hover:text-primary transition-smooth"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  {project.links.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:bg-primary/10 hover:text-primary transition-smooth"
                      onClick={() => window.open(project.links.github, "_blank")}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="hover:bg-primary/10 hover:text-primary transition-smooth"
            onClick={() => window.open("https://github.com/PragyaKhanna", "_blank")}
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};