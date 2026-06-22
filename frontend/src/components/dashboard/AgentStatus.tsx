'use client';

import { motion } from 'framer-motion';

const agents = [
  { id: 1, name: 'Project Manager', emoji: '🎯', status: 'analyzing', progress: 65 },
  { id: 2, name: 'UI/UX Designer', emoji: '🎨', status: 'designing', progress: 45 },
  { id: 3, name: 'Frontend Dev', emoji: '💻', status: 'coding', progress: 78 },
  { id: 4, name: 'Backend Dev', emoji: '⚙️', status: 'building', progress: 55 },
  { id: 5, name: 'AI Engineer', emoji: '🤖', status: 'training', progress: 30 },
  { id: 6, name: 'QA Tester', emoji: '🧪', status: 'testing', progress: 90 },
  { id: 7, name: 'DevOps', emoji: '🚀', status: 'deploying', progress: 20 },
  { id: 8, name: 'Marketing', emoji: '📢', status: 'creating', progress: 50 },
];

export function AgentStatus() {
  return (
    <motion.div
      className="glass-effect rounded-lg p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold mb-6">Agent Status</h3>
      <div className="space-y-4">
        {agents.map((agent) => (
          <motion.div
            key={agent.id}
            className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            whileHover={{ x: 5 }}
          >
            <div className="text-3xl">{agent.emoji}</div>
            <div className="flex-1">
              <p className="font-semibold">{agent.name}</p>
              <p className="text-sm text-gray-400 capitalize">{agent.status}</p>
            </div>
            <div className="w-20">
              <div className="bg-gray-700 rounded-full h-2">
                <motion.div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${agent.progress}%` }}
                  transition={{ duration: 1.5 }}
                />
              </div>
              <p className="text-xs text-gray-400 mt-1 text-right">{agent.progress}%</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
