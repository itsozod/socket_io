import { ReactNode, createContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Socket, io } from "socket.io-client";
import { useToken } from "../pages/login/store";
import { useProfile } from "../components/header/store";
const api = import.meta.env.VITE_API_ENDPOINT;

interface SocketContextType {
  socket: Socket;
  messages: Messages[];
  setMessages: React.Dispatch<React.SetStateAction<Messages[]>>;
}

export interface Messages {
  id: number | string;
  message: string;
  username: string;
  event: string;
}

export const SocketContext = createContext<SocketContextType | null>(null);
const socket = io(api);
// const socket = io("http://localhost:3002");

const SocketProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<Messages[]>([]);
  const { token } = useToken();
  const { username, id } = useProfile();

  useEffect(() => {
    if (token) {
      socket.on("notify", (data) => {
        if (data?.id !== id) {
          toast.success(`${data?.username}: ${data?.message}`, {
            position: "top-right",
          });
        }
      });

      socket.on("receive_message", (data) => {
        const messageObj = {
          id: data?.id,
          message: data?.message,
          username: data?.username,
          event: data?.id !== id ? "receive" : "sent",
        };

        setMessages((prev) => [...prev, messageObj]);
      });
    }

    return () => {
      socket.off("notify");
      socket.off("receive_message");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, username]);
  return (
    <SocketContext.Provider value={{ socket, messages, setMessages }}>
      <ToastContainer />
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
