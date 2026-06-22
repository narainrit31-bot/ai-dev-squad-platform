'use client';

import { motion } from 'framer-motion';

const agents = [
  { id: 1, name: 'Project Manager', emoji: '🎯', description: 'Analyzing requirements...' },
  { id: 2, name: 'UI/UX Designer', emoji: '🎨', description: 'Creating wireframes...' },
  { id: 3, name: 'Frontend Developer', emoji: '💻', description: 'Building components...' },
  { id: 4, name: 'Backend Developer', emoji: '⚙️', description: 'Creating APIs...' },
  { id: 5, name: 'AI Engineer', emoji: '🤖', description: 'Training models...' },
  { id: 6, name: 'QA Tester', emoji: '🧪', description: 'Running tests...' },
  { id: 7, name: 'DevOps Engineer', emoji: '🚀', description: 'Deploying...' },
  { id: 8, name: 'Marketing Specialist', emoji: '📢', description: 'Creating content...' },
];

export function Office3D() {
  return (
    <div className="w-full h-96 flex items-center justify-center">
      <div className="text-center">
        <motion.div
          className="text-6xl mb-4 inline-block"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🏢
        </motion.div>
        <p className="text-gray-400">3D Office visualization coming soon...</p>
        <p className="text-sm text-gray-500 mt-2">Phase 3: Multiplayer Office with PixiJS</p>
      </div>
    </div>
  );
}
