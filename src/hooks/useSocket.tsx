import { useContext } from "react";
import { SocketContext } from "./SocketProvider";

const useSocket = () => {
  return useContext(SocketContext);
};

export default useSocket;
