import { ReactNode, createContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Socket, io } from "socket.io-client";
import { useToken } from "../pages/login/store";
import { useProfile } from "../components/header/store";
const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;

interface SocketContextType {
  socket: Socket;
  messages: Messages[];
  setMessages: React.Dispatch<React.SetStateAction<Messages[]>>;
}

export interface Messages {
  id: number;
  message: string;
  username: string;
  event: string;
}

export const SocketContext = createContext<SocketContextType | null>(null);
const socket = io(API_ENDPOINT);

const SocketProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<Messages[]>([]);
  const { token } = useToken();
  const { username } = useProfile();
  useEffect(() => {
    if (token) {
      socket.on("notify", (data) => {
        console.log("Notify", data);
        toast.success(`${data?.username}: ${data?.message}`, {
          position: "top-right",
        });
      });

      socket.on("receive_message", (data) => {
        console.log("Data", data);
        const messageObj = {
          id: Date.now(),
          message: data?.message,
          username: data?.username,
          event: "receive",
        };

        setMessages((prev) => [...prev, messageObj]);
      });
    }

    return () => {
      socket.off("notify");
      socket.off("receive_message");
    };
  }, [token, username]);
  return (
    <SocketContext.Provider value={{ socket, messages, setMessages }}>
      <ToastContainer />
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
