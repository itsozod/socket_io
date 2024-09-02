import { ReactNode, createContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Socket, io } from "socket.io-client";
import { useToken } from "../pages/login/store";
import { useProfile } from "../components/header/store";

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
  seen: boolean;
}

export const SocketContext = createContext<SocketContextType | null>(null);
// const socket = io("https://socket-io-server-2fmd.onrender.com");
const socket = io("http://localhost:3002");

const SocketProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<Messages[]>([]);
  const { token } = useToken();
  const { username } = useProfile();

  useEffect(() => {
    if (token) {
      socket.on("notify", (data) => {
        toast.success(`${data?.username}: ${data?.message}`, {
          position: "top-right",
        });
      });

      socket.on("receive_message", (data) => {
        console.log("received", data);

        const messageObj = {
          id: data?.id,
          message: data?.message,
          username: data?.username,
          seen: data?.seen,
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
