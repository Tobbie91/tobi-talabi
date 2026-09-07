import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { WhatIDo } from "@/components/sections/WhatIDo";
import { ImpactStats } from "@/components/sections/ImpactStats";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Speaking } from "@/components/sections/Speaking";
import { Testimonials } from "@/components/sections/Testimonials";
import { Recognition } from "@/components/sections/Recognition";
import { Philosophy } from "@/components/sections/Philosophy";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhatIDo />
      <ImpactStats />
      <SelectedWork />
      <Speaking />
      <Testimonials />
      <Recognition />
      <Philosophy />
      <ContactCTA />
    </>
  );
}
