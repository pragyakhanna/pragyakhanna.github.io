import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mountain, ChefHat, Heart, TrendingUp, Gamepad2 } from "lucide-react";

const interests = [
  {
    title: "Traveling",
    icon: <MapPin className="h-8 w-8" />,
    description: "Exploring new cultures and places around the world",
    gradient: "from-primary to-primary-light"
  },
  {
    title: "Hiking",
    icon: <Mountain className="h-8 w-8" />,
    description: "Finding peace and challenge in nature's trails",
    gradient: "from-accent to-accent-light"
  },
  {
    title: "Baking",
    icon: <ChefHat className="h-8 w-8" />,
    description: "Creating sweet memories through artisanal bakes",
    gradient: "from-secondary to-secondary-light"
  },
  {
    title: "Board Games",
    icon: <Gamepad2 className="h-8 w-8" />,
    description: "Strategic thinking through chess, board games, and puzzles",
    gradient: "from-primary to-accent"
  },
  {
    title: "Volunteering",
    icon: <Heart className="h-8 w-8" />,
    description: "Giving back to the community and making a difference",
    gradient: "from-secondary to-primary"
  },
  {
    title: "Investing",
    icon: <TrendingUp className="h-8 w-8" />,
    description: "Building financial literacy and long-term wealth",
    gradient: "from-accent to-secondary"
  }
];

export const BeyondSection = () => {
  return (
    <section id="beyond" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Beyond <span className="text-gradient">Engineering</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            When I'm not coding or designing systems, you'll find me exploring the world, 
            challenging myself in nature, or creating something delicious in the kitchen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {interests.map((interest, index) => (
            <Card 
              key={index}
              className="premium-border hover:shadow-glow hover-lift group bg-gradient-card"
            >
              <CardContent className="p-8 text-center">
                <div className={`inline-flex p-5 rounded-2xl bg-gradient-to-r ${interest.gradient} mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                  <div className="text-white drop-shadow-sm">
                    {interest.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-smooth">
                  {interest.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {interest.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};