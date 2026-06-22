'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import useSocket from '@/hooks/useSocket';

export function AdvancedChatWindow() {
  const { messages, connected, sendMessage } = useSocket();
  const [inputValue, setInputValue] = useState('');
  const [selectedRoom, setSelectedRoom] = useState('general');

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      sendMessage(inputValue, selectedRoom);
      setInputValue('');
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full">
      {/* Header */}
      <motion.div
        className="glass-effect border-b border-gray-700 px-6 py-4 flex items-center justify-between"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div>
          <h2 className="text-xl font-bold">{selectedRoom}</h2>
          <p className="text-sm text-gray-400">
            {connected ? '🟢 Connected' : '🔴 Disconnected'}
          </p>
        </div>
      </motion.div>

      {/* Messages */}
      <div className="flex-1 overflow-auto p-6 space-y-4">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full text-gray-400">
            <p>No messages yet. Start the conversation!</p>
          </div>
        ) : (
          messages.map((msg, idx) => (
            <motion.div
              key={idx}
              className="glass-effect p-4 rounded-lg max-w-md"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <p className="font-semibold text-blue-400">{msg.sender}</p>
              <p className="mt-2">{msg.message}</p>
              <p className="text-xs text-gray-500 mt-2">{msg.timestamp}</p>
            </motion.div>
          ))
        )}
      </div>

      {/* Input */}
      <motion.div
        className="glass-effect border-t border-gray-700 p-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-1 glass-effect px-4 py-2 rounded-lg focus:outline-none border border-gray-700 focus:border-blue-500"
          />
          <motion.button
            onClick={handleSendMessage}
            disabled={!connected}
            className="button-primary px-6 py-2 rounded-lg disabled:opacity-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
