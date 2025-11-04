import { Puzzle, Palette, Sparkles, Users } from "lucide-react";
import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";
import { Badge } from "@/components/retroui/Badge";

const FEATURES = [
  {
    icon: <Puzzle className="w-8 h-8" />,
    title: "500+ Components",
    description:
      "Pre-designed, production-ready elements to build your product faster.",
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Fully Customizable",
    description:
      "Adapt colors, typography, and spacing to your brand in seconds.",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Figma Ready",
    description:
      "Global styles and variables are built-in for maximum consistency.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Built for Designers",
    description: "Built with performance, variants, and auto-layout in mind.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-linear-to-b from-white to-gray-50 relative">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, black 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <Badge
            variant="surface"
            size="md"
            className="inline-flex text-lg mb-4"
          >
            Features
          </Badge>
          <Text as="h1" className="mb-6 font-sans font-bold">
            Everything you need to design faster
          </Text>
          <Text className="md:text-xl">
            A complete design system with 500+ components, built for speed and
            flexibility.
          </Text>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, index) => (
            <Card
              key={feature.title}
              className="bg-white p-8 hover:scale-105 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary transform origin-left transition-transform duration-300 group-hover:scale-x-100 scale-x-0" />

              <div className="mb-6">
                <div className="text-black [&>svg]:w-8 [&>svg]:h-8">
                  {feature.icon}
                </div>
              </div>

              <Text as="h3" className="mb-3 font-sans font-bold">
                {feature.title}
              </Text>
              <Text className="leading-relaxed">
                {feature.description}
              </Text>

              <div className="absolute bottom-4 right-4 text-6xl font-bold text-muted group-hover:text-primary/30 transition-colors">
                {String(index + 1).padStart(2, "0")}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
