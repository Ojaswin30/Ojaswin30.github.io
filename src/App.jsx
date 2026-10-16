import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Principles from './components/Principles';
import SelectedWork from './components/SelectedWork';
import Stack from './components/Stack';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    // Scroll reveal observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.06 }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    // Active navigation scroll listener
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id], div[id]');
      let current = '';
      sections.forEach((sec) => {
        const top = sec.offsetTop - 160;
        if (window.scrollY >= top) {
          current = sec.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Ensure all content is revealed when printing (Ctrl+P)
    const handleBeforePrint = () => {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
    };
    window.addEventListener('beforeprint', handleBeforePrint);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeprint', handleBeforePrint);
    };
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <Services />
        <Principles />
        <SelectedWork />
        <Stack />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
