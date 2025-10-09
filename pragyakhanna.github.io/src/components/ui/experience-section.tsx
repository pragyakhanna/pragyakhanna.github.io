import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, GraduationCap, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Developer (Co-op)",
    company: "L3Harris Technologies",
    location: "Waterdown, ON",
    period: "Sept 2023 – Sept 2024",
    type: "Full-time",
    icon: <Building2 className="h-5 w-5" />,
    achievements: [
      "Built a C#/.NET dashboard to automate ticket triaging, saving $100K+ annually",
      "Developed 15+ full-stack features across 3 major projects in Agile teams using JavaScript, HTML/CSS, and Azure SQL",
      "Optimized Azure SQL performance by 50% through schema redesign and stored procedure tuning",
      "Implemented error handling and recovery logic in .NET services, reducing downtime by 40%",
      "Integrated Docker, Jenkins, and unit tests into CI/CD pipeline to cut deployment errors by 35%"
    ],
    technologies: ["C#", ".NET", "JavaScript", "Azure SQL", "Docker", "Jenkins", "HTML/CSS"]
  },
  {
    title: "Teaching Assistant, Sessional",
    company: "McMaster University",
    location: "Hamilton, ON",
    period: "Sept 2023 – April 2025",
    type: "Part-time",
    icon: <GraduationCap className="h-5 w-5" />,
    achievements: [
      "Taught system-level programming in Python, C, Linux to 80+ engineering students through hands-on labs and projects",
      "Troubleshot code bugs, logic errors, and performance issues one-on-one, helping students resolve problems twice as fast",
      "Reviewed 200+ assignments with feedback focused on correctness, clarity, and coding best practices"
    ],
    technologies: ["Python", "C", "Linux", "System Programming", "Teaching", "Mentoring"]
  }
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My journey in software development has been shaped by hands-on experience in 
            enterprise environments and educational settings.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary hidden md:block" />
            
            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <Card 
                  key={index}
                  className="glass-effect border-primary/20 hover:shadow-glow transition-smooth ml-0 md:ml-20 group"
                >
                  <CardContent className="p-6">
                    {/* Timeline Dot */}
                    <div className="absolute -left-3 top-8 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-md hidden md:block group-hover:bg-accent transition-smooth">
                      <div className="absolute inset-1 bg-background rounded-full group-hover:bg-accent-light transition-smooth" />
                    </div>
                    
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:text-accent transition-smooth">
                            {experience.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold">{experience.title}</h3>
                            <p className="text-primary font-medium">{experience.company}</p>
                          </div>
                        </div>
                        <div className="flex flex-col md:items-end gap-1 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {experience.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {experience.location}
                          </div>
                          <Badge variant="outline" className="text-xs w-fit">
                            {experience.type}
                          </Badge>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="font-medium mb-3 text-accent">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-2 text-muted-foreground">
                              <span className="text-accent mt-1 text-sm">▶</span>
                              <span className="text-sm leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-medium mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <Badge 
                              key={tech} 
                              variant="secondary"
                              className="bg-secondary/20 text-secondary hover:bg-secondary/30 transition-smooth"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};