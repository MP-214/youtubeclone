import React, { useEffect ,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { makeRandomMessage, generateRandomName } from "../utils/randomChar";
import ChatText from "./ChatText";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage,setLiveMessage]=useState("")
  const ChatMessage = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20) + " 🚀",
        })
      );
    }, 2000);

    return () => {
      clearInterval(i);
    };
  }, []);
  return (
    <>
      <div className="h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {ChatMessage.map((c, i) => (
            <ChatText key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
      className="p-2 ml-2 border border-black"
      onSubmit={(e) => {
        e.preventDefault();

        dispatch(
          addMessage({
            name: "Mithilesh Prajapati",
            message: liveMessage,
          })
        );
        setLiveMessage("");
      }}
    >
      <input
        className="px-2 mb-1 w-96"
        type="text"
        value={liveMessage}
        onChange={(e) => {
          setLiveMessage(e.target.value);
        }}
      />
      <button className="px-2 mx-2 bg-green-100">Send</button>
    </form>
    </>
  );
};

export default LiveChat;
