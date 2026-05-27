import { AboutPreview } from "@/components/AboutPreview";
import { Hero } from "@/components/Hero";
import { ServicesOverview } from "@/components/ServicesOverview";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesOverview />
    </>
  );
}
