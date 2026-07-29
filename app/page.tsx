import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Stack } from "@/components/sections/stack";
import { Experience } from "@/components/sections/experience";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Stack />
      <Experience />
    </main>
  );
}
