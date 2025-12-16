"use client";

import { motion, MotionProps, Variants } from 'framer-motion';
import { FC } from 'react';

type TextAnimateProps = {
  children: string;
  className?: string;
  segmentClassName?: string;
  delay?: number;
  duration?: number;
  animation?: 'blurInUp' | 'blurInDown' | 'fadeIn';
  by?: 'character' | 'word';
} & MotionProps;

export const TextAnimate: FC<TextAnimateProps> = ({
  children,
  className,
  segmentClassName,
  delay = 0,
  duration = 0.3, // Faster default for this use case
  animation = 'blurInUp',
  by = 'word',
  ...props
}) => {
  const segments = by === 'character' ? children.split('') : children.split(' ');

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration / segments.length, delayChildren: delay * i },
    }),
    exit: { opacity: 0, transition: { staggerChildren: 0.05, staggerDirection: -1 } }
  };

  const childVariants: Variants = {
    hidden: {
      y: animation === 'blurInUp' ? 10 : animation === 'blurInDown' ? -10 : 0,
      opacity: 0,
      filter: 'blur(8px)'
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: duration,
      },
    },
    exit: {
      y: animation === 'blurInUp' ? -10 : 10,
      opacity: 0,
      filter: 'blur(8px)',
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`inline-block ${className}`}
      {...props}
    >
      {segments.map((segment, i) => (
        <motion.span
          key={`${segment}-${i}`}
          variants={childVariants}
          className={`inline-block whitespace-pre ${segmentClassName}`}
        >
          {segment}
          {by === 'word' && i < segments.length - 1 && '\u00A0'}
        </motion.span>
      ))}
    </motion.div>
  );
};
