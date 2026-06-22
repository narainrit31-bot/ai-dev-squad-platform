'use client';

import { motion } from 'framer-motion';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { Office3D } from '@/components/office/Office3D';
import { AgentRoomsGrid } from '@/components/office/AgentRoomsGrid';

export default function Office() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 overflow-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-4xl font-bold gradient-text mb-2">AI Office</h1>
              <p className="text-gray-400">Watch your AI agents collaborate in real-time</p>
            </div>

            {/* Office Visualization */}
            <div className="glass-effect rounded-lg p-6 min-h-96">
              <Office3D />
            </div>

            {/* Agent Rooms */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Agent Rooms</h2>
              <AgentRoomsGrid />
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
