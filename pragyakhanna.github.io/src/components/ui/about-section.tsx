import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Globe, Smartphone, Cloud, GitBranch } from "lucide-react";

const skills = {
  "Frontend": {
    icon: <Globe className="h-5 w-5" />,
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "Redux"]
  },
  "Backend": {
    icon: <Database className="h-5 w-5" />,
    items: ["Node.js", "Express.js", ".NET", "C#", "Python", "RESTful APIs"]
  },
  "Mobile": {
    icon: <Smartphone className="h-5 w-5" />,
    items: ["React Native", "Cross-platform Development", "iOS", "Android"]
  },
  "Database": {
    icon: <Database className="h-5 w-5" />,
    items: ["MongoDB", "SQL Server", "Firebase", "DynamoDB"]
  },
  "Cloud & DevOps": {
    icon: <Cloud className="h-5 w-5" />,
    items: ["AWS", "Docker", "Jenkins", "Azure DevOps", "CI/CD"]
  },
  "Tools": {
    icon: <GitBranch className="h-5 w-5" />,
    items: ["Git", "Jest", "Visual Studio", "NGINX", "Linux"]
  }
};

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Computer Engineering graduate from McMaster University with a strong foundation 
            in full-stack development. I love building user-focused applications that solve real problems 
            and deliver exceptional experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About Content */}
          <div className="space-y-6">
            <Card className="glass-effect border-primary/20 hover:shadow-glow transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Code2 className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Professional Summary</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  With over 3 years of hands-on experience, I specialize in building responsive, 
                  cross-platform web applications. My expertise spans the full development lifecycle, 
                  from UI/UX design to backend architecture and deployment.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-primary">Education:</span>
                    <p className="text-muted-foreground">McMaster University</p>
                    <p className="text-muted-foreground">B.Eng Computer Engineering</p>
                  </div>
                  <div>
                    <span className="font-semibold text-primary">Honor:</span>
                    <p className="text-muted-foreground">McMaster Honor Award</p>
                    <p className="text-muted-foreground">$1,000 Achievement</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-accent/20 hover:shadow-glow transition-smooth">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-accent">Key Achievements</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    Built C#/.NET dashboard that saves $100K+ annually at L3Harris Technologies
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    Optimized Azure SQL performance by 50% through strategic redesign
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    Reduced deployment errors by 35% with CI/CD pipeline improvements
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    Teaching 80+ engineering students system-level programming
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Skills Grid */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-center mb-8">
              Technical <span className="text-gradient">Skills</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(skills).map(([category, { icon, items }]) => (
                <Card key={category} className="glass-effect hover:shadow-elegant transition-smooth group">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="text-primary group-hover:text-accent transition-smooth">
                        {icon}
                      </div>
                      <h4 className="font-semibold text-sm">{category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {items.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="secondary" 
                          className="text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-smooth"
                        >
                          {skill}
                        </Badge>
                      ))}
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