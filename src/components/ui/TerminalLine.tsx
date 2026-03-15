'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface TerminalLineProps {
  children: ReactNode;
  delay?: number;
}

export function TerminalLine({ children, delay = 0 }: TerminalLineProps) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay, ease: 'easeOut' }}
      style={{ display: 'block' }}
    >
      {children}
    </motion.span>
  );
}
