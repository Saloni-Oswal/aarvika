import React from "react";

import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import Team from "@/components/team";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className='w-full bg-background text-foreground font-century'>
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}
