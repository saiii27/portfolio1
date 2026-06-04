import React from 'react';
import FadeIn from '../components/FadeIn';

interface ServiceItem {
  num: string;
  name: string;
  desc: string;
}

const SERVICES: ServiceItem[] = [
  {
    num: '01',
    name: 'Programming Languages',
    desc: 'Strong foundation in core programming languages like C and Java, focused on efficient problem solving and logic implementation.',
  },
  {
    num: '02',
    name: 'CS Fundamentals',
    desc: 'Deep knowledge of Data Structures and Algorithms (DSA), Design and Analysis of Algorithms (DAA), and Object-Oriented Programming (OOP).',
  },
  {
    num: '03',
    name: 'Web Development',
    desc: 'Building responsive layouts using HTML, CSS, JavaScript, and understanding core modern web engineering concepts.',
  },
  {
    num: '04',
    name: 'Artificial Intelligence',
    desc: 'Specializing in Computer Science & AI, with a passion for emerging technologies, machine learning, and intelligent automation systems.',
  },
  {
    num: '05',
    name: 'Key Attributes',
    desc: 'Quick learner, adaptable to new tech stacks, strong analytical skills, positive attitude, and a highly collaborative team player.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="relative bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 z-10"
    >
      <div className="max-w-5xl mx-auto flex flex-col">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20 md:mb-28">
          <h2
            className="font-black uppercase leading-none select-none text-[#0C0C0C]"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Skills
          </h2>
        </FadeIn>

        {/* List of Services */}
        <div className="flex flex-col border-t border-[rgba(12,12,12,0.15)]">
          {SERVICES.map((service, i) => (
            <FadeIn
              key={service.num}
              delay={i * 0.1}
              y={30}
              className="flex flex-row items-center border-b border-[rgba(12,12,12,0.15)] py-8 sm:py-10 md:py-12 gap-6 sm:gap-10 md:gap-16"
            >
              {/* Number */}
              <div
                className="font-black leading-none select-none text-[#0C0C0C] w-[20%] min-w-[60px] sm:min-w-[100px] md:min-w-[140px]"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {service.num}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2 flex-grow">
                <h3
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="font-light leading-relaxed text-[#0C0C0C] opacity-60 max-w-2xl"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {service.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
