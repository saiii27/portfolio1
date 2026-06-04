import React from 'react';

interface ContactButtonProps {
  className?: string;
  onClick?: () => void;
}

export const ContactButton: React.FC<ContactButtonProps> = ({ className = '', onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`contact-btn rounded-full text-white font-medium uppercase tracking-widest transition-transform duration-200 active:scale-95 px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base cursor-pointer ${className}`}
    >
      Contact Me
    </button>
  );
};

export default ContactButton;
