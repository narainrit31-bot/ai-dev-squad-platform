'use client';

import { motion } from 'framer-motion';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const initialTasks = [
  { id: 1, title: 'Design Dashboard', agent: 'UI/UX Designer', status: 'In Progress', priority: 'High', dueDate: '2026-06-25' },
  { id: 2, title: 'Create API Endpoints', agent: 'Backend Dev', status: 'In Progress', priority: 'High', dueDate: '2026-06-24' },
  { id: 3, title: 'Build Components', agent: 'Frontend Dev', status: 'Completed', priority: 'Medium', dueDate: '2026-06-23' },
  { id: 4, title: 'Write Tests', agent: 'QA Tester', status: 'In Progress', priority: 'Medium', dueDate: '2026-06-26' },
  { id: 5, title: 'Setup CI/CD', agent: 'DevOps', status: 'Pending', priority: 'High', dueDate: '2026-06-28' },
];

export default function Tasks() {
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
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold gradient-text mb-2">Tasks</h1>
                <p className="text-gray-400">Manage and track all project tasks</p>
              </div>
              <Button variant="primary">+ New Task</Button>
            </div>

            {/* Task Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <StatsCard label="Total Tasks" value="12" icon="📋" />
              <StatsCard label="In Progress" value="4" icon="⏳" />
              <StatsCard label="Completed" value="6" icon="✅" />
              <StatsCard label="Overdue" value="1" icon="⚠️" />
            </div>

            {/* Tasks List */}
            <Card title="Active Tasks">
              <div className="space-y-3">
                {initialTasks.map((task) => (
                  <motion.div
                    key={task.id}
                    className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
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
                        task.priority === 'Medium' ? 'bg-yellow-900/30 text-yellow-400' :
                        'bg-blue-900/30 text-blue-400'
                      }`}>
                        {task.priority}
                      </span>
                      <span className="text-xs text-gray-500">{task.dueDate}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
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
