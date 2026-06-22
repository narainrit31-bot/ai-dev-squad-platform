'use client';

import { motion } from 'framer-motion';

export function APIMonitor() {
  const endpoints = [
    { method: 'GET', path: '/api/agents', status: '200', time: '45ms' },
    { method: 'POST', path: '/api/tasks', status: '201', time: '120ms' },
    { method: 'GET', path: '/api/projects', status: '200', time: '65ms' },
  ];

  return (
    <motion.div
      className="glass-effect rounded-lg p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h3 className="text-2xl font-bold mb-6">API Monitor</h3>
      <div className="space-y-2">
        {endpoints.map((endpoint, idx) => (
          <motion.div
            key={idx}
            className="flex items-center justify-between p-3 rounded-lg bg-white/5"
            whileHover={{ x: 3 }}
          >
            <div className="flex-1">
              <p className="text-sm"><span className="font-mono text-blue-400">{endpoint.method}</span> {endpoint.path}</p>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <span className="bg-green-900/30 text-green-400 px-2 py-1 rounded">{endpoint.status}</span>
              <span className="text-gray-400">{endpoint.time}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
