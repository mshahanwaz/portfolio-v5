import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import cn from '@/core/utils/cn';

export default function Button({ children, className }: Props) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={cn(
        'select-none rounded-lg bg-gray-900 px-5 py-3 font-semibold tracking-tight text-gray-50 ring-0 ring-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-4 dark:bg-gray-200 dark:text-gray-900 dark:ring-gray-600 dark:hover:bg-gray-50 sm:font-medium sm:tracking-normal',
        className,
      )}
    >
      {children}
    </motion.button>
  );
}

type Props = {
  children: ReactNode;
  className?: string;
};
