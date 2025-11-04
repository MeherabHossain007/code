"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Showcase from "@/components/Showcase";
import Testimonials from "@/components/Testimonials";
import Access from "@/components/Access";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const App: React.FC = () => {
  return (
    <div className="bg-white antialiased">
      <Header />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <Testimonials />
        <Access />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
