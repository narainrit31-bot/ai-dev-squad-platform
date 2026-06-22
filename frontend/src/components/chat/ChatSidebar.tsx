'use client';

import { motion } from 'framer-motion';

const rooms = [
  { id: 1, name: 'General', unread: 0, online: 8 },
  { id: 2, name: 'Project #1', unread: 2, online: 5 },
  { id: 3, name: 'Frontend Team', unread: 0, online: 3 },
  { id: 4, name: 'Backend Team', unread: 1, online: 3 },
];

export function ChatSidebar() {
  return (
    <motion.div
      className="w-64 glass-effect border-r border-gray-700 p-4 flex flex-col"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-6">
        <h3 className="text-xl font-bold">Chat Rooms</h3>
      </div>
      <div className="flex-1 space-y-2">
        {rooms.map((room) => (
          <motion.div
            key={room.id}
            className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
            whileHover={{ x: 5 }}
          >
            <div className="flex items-center justify-between">
              <p className="font-semibold">{room.name}</p>
              {room.unread > 0 && (
                <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                  {room.unread}
                </span>
              )}
            </div>
            <p className="text-xs text-gray-400 mt-1">🟢 {room.online} online</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
