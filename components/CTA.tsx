import React from "react";
import { Button } from "@/components/retroui/Button";
import { Text } from "@/components/retroui/Text";

const CTA: React.FC = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Text as="h2" className="text-white mb-4">
          Ready to transform your workflow?
        </Text>
        <Text as="p" className="text-gray-300 max-w-2xl mx-auto mb-10">
          Join 10,000+ designers using Untitled UI to create beautiful products
          faster.
        </Text>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            variant="default"
            size="lg"
            className="border-white shadow-white hover:shadow-white"
          >
            Get Started Free
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-black"
          >
            View Pricing
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
