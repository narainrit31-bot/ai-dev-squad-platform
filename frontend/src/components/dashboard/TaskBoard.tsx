'use client';

import { motion } from 'framer-motion';

export function TaskBoard() {
  const tasks = [
    { id: 1, title: 'Design Dashboard', agent: 'UI/UX Designer', status: 'In Progress', priority: 'High' },
    { id: 2, title: 'Create API Endpoints', agent: 'Backend Dev', status: 'In Progress', priority: 'High' },
    { id: 3, title: 'Build Components', agent: 'Frontend Dev', status: 'Completed', priority: 'Medium' },
    { id: 4, title: 'Write Tests', agent: 'QA Tester', status: 'In Progress', priority: 'Medium' },
  ];

  return (
    <motion.div
      className="glass-effect rounded-lg p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <h3 className="text-2xl font-bold mb-6">Current Tasks</h3>
      <div className="space-y-3">
        {tasks.map((task) => (
          <motion.div
            key={task.id}
            className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            whileHover={{ x: 5 }}
          >
            <div className="flex-1">
              <p className="font-semibold">{task.title}</p>
              <p className="text-sm text-gray-400">{task.agent}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className={`text-xs px-2 py-1 rounded-full ${
                task.status === 'Completed' ? 'bg-green-900/30 text-green-400' :
                task.status === 'In Progress' ? 'bg-blue-900/30 text-blue-400' :
                'bg-gray-900/30 text-gray-400'
              }`}>
                {task.status}
              </span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                task.priority === 'High' ? 'bg-red-900/30 text-red-400' :
                'bg-yellow-900/30 text-yellow-400'
              }`}>
                {task.priority}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
