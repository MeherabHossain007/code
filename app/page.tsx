import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Showcase from "@/components/Showcase";
import Access from "@/components/Access";

export default function Home() {
  return (
    <div className="bg-white antialiased">
      <Hero />
      <Features />
      <Showcase />
      <Access />
    </div>
  );
}
