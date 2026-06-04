import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const Character: React.FC<{
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}> = ({ char, index, total, progress }) => {
  // Distribute the starts over the first 80% of the scroll range
  const start = (index / total) * 0.8;
  // Let each character take 20% of scroll progress to transition from 0.2 to 1
  const end = Math.min(1.0, start + 0.2);
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-0 select-none">{char === ' ' ? '\u00A0' : char}</span>
      <motion.span
        style={{ opacity }}
        className="absolute left-0 top-0 select-none pointer-events-none"
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');

  // Pre-calculate flat character index mapping to prevent layout/word wrap breakages
  let charCounter = 0;
  const wordObjects = words.map((word) => {
    const charsList = word.split('');
    const mapped = charsList.map((char) => {
      const currentIdx = charCounter;
      charCounter++;
      return { char, idx: currentIdx };
    });
    // Account for space after the word
    charCounter++;
    return mapped;
  });

  const totalChars = charCounter;

  return (
    <p
      ref={containerRef}
      className={`text-center leading-relaxed text-[#D7E2EA] font-medium max-w-[560px] ${className}`}
      style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
    >
      {wordObjects.map((chars, wordIdx) => (
        <React.Fragment key={wordIdx}>
          <span className="inline-block whitespace-nowrap">
            {chars.map(({ char, idx }) => (
              <Character
                key={idx}
                char={char}
                index={idx}
                total={totalChars}
                progress={scrollYProgress}
              />
            ))}
          </span>
          {wordIdx < words.length - 1 && (
            <Character
              key={`space-${wordIdx}`}
              char=" "
              index={chars[chars.length - 1]?.idx + 1 || totalChars}
              total={totalChars}
              progress={scrollYProgress}
            />
          )}
        </React.Fragment>
      ))}
    </p>
  );
};

export default AnimatedText;
