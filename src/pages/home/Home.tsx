import { useState } from "react";

import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import useSocket from "../../hooks/useSocket";

const Home = () => {
  const { socket, messages, setMessages } = useSocket();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const sendMessage = () => {
    socket?.emit("send_message", { message });
    setMessages((prev) => [...prev, message]);
  };

  return (
    <>
      <div>
        <input
          placeholder="Type..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send a message</button>
      </div>
      <button onClick={() => navigate("/chat")}>To Chat page</button>
      {messages?.map((mess) => {
        return <div>{mess}</div>;
      })}
    </>
  );
};

export default Home;
