import { Play } from "lucide-react";
import { Button } from "@/components/retroui/Button";
import { Text } from "@/components/retroui/Text";
import { Badge } from "@/components/retroui/Badge";

const Showcase = () => {
  return (
    <section className="py-24 bg-white relative">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="solid" size="md" className="mb-6 inline-flex text-lg">
            Video Showcase
          </Badge>
          <Text as="h1" className="mb-4 font-sans font-bold leading-tight">
            See how it works
          </Text>
          <Text className="md:text-xl">
            Watch a quick demonstration of our component system in action
          </Text>
        </div>

        {/* Video container */}
        <div className="bg-white border-4 rounded-xl border-black shadow-md p-6 hover:shadow-none transition-shadow">
          <div className="aspect-video rounded-md bg-gray-50 border-2 border-black flex items-center justify-center relative overflow-hidden group">
            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            />

            <Button className="relative w-20 h-20 rounded-full bg-primary border-2 flex items-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-none z-10">
              <Play className="w-10 h-10 text-black ml-1" fill="black" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
