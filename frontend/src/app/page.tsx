import { motion } from 'framer-motion';

export default function Home() {
  const agents = [
    { id: 1, name: 'Project Manager', emoji: '🎯', color: 'from-blue-600' },
    { id: 2, name: 'UI/UX Designer', emoji: '🎨', color: 'from-purple-600' },
    { id: 3, name: 'Frontend Developer', emoji: '💻', color: 'from-green-600' },
    { id: 4, name: 'Backend Developer', emoji: '⚙️', color: 'from-orange-600' },
    { id: 5, name: 'AI Engineer', emoji: '🤖', color: 'from-pink-600' },
    { id: 6, name: 'QA Tester', emoji: '🧪', color: 'from-indigo-600' },
    { id: 7, name: 'DevOps Engineer', emoji: '🚀', color: 'from-cyan-600' },
    { id: 8, name: 'Marketing Specialist', emoji: '📢', color: 'from-yellow-600' },
  ];

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
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>

        <motion.div
          className="relative text-center z-10 max-w-4xl px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text">
            AI Dev Squad Platform
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            8 Specialized AI Agents Working Together in Real-Time
          </p>
          <div className="flex gap-4 justify-center">
            <motion.button
              className="button-primary text-lg px-8 py-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Launch Dashboard
            </motion.button>
            <motion.button
              className="button-secondary text-lg px-8 py-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Agents Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-5xl font-bold text-center mb-16 gradient-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Meet Your AI Agents
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {agents.map((agent) => (
              <motion.div
                key={agent.id}
                className={`agent-card bg-gradient-to-br ${agent.color} to-transparent p-6 rounded-lg`}
                variants={itemVariants}
                whileHover={{ translateY: -5 }}
              >
                <div className="text-5xl mb-4">{agent.emoji}</div>
                <h3 className="text-xl font-bold mb-2">{agent.name}</h3>
                <p className="text-gray-300 text-sm">Specialized AI Agent</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
