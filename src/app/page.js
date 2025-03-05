"use client";

import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Services from "./components/services";
import Testimonials from "./components/testimonials";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    // Smooth scroll implementation for anchor links
    const smoothScroll = (event) => {
      const target = event.target;
      if (target.tagName === 'A' && target.hash && target.hash.startsWith('#')) {
        event.preventDefault();
        if (target.hash === '#home') {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        } else {
          const element = document.querySelector(target.hash);
          if (element) {
            window.scrollTo({
              top: element.getBoundingClientRect().top + window.scrollY - 80,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    const form = document.querySelector('form');
    const handleFormClick = (event) => {
      event.stopPropagation();
    };

    document.addEventListener('click', smoothScroll);
    if (form) {
      form.addEventListener('click', handleFormClick);
    }

    return () => {
      document.removeEventListener('click', smoothScroll);
      if (form) {
        form.removeEventListener('click', handleFormClick);
      }
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
