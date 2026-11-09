import { create } from 'zustand';
import type { User } from '@/types/user';

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  isAuthLoading: boolean;
  setUser: (user: User) => void;
  clearIsAuthenticated: () => void;
}

export const useAuthStore = create<AuthStore>()(set => ({
  user: null,
  isAuthenticated: false,
  isAuthLoading: true,
  setUser: user =>
    set({
      user,
      isAuthenticated: true,
      isAuthLoading: false,
    }),


  clearIsAuthenticated: () =>
    set({
      user: null,
      isAuthenticated: false,
      isAuthLoading: false,
    }),
}));