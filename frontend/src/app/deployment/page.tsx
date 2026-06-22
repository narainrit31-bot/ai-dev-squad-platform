'use client';

import { motion } from 'framer-motion';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { Card } from '@/components/ui/Card';
import { ProgressBar } from '@/components/ui/ProgressBar';

const deploymentStages = [
  { name: 'Build', progress: 100, status: 'completed' },
  { name: 'Test', progress: 100, status: 'completed' },
  { name: 'Security Scan', progress: 85, status: 'in-progress' },
  { name: 'Deploy', progress: 0, status: 'pending' },
];

export default function Deployment() {
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
            className="space-y-6 max-w-4xl"
          >
            <div>
              <h1 className="text-4xl font-bold gradient-text mb-2">Deployment Center</h1>
              <p className="text-gray-400">Monitor and manage your deployments</p>
            </div>

            {/* Deployment Pipeline */}
            <Card title="Current Deployment Pipeline">
              <div className="space-y-6">
                {deploymentStages.map((stage, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <ProgressBar progress={stage.progress} label={stage.name} />
                    <p className="text-xs mt-2 text-gray-400 capitalize">{stage.status}</p>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Deployment History */}
            <Card title="Recent Deployments">
              <div className="space-y-3">
                {[
                  { version: '1.0.0', environment: 'production', status: 'live', time: '2 hours ago' },
                  { version: '0.9.0', environment: 'staging', status: 'live', time: '1 day ago' },
                  { version: '0.8.0', environment: 'development', status: 'live', time: '3 days ago' },
                ].map((deploy, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10"
                    whileHover={{ x: 5 }}
                  >
                    <div>
                      <p className="font-semibold">v{deploy.version}</p>
                      <p className="text-sm text-gray-400">{deploy.environment}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-green-400">✓ {deploy.status}</p>
                      <p className="text-xs text-gray-500">{deploy.time}</p>
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
