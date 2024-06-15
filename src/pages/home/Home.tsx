import { useState } from "react";

import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import useSocket from "../../hooks/useSocket";

const Home = () => {
  const socket = useSocket();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const sendMessage = () => {
    socket?.emit("send_message", { message });
  };

  return (
    <>
      <div>Socket IO</div>
      <div>
        <input
          placeholder="Type..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send a message</button>
      </div>
      <button onClick={() => navigate("/chat")}>To Chat page</button>
    </>
  );
};

export default Home;
