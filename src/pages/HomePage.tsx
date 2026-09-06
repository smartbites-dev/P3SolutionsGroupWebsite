import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { AiDlc } from '../components/sections/AiDlc';
import { Capabilities } from '../components/sections/Capabilities';
import { MaturityModel } from '../components/sections/MaturityModel';
import { Measurement } from '../components/sections/Measurement';
import { Resources } from '../components/sections/Resources';
import { BuiltInsideP3 } from '../components/sections/BuiltInsideP3';
import { Ventures } from '../components/sections/Ventures';
import { About } from '../components/sections/About';
import { Contact } from '../components/sections/Contact';
import { useScrollToHash } from '../hooks/useScrollToHash';

/**
 * Section order: Hero → Problem (AiDlc) → Services (Capabilities) →
 * Methodology (MaturityModel + Measurement) → Resources → Built Inside P3 →
 * Ventures → About → Contact. Ventures and Built Inside P3 stay on the page,
 * deliberately out of primary nav — see data/site.ts.
 */
export function HomePage() {
  useScrollToHash();

  return (
    <div className="min-h-screen bg-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-p3-red focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <Header />

      <main id="main">
        <Hero />
        <AiDlc />
        <Capabilities />
        <MaturityModel />
        <Measurement />
        <Resources />
        <BuiltInsideP3 />
        <Ventures />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
