import { motion } from 'framer-motion';

interface ProgressBarProps {
  progress: number;
  label?: string;
  animated?: boolean;
}

export function ProgressBar({ progress, label, animated = true }: ProgressBarProps) {
  return (
    <div>
      {label && <p className="text-sm text-gray-400 mb-2">{label}</p>}
      <div className="w-full bg-gray-700 rounded-full h-2">
        <motion.div
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={animated ? { duration: 1.5 } : { duration: 0 }}
        />
      </div>
      <p className="text-xs text-gray-400 mt-1">{progress}%</p>
    </div>
  );
}
