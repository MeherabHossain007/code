import { Sparkles } from "lucide-react";
import { Badge } from "@/components/retroui/Badge";
import { Button } from "@/components/retroui/Button";
import { Text } from "@/components/retroui/Text";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-white relative overflow-clip">
      {/* Dotted Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="container mx-auto px-4 flex justify-start items-center py-50">
        <div className="flex flex-col max-w-2xl z-10">
          <Badge
            variant="surface"
            size="md"
            className="inline-flex items-center text-black gap-2 mb-8 rounded-lg bg-linear-to-r from-primary/10 via-yellow-50 to-yellow-50 animate-aurora backdrop-blur-lg w-fit"
          >
            <Sparkles className="w-4 h-4" />
            <span>We've released Retro Pro Figma</span>
          </Badge>

          <Text
            as="h1"
            className="mb-6 font-sans font-bold text-4xl lg:text-6xl max-w-xl"
          >
            The Neobrutalism component library
          </Text>

          <Text className="mb-10 leading-relaxed md:text-xl">
            A Figma component library that fuses precision with rebellion. For
            designers who build the future.
          </Text>

          <div className="flex flex-wrap gap-4">
            <Button
              variant="secondary"
              size="lg"
              className="border-primary font-sans font-bold gap-2"
              asChild
            >
              <a href="#figma">
                <Image
                  src="/figma-icon.svg"
                  alt="Figma"
                  width={20}
                  height={20}
                  className="h-7 w-7"
                />
                View on Figma
              </a>
            </Button>

            <Button
              variant="default"
              size="lg"
              className="font-sans font-bold"
              asChild
            >
              <a href="#buy">Buy Now</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scrolling Images */}
      <div className="absolute md:w-2/3 h-full top-0 -right-40 overflow-hidden">
        <div className="animate-scroll-vertical space-y-6 rotate-6">
          <Image
            src="/hero-image.png"
            alt="Hero"
            width={1200}
            height={2400}
            className="object-cover w-full h-1/2"
            priority
          />
          <Image
            src="/hero-image-2.png"
            alt="Hero"
            width={1200}
            height={2400}
            className="object-cover w-full h-1/2"
          />
          <Image
            src="/hero-image.png"
            alt="Hero"
            width={1200}
            height={2400}
            className="object-cover w-full h-1/2"
          />
          <Image
            src="/hero-image-2.png"
            alt="Hero"
            width={1200}
            height={2400}
            className="object-cover w-full h-1/2"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
