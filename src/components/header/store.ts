import { create } from "zustand";

type Profile = {
  username: string;
  setName: (name: string) => void;
};

export const useProfile = create<Profile>()((set) => ({
  username: "",
  setName: (value) =>
    set((state) => {
      state.username = value;
      return { username: state.username };
    }),
}));
