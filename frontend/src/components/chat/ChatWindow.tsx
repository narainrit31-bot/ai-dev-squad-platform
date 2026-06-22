'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export function ChatWindow() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Project Manager', message: 'Project roadmap updated', timestamp: '10:30 AM' },
    { id: 2, sender: 'UI/UX Designer', message: 'Wireframes completed', timestamp: '10:45 AM' },
  ]);

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 p-6 overflow-auto space-y-4">
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            className="glass-effect p-4 rounded-lg max-w-md"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <p className="font-semibold text-blue-400">{msg.sender}</p>
            <p className="mt-2">{msg.message}</p>
            <p className="text-xs text-gray-500 mt-2">{msg.timestamp}</p>
          </motion.div>
        ))}
      </div>
      <div className="p-4 border-t border-gray-700">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 glass-effect px-4 py-2 rounded-lg focus:outline-none"
          />
          <button className="button-primary px-6 py-2 rounded-lg">Send</button>
        </div>
      </div>
    </div>
  );
}
