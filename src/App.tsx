import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { WhatWeDo } from './components/sections/WhatWeDo';
import { HowWeThink } from './components/sections/HowWeThink';
import { OperatingSystem } from './components/sections/OperatingSystem';
import { Ventures } from './components/sections/Ventures';
import { Products } from './components/sections/Products';
import { BuiltInsideP3 } from './components/sections/BuiltInsideP3';
import { Services } from './components/sections/Services';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';

function App() {
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
        <WhatWeDo />
        <HowWeThink />
        <OperatingSystem />
        <Ventures />
        <Products />
        <BuiltInsideP3 />
        <Services />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
