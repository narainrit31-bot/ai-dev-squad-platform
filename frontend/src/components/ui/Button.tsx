import { motion } from 'framer-motion';

interface ButtonProps {
  onClick?: () => void;
  children: string;
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
  loading?: boolean;
}

export function Button({
  onClick,
  children,
  variant = 'primary',
  disabled = false,
  loading = false,
}: ButtonProps) {
  const variantClasses = {
    primary: 'button-primary',
    secondary: 'button-secondary',
    danger: 'bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors',
  };

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled || loading}
      className={`${variantClasses[variant]} disabled:opacity-50 disabled:cursor-not-allowed`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {loading ? 'Loading...' : children}
    </motion.button>
  );
}
