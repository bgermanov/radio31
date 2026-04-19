"use client";
import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { RadioPlayer34 } from "@/components/radio-player34";
import { RadioPlayer33 } from "@/components/radio-player33";
import { RadioPlayer32 } from "@/components/radio-player32";
import { RadioPlayer31 } from "@/components/radio-player31";
import { RadioPlayer35 } from "@/components/radio-player35";
import { HeroSection } from "@/components/hero-section";
import { StationsSection } from "@/components/stations-section";

export default function Home() {
  const [activeRadio, setActiveRadio] = useState(31);

  return (
    <main className="min-h-screen bg-background">
      <Navbar onSelectedRadio={setActiveRadio} activeRadio={activeRadio} />
      <HeroSection />
      <StationsSection />
      <div className="pt-20">
        {" "}
        {activeRadio === 31 && <RadioPlayer31 />}
        {activeRadio === 32 && <RadioPlayer32 />}
        {activeRadio === 33 && <RadioPlayer33 />}
        {activeRadio === 34 && <RadioPlayer34 />}
        {activeRadio === 35 && <RadioPlayer35 />}
      </div>
    </main>
  );
}
