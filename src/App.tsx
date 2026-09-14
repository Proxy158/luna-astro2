import StarField from '@/components/StarField';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import ExampleReport from '@/components/ExampleReport';
import WhatWeDontDo from '@/components/WhatWeDontDo';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import useScrollReveal from '@/hooks/useScrollReveal';

function App() {
  useScrollReveal();

  return (
    <div className="relative min-h-screen bg-ink-900 text-gray-200 overflow-x-hidden">
      <StarField />
      <div className="grain-overlay" />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <HowItWorks />
          <ExampleReport />
          <WhatWeDontDo />
          <FAQ />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
