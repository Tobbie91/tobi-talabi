import { Hero } from "@/components/sections/Hero";
import { ImpactStats } from "@/components/sections/ImpactStats";
import { About } from "@/components/sections/About";
import { WhatIDo } from "@/components/sections/WhatIDo";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Testimonials } from "@/components/sections/Testimonials";
import { Philosophy } from "@/components/sections/Philosophy";
import { Speaking } from "@/components/sections/Speaking";
import { Recognition } from "@/components/sections/Recognition";
import { ContactCTA } from "@/components/sections/ContactCTA";

// Journey: who is Tobi (Hero/Stats/About/WhatIDo) -> what has he built
// (SelectedWork/Testimonials) -> how does he think (Philosophy) -> what
// else does he do (Speaking/Recognition) -> how to work with him (Contact).
export default function Home() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <About />
      <WhatIDo />
      <SelectedWork />
      <Testimonials />
      <Philosophy />
      <Speaking />
      <Recognition />
      <ContactCTA />
    </>
  );
}
