import React from 'react';
import './App.css';
import CustomCursor from './components/CustomCursor';
import BackgroundParticles from './components/BackgroundParticles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-space-dark text-white selection:bg-neon-cyan/30 selection:text-neon-cyan overflow-hidden">
      
      {/* Custom Trailing Mouse Cursor */}
      <CustomCursor />

      {/* Interactive canvas starfield constellation */}
      <BackgroundParticles />

      {/* Parallax space stars backgrounds (animated via CSS in App.css) */}
      <div className="space-stars stars-layer1" />
      <div className="space-stars stars-layer2" />
      <div className="space-stars stars-layer3" />

      {/* Navigation Header */}
      <Navbar />

      {/* Page Sections */}
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      {/* Centered Footer */}
      <Footer />
    </div>
  );
}

export default App;
