import { create } from "zustand";

type Profile = {
  id: number | string;
  username: string;
  setName: (name: string) => void;
  setId: (id: number) => void;
};

export const useProfile = create<Profile>()((set) => ({
  id: "",
  username: "",
  setName: (value) =>
    set((state) => {
      state.username = value;
      state.username = value;
      return { username: state.username };
    }),
  setId: (value) =>
    set((state) => {
      state.id = value;
      return { id: state.id };
    }),
}));
