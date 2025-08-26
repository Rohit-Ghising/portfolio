import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className, 
  hover = false,
  onClick 
}) => {
  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.02 } : undefined}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className={clsx(
        'bg-white dark:bg-gray-800 rounded-xl shadow-lg backdrop-blur-sm',
        'border border-gray-200 dark:border-gray-700',
        hover && 'cursor-pointer hover:shadow-xl',
        onClick && 'cursor-pointer',
        className
      )}
    >
      {children}
    </motion.div>
  );
};