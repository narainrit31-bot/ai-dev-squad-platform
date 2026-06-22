'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const menuItems = [
  { href: '/dashboard', label: 'Dashboard', icon: '📊' },
  { href: '/office', label: 'AI Office', icon: '🏢' },
  { href: '/chat', label: 'Chat', icon: '💬' },
  { href: '/tasks', label: 'Tasks', icon: '📋' },
  { href: '/api-monitor', label: 'API Monitor', icon: '📡' },
  { href: '/deployment', label: 'Deployment', icon: '🚀' },
];

export function Sidebar() {
  return (
    <motion.div
      className="w-64 glass-effect border-r border-gray-700 p-6 hidden md:flex flex-col"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-8">
        <h1 className="text-2xl font-bold gradient-text">🤖 AI Dev Squad</h1>
        <p className="text-gray-400 text-sm mt-1">Command Center</p>
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <motion.div
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              whileHover={{ x: 5 }}
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.label}</span>
            </motion.div>
          </Link>
        ))}
      </nav>

      <div className="pt-6 border-t border-gray-700">
        <motion.button
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg font-semibold"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          New Project
        </motion.button>
      </div>
    </motion.div>
  );
}
