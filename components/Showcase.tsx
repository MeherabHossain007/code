import React from "react";
import Image from "next/image";
import { Button } from "@/components/retroui/Button";
import { Text } from "@/components/retroui/Text";
import { Card } from "@/components/retroui/Card";

interface ShowcaseImageProps {
  seed: string;
  rotation: string;
  position: string;
  zIndex: string;
}

const SHOWCASE_IMAGES = [
  {
    seed: "comp1",
    rotation: "-rotate-6",
    position: "top-0 left-0",
    zIndex: "z-10",
  },
  {
    seed: "comp2",
    rotation: "rotate-3",
    position: "bottom-0 left-1/4",
    zIndex: "z-20",
  },
  {
    seed: "comp3",
    rotation: "rotate-12",
    position: "top-10 right-0",
    zIndex: "z-10",
  },
  {
    seed: "comp4",
    rotation: "-rotate-2",
    position: "bottom-10 right-10",
    zIndex: "z-30",
  },
] as const;

const ShowcaseImage: React.FC<ShowcaseImageProps> = ({
  seed,
  rotation,
  position,
  zIndex,
}) => (
  <div className={`absolute ${position} ${zIndex} w-72`}>
    <Card className={`bg-white p-2 transform ${rotation}`}>
      <Image
        src={`https://picsum.photos/seed/${seed}/600/400`}
        alt="UI Component Preview"
        width={600}
        height={400}
        className="w-full h-auto"
      />
    </Card>
  </div>
);

const Showcase: React.FC = () => {
  return (
    <section className="py-20 bg-primary/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1 h-96 hidden lg:block">
            {SHOWCASE_IMAGES.map((image) => (
              <ShowcaseImage key={image.seed} {...image} />
            ))}
          </div>

          <div className="order-1 lg:order-2">
            <Text as="h2" className="mb-4">
              Explore hundreds of components
            </Text>
            <Text as="p" className="text-gray-600 mb-6">
              Every element is designed to be flexible and production-ready.
              Built for real-world projects.
            </Text>
            <Button variant="secondary" size="lg" className="shadow-primary">
              Browse Components
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
