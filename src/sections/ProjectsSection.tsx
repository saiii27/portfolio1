import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';

interface ProjectData {
  num: string;
  category: string;
  name: string;
  desc: string;
}

const PROJECTS: ProjectData[] = [
  {
    num: '01',
    category: 'Academic Project',
    name: 'Career Path Navigator',
    desc: 'Career Path Navigator is a web-based platform designed to help users identify and explore suitable career paths based on their interests, skills, educational background, and aspirations. The system provides personalized pathway suggestions and structured guidance.',
  },
  {
    num: '02',
    category: 'Sports Activity Concept',
    name: 'CSPL Cricket Portal',
    desc: 'An interactive tournament tracker and schedule portal conceptualized for the Computer Science Premier League (CSPL) Cricket Tournament, supporting match fixtures, leaderboards, team rosters, and department-level stats.',
  },
  {
    num: '03',
    category: 'Future Concept',
    name: 'AI Career Companion',
    desc: 'An intelligent companion dashboard designed to extend the Career Path Navigator, integrating basic AI techniques to analyze user skill gaps, recommending dynamic roadmaps based on real-time technology trends.',
  },
];

const ProjectCard: React.FC<{
  project: ProjectData;
  index: number;
  totalCards: number;
}> = ({ project, index, totalCards }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track the scroll progress of the card wrapper to drive the scaling effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  // Scale down from 1 to targetScale when the card is scrolled past
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[40vh] flex items-start justify-center"
      style={{
        zIndex: index + 10,
      }}
    >
      <motion.div
        style={{
          scale,
          top: `calc(${index * 28}px + 7rem)`, // Offset each sticky card
          willChange: 'transform',
        }}
        className="sticky w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-6 sm:p-8 md:p-10 flex flex-col gap-4 sm:gap-6"
      >
        {/* Top Row */}
        <div className="flex flex-row justify-between items-center w-full gap-4 border-b border-[#D7E2EA]/10 pb-4">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-black text-[#D7E2EA] leading-none select-none"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 90px)' }}
            >
              {project.num}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-[0.65rem] sm:text-xs font-semibold">
                {project.category}
              </span>
              <h3 className="text-[#D7E2EA] font-black uppercase text-base sm:text-xl md:text-2xl tracking-tight">
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton />
        </div>

        {/* Project Description */}
        <p className="text-[#D7E2EA]/70 text-xs sm:text-sm font-light max-w-3xl leading-relaxed -mt-2">
          {project.desc}
        </p>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 pt-20 pb-32 z-20 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto flex flex-col">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20 md:mb-28">
          <h2
            className="hero-heading font-black uppercase leading-none select-none"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Project
          </h2>
        </FadeIn>

        {/* Sticky Stacking Cards Container */}
        <div className="flex flex-col w-full">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.num}
              project={project}
              index={index}
              totalCards={PROJECTS.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
