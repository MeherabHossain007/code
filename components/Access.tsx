import React from "react";
import { AccessOption } from "@/types";
import { ACCESS_OPTIONS } from "@/constants";
import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";
import { Button } from "@/components/retroui/Button";

interface AccessCardProps {
  option: AccessOption;
}

const AccessCard: React.FC<AccessCardProps> = ({ option }) => {
  const { icon, title, description, ctaLink, ctaText } = option;

  return (
    <Card className="bg-white p-6 flex flex-col">
      <div className="mb-4 text-black">{icon}</div>
      <Text as="h3" className="mb-2">
        {title}
      </Text>
      <Text as="p" className="text-gray-600 mb-6 grow">
        {description}
      </Text>
      <Button variant="secondary" size="md" className="w-full" asChild>
        <a href={ctaLink}>{ctaText}</a>
      </Button>
    </Card>
  );
};

const Access: React.FC = () => {
  return (
    <section className="py-20 bg-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Text as="h2" className="mb-4">
            Get started today
          </Text>
          <Text as="p" className="text-gray-600 max-w-2xl mx-auto">
            Choose your preferred way to access the library and start designing.
          </Text>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACCESS_OPTIONS.map((option) => (
            <AccessCard key={option.title} option={option} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Access;
