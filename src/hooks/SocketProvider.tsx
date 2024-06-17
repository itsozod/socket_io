import { ReactNode, createContext, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Socket, io } from "socket.io-client";
import { useToken } from "../pages/login/store";
export const SocketContext = createContext<Socket | null>(null);
const socket = io("http://localhost:3002");

const SocketProvider = ({ children }: { children: ReactNode }) => {
  const { token } = useToken();
  useEffect(() => {
    if (token) {
      socket.on("notify", (data) => {
        toast.success(data?.message, {
          position: "top-right",
        });
      });
    }

    return () => {
      socket.off("notify");
    };
  }, [token]);
  return (
    <SocketContext.Provider value={socket}>
      <ToastContainer />
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
