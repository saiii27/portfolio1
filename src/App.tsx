"use client";

import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';

function App() {
  return (
    <div className="main-wrapper overflow-x-clip w-full bg-[#0C0C0C]">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      
      {/* Contact Section Anchor Target & Footer */}
      <footer id="contact" className="w-full bg-[#0C0C0C] py-20 px-6 text-center border-t border-[#D7E2EA]/10 flex flex-col items-center gap-6 z-20 relative">
        <h2 className="hero-heading font-black uppercase text-4xl sm:text-5xl md:text-6xl tracking-tight leading-none">
          Let&apos;s Connect
        </h2>
        <p className="text-[#D7E2EA]/60 max-w-md text-sm sm:text-base font-light">
          Have an idea or a project in mind? Reach out to collaborate and build something spectacular.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-xs sm:text-sm text-[#D7E2EA]/80 font-light uppercase tracking-wider my-2">
          <span>Phone: +91 7259942576</span>
          <span className="hidden sm:inline">|</span>
          <span>Location: Belagavi, Karnataka</span>
        </div>
        <a 
          href="mailto:saiprasadbj@gmail.com" 
          className="contact-btn rounded-full text-white font-medium uppercase tracking-widest px-8 py-3.5 sm:px-10 sm:py-4 text-xs sm:text-sm transition-transform duration-200 active:scale-95 cursor-pointer inline-block"
        >
          Send an Email
        </a>
        <div className="mt-8 text-xs text-[#D7E2EA]/40 uppercase tracking-widest font-light">
          &copy; {new Date().getFullYear()} Saiprasad B. Jarkiholi. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
