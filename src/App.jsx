import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import DevOpsSkills from './components/DevOpsSkills';
import TechnicalSkills from './components/TechnicalSkills';
import Projects from './components/Projects';
import OOPSection from './components/OOPSection';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-400">
      <Navigation />
      <main>
        <Hero />
        <About />
        <DevOpsSkills />
        <TechnicalSkills />
        <Projects />
        <OOPSection />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
