import React from "react";
import { Feature } from "../types";
import { FEATURES } from "@/constants";
import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";

interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  const { icon, title, description } = feature;

  return (
    <Card className="bg-white p-6">
      <div className="mb-4 text-black">{icon}</div>
      <Text as="h3" className="mb-2">
        {title}
      </Text>
      <Text as="p" className="text-gray-600">
        {description}
      </Text>
    </Card>
  );
};

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Text as="h2" className="mb-4">
            Everything you need to design faster
          </Text>
          <Text as="p" className="text-gray-600">
            A complete design system with 500+ components, built for speed and
            flexibility.
          </Text>
        </div>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
