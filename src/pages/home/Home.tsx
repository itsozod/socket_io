import { ChangeEvent, useMemo, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import useSocket from "../../hooks/useSocket";
import { Button, Input } from "@nextui-org/react";
import SendIcon from "../../assets/icons/SendIcon";
import { useProfile } from "../../components/header/store";
import { bgHandler } from "../../utils/helpers/bgHandler";
import { marginHandler } from "../../utils/helpers/marginHandler";

const Home = () => {
  const { username, id } = useProfile();
  const { socket, messages, setMessages } = useSocket();

  const [message, setMessage] = useState("");

  const sendMessage = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message?.trim() !== "") {
      const messageObj = {
        id: id,
        message,
        username,
      };
      socket?.emit("send_message", messageObj);
      setMessages((prev) => [...prev, messageObj]);
      setMessage("");
    }
  };

  const MessagesParser = useMemo(() => {
    return messages?.map((mess) => {
      return (
        <>
          <div
            key={mess.id}
            className={`${bgHandler(
              mess,
              Number(id)
            )} p-3 m-1 rounded-md text-white ${marginHandler(
              mess,
              Number(id)
            )}`}
          >
            {mess?.message}
            <p className="text-[#7B7B7B]">{mess?.username}!</p>
          </div>
        </>
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);

  return (
    <>
      <div className="flex justify-start p-2 gap-4 flex-col items-center bg-[#202020] h-svh">
        <h1
          style={{
            fontFamily: "Playwrite IE, cursive",
            fontOpticalSizing: "auto",
            fontWeight: "bolder",
            fontStyle: "normal",
          }}
          className="text-center text-white text-2xl"
        >
          Welcome {username}
        </h1>
        <div className="bg-[#202020] flex flex-col border border-red-500 h-[500px] overflow-auto w-[100%] max-w-[600px] gap-2">
          {messages?.length === 0 && (
            <div className="bg-[red] p-3 text-white m-1 rounded-md">
              No messages yet!
            </div>
          )}
          {MessagesParser}
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
