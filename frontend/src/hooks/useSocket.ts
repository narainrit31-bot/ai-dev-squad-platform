'use client';

import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { motion } from 'framer-motion';

interface Message {
  id: string;
  sender: string;
  message: string;
  timestamp: string;
  roomId: string;
}

const useSocket = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [connected, setConnected] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [onlineUsers, setOnlineUsers] = useState<number>(0);

  useEffect(() => {
    const newSocket = io(process.env.NEXT_PUBLIC_WS_URL || 'http://localhost:3001', {
      namespace: 'chat',
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      reconnectionAttempts: 5,
    });

    newSocket.on('connect', () => {
      console.log('✅ Connected to WebSocket');
      setConnected(true);
    });

    newSocket.on('disconnect', () => {
      console.log('❌ Disconnected from WebSocket');
      setConnected(false);
    });

    newSocket.on('new_message', (message: Message) => {
      setMessages((prev) => [...prev, message]);
    });

    newSocket.on('user_connected', (data: any) => {
      console.log('👤 User connected:', data);
      setOnlineUsers((prev) => prev + 1);
    });

    newSocket.on('user_disconnected', (data: any) => {
      console.log('👤 User disconnected:', data);
      setOnlineUsers((prev) => Math.max(0, prev - 1));
    });

    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, []);

  const sendMessage = (messageText: string, roomId: string) => {
    if (socket && connected) {
      socket.emit('message', {
        sender: 'User',
        message: messageText,
        roomId,
      });
    }
  };

  const joinRoom = (roomId: string) => {
    if (socket && connected) {
      socket.emit('join_room', { roomId });
    }
  };

  const leaveRoom = (roomId: string) => {
    if (socket && connected) {
      socket.emit('leave_room', { roomId });
    }
  };

  return {
    socket,
    connected,
    messages,
    onlineUsers,
    sendMessage,
    joinRoom,
    leaveRoom,
  };
};

export default useSocket;
