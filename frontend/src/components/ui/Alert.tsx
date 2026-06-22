import { motion } from 'framer-motion';

interface AlertProps {
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  onClose?: () => void;
}

export function Alert({ type, title, message, onClose }: AlertProps) {
  const typeClasses = {
    success: 'bg-green-900/30 border-green-700 text-green-400',
    error: 'bg-red-900/30 border-red-700 text-red-400',
    warning: 'bg-yellow-900/30 border-yellow-700 text-yellow-400',
    info: 'bg-blue-900/30 border-blue-700 text-blue-400',
  };

  return (
    <motion.div
      className={`${typeClasses[type]} border rounded-lg p-4`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <p className="font-bold">{title}</p>
      <p className="text-sm mt-1">{message}</p>
      {onClose && (
        <button onClick={onClose} className="text-sm mt-2 underline">
          Dismiss
        </button>
      )}
    </motion.div>
  );
}
