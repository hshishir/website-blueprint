import { loadContent } from "@/lib/content";
import { AnimatedPage } from "@/components/AnimatedPage";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Services, Approach, Results, About, Contact } from "@/components/ContentSections";
import { Footer } from "@/components/Footer";
import type { HomepageData, ServicesData, ApproachData, ResultsData, AboutData, ContactData } from "@/lib/contentTypes";

export default function Home() {
  const home = loadContent<HomepageData>("homepage.md");
  const services = loadContent<ServicesData>("services.md");
  const approach = loadContent<ApproachData>("approach.md");
  const results = loadContent<ResultsData>("results.md");
  const about = loadContent<AboutData>("about.md");
  const contact = loadContent<ContactData>("contact.md");

  return (
    <>
      <Navigation />
      <AnimatedPage>
        <Hero data={home.data} />
        <Stats items={results.data.items} disclaimer={results.data.disclaimer} />
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
