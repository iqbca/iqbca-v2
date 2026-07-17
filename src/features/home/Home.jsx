import Navbar from "../../components/layout/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import HeroStats from "./components/HeroStats/HeroStats";
import AnimatedBackground from "./components/AnimatedBackground/AnimatedBackground";
import ScrollIndicator from "./components/ScrollIndicator/ScrollIndicator";
import FeaturedPlatform from "./components/FeaturedPlatform/FeaturedPlatform";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#09090B] text-white overflow-hidden">
      <AnimatedBackground />

      <Navbar />

      <Hero />

      <HeroStats />
      <FeaturedPlatform />
      

      <ScrollIndicator />
    </main>
  );
}