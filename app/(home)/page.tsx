import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";

export function Home() {
  return (
    <section>
      <Hero />
      <About />
      <Projects />
      <Blog />
      <Contact />
    </section>
  );
}