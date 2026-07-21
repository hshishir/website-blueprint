import { loadContent } from "@/lib/content";
import { AnimatedPage } from "@/components/AnimatedPage";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services, Approach, Results, About, Contact } from "@/components/ContentSections";
import { Footer } from "@/components/Footer";

export default function Home() {
  const home = loadContent<any>("homepage.md");
  const services = loadContent<any>("services.md");
  const approach = loadContent<any>("approach.md");
  const results = loadContent<any>("results.md");
  const about = loadContent<any>("about.md");
  const contact = loadContent<any>("contact.md");

  return (
    <>
      <Navigation />
      <AnimatedPage>
        <Hero data={home.data} />
        <Services data={services.data} />
        <Approach data={approach.data} />
        <Results data={results.data} />
        <About data={about.data} body={about.body} />
        <Contact data={contact.data} />
      </AnimatedPage>
      <Footer />
    </>
  );
}
