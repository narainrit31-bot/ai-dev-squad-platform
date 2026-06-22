'use client';

import { motion } from 'framer-motion';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { DashboardGrid } from '@/components/dashboard/DashboardGrid';
import { AgentStatus } from '@/components/dashboard/AgentStatus';
import { TaskBoard } from '@/components/dashboard/TaskBoard';
import { APIMonitor } from '@/components/dashboard/APIMonitor';

export default function Dashboard() {
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
            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <StatsCard label="Active Projects" value="12" icon="📊" />
              <StatsCard label="Active Agents" value="48" icon="🤖" />
              <StatsCard label="Tasks Completed" value="156" icon="✅" />
              <StatsCard label="System Health" value="99.9%" icon="💚" />
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <AgentStatus />
              </div>
              <div>
                <APIMonitor />
              </div>
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <TaskBoard />
              <DashboardGrid />
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}

function StatsCard({ label, value, icon }: { label: string; value: string; icon: string }) {
  return (
    <motion.div
      className="glass-effect p-4 rounded-lg"
      whileHover={{ translateY: -2 }}
    >
      <div className="text-3xl mb-2">{icon}</div>
      <p className="text-gray-400 text-sm">{label}</p>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </motion.div>
  );
}
