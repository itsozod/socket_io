import { create } from "zustand";

type Info = {
  id: number;
  username: string;
};

type Profile = {
  id: number | string;
  username: string;
  setUserInfo: (info: Info) => void;
};

export const useProfile = create<Profile>()((set) => ({
  id: "",
  username: "",
  setUserInfo: (info: Info) =>
    set((state) => {
      state.id = info.id;
      state.username = info.username;
      return { id: info.id, username: info.username };
    }),
}));
