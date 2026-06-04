import React from 'react';
import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';

export const HeroSection: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative flex flex-col justify-between h-screen w-full overflow-hidden bg-[#0C0C0C]">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="nav" className="w-full flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 z-20">
        <a 
          href="#about" 
          onClick={(e) => { e.preventDefault(); handleScrollTo('about'); }} 
          className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
        >
          About
        </a>
        <a 
          href="#services" 
          onClick={(e) => { e.preventDefault(); handleScrollTo('services'); }} 
          className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
        >
          Skills
        </a>
        <a 
          href="#projects" 
          onClick={(e) => { e.preventDefault(); handleScrollTo('projects'); }} 
          className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
        >
          Projects
        </a>
        <a 
          href="#contact" 
          onClick={(e) => { e.preventDefault(); handleScrollTo('contact'); }} 
          className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
        >
          Contact
        </a>
      </FadeIn>

      {/* Heading Container */}
      <div className="relative flex-grow flex items-center justify-center overflow-hidden z-0 w-full select-none">
        <FadeIn delay={0.15} y={40} className="w-full text-center">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[9.5vw] sm:text-[10.5vw] md:text-[11vw] lg:text-[12vw] mt-6 sm:mt-4 md:-mt-5">
            Hi, i&apos;m saiprasad
          </h1>
        </FadeIn>
      </div>


      {/* Bottom Bar */}
      <div className="w-full flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 z-20">
        <FadeIn delay={0.35} y={20} className="max-w-[180px] sm:max-w-[240px] md:max-w-[280px]">
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-left" style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}>
            a computer science & AI student driven by building innovative software & intelligence solutions
          </p>
        </FadeIn>
        
        <FadeIn delay={0.5} y={20}>
          <ContactButton onClick={() => handleScrollTo('contact')} />
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
