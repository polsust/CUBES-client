import { create } from "zustand";
import User from "../types/User";

interface AuthStore {
  user: User | null;
  setUser: (jwt: string) => User;
}

const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  setUser: (jwt) => {




    set({ user: })
  }
}));
