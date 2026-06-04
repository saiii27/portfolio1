import React from 'react';
import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';

export const AboutSection: React.FC = () => {
  const handleContactClick = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const aboutText =
    "I am currently pursuing a Bachelor of Engineering in Computer Science and Engineering with a specialization in Artificial Intelligence at KLE Technological University, Hubballi. I possess a strong interest in software development, web technologies, and artificial intelligence. I am known for my ability to quickly adapt to new technologies, collaborate effectively in teams, and maintain a positive attitude while solving technical challenges. Let's build something incredible together!";

  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Decorative Corner Icons */}
      
      {/* Top-Left: Moon Icon */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0 select-none pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="Decorative Moon"
          className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain opacity-80"
        />
      </FadeIn>

      {/* Bottom-Left: 3D Object */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0 select-none pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="Decorative 3D Object"
          className="w-[100px] sm:w-[140px] md:w-[180px] h-auto object-contain opacity-80"
        />
      </FadeIn>

      {/* Top-Right: Lego Icon */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0 select-none pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="Decorative Lego"
          className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain opacity-80"
        />
      </FadeIn>

      {/* Bottom-Right: 3D Group */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0 select-none pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="Decorative 3D Group"
          className="w-[130px] sm:w-[170px] md:w-[220px] h-auto object-contain opacity-80"
        />
      </FadeIn>

      {/* Central Content Flow */}
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-4xl">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2 
            className="hero-heading font-black uppercase leading-none tracking-tight mb-10 sm:mb-14 md:mb-16 select-none"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Scroll Reveal Text */}
        <AnimatedText text={aboutText} />

        {/* Structured Grid Layout for Personal Details */}
        <FadeIn delay={0.2} y={30} className="mt-14 w-full grid grid-cols-1 md:grid-cols-2 gap-6 text-left px-4">
          {/* Card 1: Education */}
          <div className="p-6 rounded-[24px] border border-[#D7E2EA]/10 bg-white/[0.02] backdrop-blur-md flex flex-col justify-between gap-4">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-[#D7E2EA]/40 font-semibold mb-2">Education</h3>
              <span className="font-bold text-[#D7E2EA] text-lg sm:text-xl block leading-snug">B.E. in Computer Science & AI</span>
              <span className="text-sm text-[#D7E2EA]/60 font-light block mt-1">KLE Technological University, Hubballi</span>
            </div>
            <div className="flex justify-between items-center border-t border-[#D7E2EA]/10 pt-3 text-xs uppercase tracking-wider text-[#D7E2EA]/80 font-medium">
              <span>CGPA: 7.0 / 10</span>
              <span>Class of 2029</span>
            </div>
          </div>

          {/* Card 2: Personal Profile */}
          <div className="p-6 rounded-[24px] border border-[#D7E2EA]/10 bg-white/[0.02] backdrop-blur-md flex flex-col gap-4">
            <h3 className="text-xs uppercase tracking-widest text-[#D7E2EA]/40 font-semibold">Profile Details</h3>
            <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-sm font-light">
              <div className="flex flex-col gap-0.5">
                <span className="text-xs text-[#D7E2EA]/40 uppercase tracking-wider">Date of Birth</span>
                <span className="text-[#D7E2EA] font-medium">19 May 2006</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-xs text-[#D7E2EA]/40 uppercase tracking-wider">Location</span>
                <span className="text-[#D7E2EA] font-medium">Belagavi, India</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-xs text-[#D7E2EA]/40 uppercase tracking-wider">Languages</span>
                <span className="text-[#D7E2EA] font-medium">English, Kannada, Hindi</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-xs text-[#D7E2EA]/40 uppercase tracking-wider">Interests</span>
                <span className="text-[#D7E2EA] font-medium">Bikes, Cricket, Sports</span>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Contact CTA Button */}
        <FadeIn delay={0.1} y={20} className="mt-16 sm:mt-20 md:mt-24">
          <ContactButton onClick={handleContactClick} />
        </FadeIn>
      </div>
    </section>
  );
};

export default AboutSection;
