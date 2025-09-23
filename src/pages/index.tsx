
import Hero from "@/components/Hero";
import Description from "@/components/Description";
import "typeface-roboto";
import TechStack from "@/components/TechStack"
import Projects from "@/components/Projects";


export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <Description />
      <Projects/>
    </>
  );
}
