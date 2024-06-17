import { ChangeEvent, useState } from "react";

import "react-toastify/dist/ReactToastify.css";

import useSocket from "../../hooks/useSocket";

import { Button, Input } from "@nextui-org/react";
import SendIcon from "../../assets/icons/SendIcon";
import { useProfile } from "../../components/header/store";

const Home = () => {
  const { username } = useProfile();
  const { socket, messages, setMessages } = useSocket();

  const [message, setMessage] = useState("");

  const sendMessage = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    socket?.emit("send_message", { message });
    setMessages((prev) => [...prev, message]);
  };

  return (
    <>
      <h1 className="text-center">Welcome to ChitChat {username}</h1>
      <div className="flex justify-center m-1 flex-col items-center">
        <div className="bg-[#202020] flex flex-col border border-red-500 h-[500px] overflow-auto w-[100%] max-w-[600px] items-end justify-start gap-2">
          {messages?.length === 0 && (
            <div className="bg-[red] p-3 text-white m-1 rounded-md">
              No messages yet!
            </div>
          )}
          {messages?.map((mess) => {
            return (
              <>
                <div className="bg-[red] p-3 m-1 rounded-md text-white">
                  {mess}
                </div>
              </>
            );
          })}
        </div>
        <form onSubmit={sendMessage} className="w-full max-w-[600px]">
          <div className="flex gap-1 justify-between mt-2">
            <Input
              placeholder="Send a message"
              classNames={{
                inputWrapper: ["bg-[#292929]"],
              }}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button
              className="bg-[red] rounde rounded-full p-2"
              isIconOnly
              type="submit"
            >
              <SendIcon />
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Home;
