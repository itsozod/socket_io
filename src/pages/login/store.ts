import { create } from "zustand";

type Token = {
  token: string | null;
  setToken: (token: string) => void;
  logOut: () => void;
};

export const useToken = create<Token>()((set) => ({
  token: localStorage.getItem("token") || null,
  setToken: (value) =>
    set((state) => {
      state.token = value;
      localStorage.setItem("token", JSON.stringify(state.token));
      return { token: state.token };
    }),
  logOut: () =>
    set((state) => {
      state.token = null;
      localStorage.removeItem("token");
      return { token: state.token };
    }),
}));
