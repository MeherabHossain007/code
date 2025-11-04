import React from "react";
import Image from "next/image";
import { Testimonial } from "../types";
import { TESTIMONIALS } from "@/constants";
import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const { quote, avatar, name, role } = testimonial;

  return (
    <Card className="bg-white p-6">
      <Text as="p" className="mb-6 text-gray-800 italic">
        "{quote}"
      </Text>
      <div className="flex items-center gap-3">
        <Image
          src={avatar}
          alt={name}
          width={48}
          height={48}
          className="rounded-full border-2 border-black"
        />
        <div>
          <Text as="p" className="font-bold text-black">
            {name}
          </Text>
          <Text as="p" className="text-sm text-gray-600">
            {role}
          </Text>
        </div>
      </div>
    </Card>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Text as="h2" className="mb-4">
            Trusted by designers worldwide
          </Text>
          <Text as="p" className="text-gray-600">
            Join thousands of designers building better products with our kit.
          </Text>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
