import { Header } from "@/components/header";
import { Hero } from "@/components/sections/hero";
import { Experience } from "@/components/sections/experience";
import { Education } from "@/components/sections/education";
import { Skills } from "@/components/sections/skills";
import { Portfolio } from "@/components/sections/portfolio";
import { CoverLetterGenerator } from "@/components/sections/cover-letter";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Header />
      <main className="flex w-full flex-1 flex-col">
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <Portfolio />
        <CoverLetterGenerator />
      </main>
      <Footer />
    </div>
  );
}
