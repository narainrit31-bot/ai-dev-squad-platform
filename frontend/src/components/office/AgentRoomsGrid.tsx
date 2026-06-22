'use client';

import { motion } from 'framer-motion';

const agents = [
  { id: 1, name: 'Project Manager', emoji: '🎯', activity: 'Analyzing requirements' },
  { id: 2, name: 'UI/UX Designer', emoji: '🎨', activity: 'Creating wireframes' },
  { id: 3, name: 'Frontend Developer', emoji: '💻', activity: 'Building components' },
  { id: 4, name: 'Backend Developer', emoji: '⚙️', activity: 'Creating APIs' },
  { id: 5, name: 'AI Engineer', emoji: '🤖', activity: 'Training models' },
  { id: 6, name: 'QA Tester', emoji: '🧪', activity: 'Running tests' },
  { id: 7, name: 'DevOps Engineer', emoji: '🚀', activity: 'Deploying' },
  { id: 8, name: 'Marketing Specialist', emoji: '📢', activity: 'Creating content' },
];

export function AgentRoomsGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {agents.map((agent) => (
        <motion.div
          key={agent.id}
          className="glass-effect rounded-lg p-6 hover:bg-white/20 transition-all cursor-pointer"
          variants={itemVariants}
          whileHover={{ translateY: -5, scale: 1.02 }}
        >
          <div className="text-4xl mb-3">{agent.emoji}</div>
          <h3 className="text-lg font-bold mb-1">{agent.name}</h3>
          <p className="text-sm text-gray-400">{agent.activity}</p>
          <div className="mt-4 flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-green-400">Active</span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
