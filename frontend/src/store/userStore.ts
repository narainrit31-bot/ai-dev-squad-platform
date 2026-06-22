'use client';

import { create } from 'zustand';

interface UserState {
  userId: string | null;
  username: string | null;
  email: string | null;
  avatar: string | null;
  isAuthenticated: boolean;
  setUser: (userId: string, username: string, email: string, avatar?: string) => void;
  logout: () => void;
}

const useUserStore = create<UserState>((set) => ({
  userId: null,
  username: null,
  email: null,
  avatar: null,
  isAuthenticated: false,
  setUser: (userId, username, email, avatar) =>
    set({
      userId,
      username,
      email,
      avatar,
      isAuthenticated: true,
    }),
  logout: () =>
    set({
      userId: null,
      username: null,
      email: null,
      avatar: null,
      isAuthenticated: false,
    }),
}));

export default useUserStore;
