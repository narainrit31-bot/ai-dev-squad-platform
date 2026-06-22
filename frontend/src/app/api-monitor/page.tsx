'use client';

import { motion } from 'framer-motion';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { Card } from '@/components/ui/Card';

const endpoints = [
  {
    method: 'GET',
    path: '/api/agents',
    avgTime: '45ms',
    totalRequests: 1024,
    errors: 0,
    status: '✓',
  },
  {
    method: 'POST',
    path: '/api/tasks',
    avgTime: '120ms',
    totalRequests: 512,
    errors: 2,
    status: '⚠️',
  },
  {
    method: 'GET',
    path: '/api/projects',
    avgTime: '65ms',
    totalRequests: 768,
    errors: 0,
    status: '✓',
  },
  {
    method: 'PUT',
    path: '/api/agents/:id/status',
    avgTime: '89ms',
    totalRequests: 256,
    errors: 1,
    status: '⚠️',
  },
];

export default function APIMonitorPage() {
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
              <h1 className="text-4xl font-bold gradient-text mb-2">API Monitor</h1>
              <p className="text-gray-400">Monitor all API endpoints in real-time</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <StatsCard label="Total Endpoints" value="28" icon="🔌" />
              <StatsCard label="Total Requests" value="2.56K" icon="📊" />
              <StatsCard label="Total Errors" value="3" icon="⚠️" />
              <StatsCard label="Avg Response" value="79.75ms" icon="⚡" />
            </div>

            {/* Endpoints Table */}
            <Card title="API Endpoints">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 px-4">Method</th>
                      <th className="text-left py-3 px-4">Path</th>
                      <th className="text-left py-3 px-4">Avg Time</th>
                      <th className="text-left py-3 px-4">Requests</th>
                      <th className="text-left py-3 px-4">Errors</th>
                      <th className="text-left py-3 px-4">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {endpoints.map((endpoint, idx) => (
                      <motion.tr
                        key={idx}
                        className="border-b border-gray-700 hover:bg-white/5"
                        whileHover={{ x: 5 }}
                      >
                        <td className="py-3 px-4">
                          <span className={`font-mono text-sm ${
                            endpoint.method === 'GET' ? 'text-blue-400' :
                            endpoint.method === 'POST' ? 'text-green-400' :
                            endpoint.method === 'PUT' ? 'text-yellow-400' :
                            'text-red-400'
                          }`}>
                            {endpoint.method}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-sm">{endpoint.path}</td>
                        <td className="py-3 px-4 text-sm">{endpoint.avgTime}</td>
                        <td className="py-3 px-4 text-sm">{endpoint.totalRequests}</td>
                        <td className="py-3 px-4 text-sm">{endpoint.errors}</td>
                        <td className="py-3 px-4 text-sm">{endpoint.status}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
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
