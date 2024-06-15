import { ReactNode, createContext, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Socket, io } from "socket.io-client";
export const SocketContext = createContext<Socket | null>(null);
const socket = io("http://localhost:3002");

const SocketProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    socket.on("notify", (data) => {
      toast.success(data?.message, {
        position: "top-right",
      });
    });

    return () => {
      socket.off("notify");
    };
  }, []);
  return (
    <SocketContext.Provider value={socket}>
      <ToastContainer />
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
