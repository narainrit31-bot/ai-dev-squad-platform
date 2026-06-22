'use client';

import { motion } from 'framer-motion';

export function DashboardGrid() {
  return (
    <motion.div
      className="glass-effect rounded-lg p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <h3 className="text-2xl font-bold mb-6">System Overview</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 rounded-lg bg-white/5">
          <p className="text-gray-400 text-sm">CPU Usage</p>
          <p className="text-2xl font-bold mt-2">45%</p>
        </div>
        <div className="p-4 rounded-lg bg-white/5">
          <p className="text-gray-400 text-sm">Memory</p>
          <p className="text-2xl font-bold mt-2">62%</p>
        </div>
        <div className="p-4 rounded-lg bg-white/5">
          <p className="text-gray-400 text-sm">Network</p>
          <p className="text-2xl font-bold mt-2">2.4 Mbps</p>
        </div>
        <div className="p-4 rounded-lg bg-white/5">
          <p className="text-gray-400 text-sm">Uptime</p>
          <p className="text-2xl font-bold mt-2">99.9%</p>
        </div>
      </div>
    </motion.div>
  );
}
