import { ReactNode, createContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Socket, io } from "socket.io-client";
import { useToken } from "../pages/login/store";

interface SocketContextType {
  socket: Socket;
  messages: string[];
  setMessages: React.Dispatch<React.SetStateAction<string[]>>;
}

export const SocketContext = createContext<SocketContextType | null>(null);
const socket = io("https://socket-io-server-t5eb.onrender.com");

const SocketProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<string[]>([]);
  const { token } = useToken();
  useEffect(() => {
    if (token) {
      socket.on("notify", (data) => {
        toast.success(data?.message, {
          position: "top-right",
        });
      });

      socket.on("receive_message", (data) => {
        setMessages((prev) => [...prev, data?.message]);
      });
    }

    return () => {
      socket.off("notify");
      socket.off("receive_message");
    };
  }, [token]);
  return (
    <SocketContext.Provider value={{ socket, messages, setMessages }}>
      <ToastContainer />
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
