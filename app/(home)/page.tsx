import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import BackgroundGrid from "@/components/ui/grid";

export const revalidate = 10;

export default function Home() {
  return (
    <section>
      <Hero />
      <BackgroundGrid 
        className="absolute inset-0 z-0"
        size={10}
        color="#aaa"
      />
      <About />
      <Projects />
      <Blog />
      <Contact />
    </section>
  );
}