'use client';

import { motion } from 'framer-motion';

export function Header() {
  return (
    <motion.header
      className="glass-effect border-b border-gray-700 px-6 py-4 flex items-center justify-between"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <h2 className="text-2xl font-bold text-white">Welcome to AI Dev Squad</h2>
        <p className="text-gray-400 text-sm">Your collaborative AI workspace</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 bg-green-900/30 px-4 py-2 rounded-full">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-green-400">System Online</span>
        </div>
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
          U
        </div>
      </div>
    </motion.header>
  );
}
