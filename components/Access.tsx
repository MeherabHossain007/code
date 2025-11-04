import { Figma, Download } from "lucide-react";
import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";
import { Button } from "@/components/retroui/Button";
import { Badge } from "@/components/retroui/Badge";

const ACCESS_OPTIONS = [
  {
    icon: <Figma className="w-8 h-8" />,
    title: "Figma Community",
    description:
      "Access the library directly from Figma Community with all components and updates.",
    ctaText: "Open in Figma",
    ctaLink: "#",
  },
  {
    icon: <Download className="w-8 h-8" />,
    title: "Direct Download",
    description:
      "Download the complete package with all source files and documentation.",
    ctaText: "Download Now",
    ctaLink: "#",
  },
];

const Access = () => {
  return (
    <section className="py-24 bg-linear-to-b from-gray-50 to-white relative">
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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge
            variant="surface"
            size="md"
            className=" inline-flex text-lg mb-4"
          >
            Get Access
          </Badge>
          <Text as="h1" className="mb-6 font-sans font-bold">
            Get started today
          </Text>
          <Text className="md:text-xl leading-relaxed">
            Choose your preferred way to access the library and start designing.
          </Text>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {ACCESS_OPTIONS.map((option, index) => (
            <Card
              key={option.title}
              className="bg-white p-8 flex flex-col hover:scale-105 transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary transform origin-left transition-transform duration-300 group-hover:scale-x-100 scale-x-0" />

              <div className="mb-7">
                <div className="text-black [&>svg]:w-10 [&>svg]:h-10">
                  {option.icon}
                </div>
              </div>

              <Text as="h3" className="mb-3 font-sans font-bold">
                {option.title}
              </Text>
              <Text className="mb-6 grow leading-relaxed">
                {option.description}
              </Text>

              <Button
                variant="secondary"
                size="md"
                className="w-full border-primary justify-center py-3 relative overflow-clip"
              >
                <a href={option.ctaLink}>{option.ctaText}</a>
                <div className="absolute -bottom-3 -right-2 text-6xl font-bold text-gray-100 group-hover:text-primary/20 transition-colors">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Access;
