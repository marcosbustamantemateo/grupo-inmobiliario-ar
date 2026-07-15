import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { AboutSection } from "./components/sections/AboutSection";
import { ServicesSection } from "./components/sections/ServicesSection";
import { StepsSection } from "./components/sections/StepsSection";
import { TestimonialsSection } from "./components/sections/TestimonialsSection";
import { CtaSection } from "./components/sections/CtaSection";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <StepsSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
