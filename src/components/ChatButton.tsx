import { useState } from "react";
import { ChatBox } from "./ChatBox";

export default function ChatButton() {
  const [isVisible, setVisible] = useState<boolean>(false);
  const toggleChatBox = () => {
    setVisible(isVisible ? false : true);
    return;
  };
  return (
    <div>
      <button
        onClick={toggleChatBox}
        className="fixed z-40 p-2 bottom-10 left-5 bg-darkPrimaryBg hover:bg-darkSecondaryBg text-darkPrimaryText dark:bg-primaryBg dark:text-primaryText rounded-lg shadow-md transition duration-300 hover:dark:bg-secondaryBg w-[clamp(55px, 1.2rem, 90px)] text-[clamp(5px,1.2rem,14px)]"
      >
        ChatBot
      </button>
      <ChatBox visible={isVisible} toggleVisibility={toggleChatBox}></ChatBox>
    </div>
  );
}
