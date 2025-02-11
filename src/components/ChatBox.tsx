import { useState } from "react";

import axios from "axios";

interface ChatBoxProps {
  visible: boolean;
  toggleVisibility: () => void;
}

export const ChatBox = (props: ChatBoxProps) => {
  const [messages, setMessages] = useState<string[]>([]);
  const [userInput, setUserInput] = useState<string>("");

  const handleSendMessage = async (message: string) => {
    try {
      const response = await axios.post(
        "https://francisco-martinez-45.vercel.app/api/server.mjs",
        {
          query: message,
        }
      );

      if (response.status === 200) {
        setMessages((prevMessages) => [
          ...prevMessages,
          message,
          response.data.fulfillmentText,
        ]);
      } else {
        throw new Error("Error in response from server");
      }
    } catch (error) {
      console.error("Error communicating with server:", error);
    }

    setUserInput("");
  };

  return (
    <>
      {props.visible && (
        <div className="fixed text-black left-5 rounded-lg bg-white h-96 w-60 border border-black z-50 bottom-20 right-30">
          <div>
            <button
              className="relative border bg-red-700 rounded-lg"
              onClick={props.toggleVisibility}
            >
              Close Window
            </button>

            <div className="overflow-y-scroll">
              <div>
                {messages.map((message, index) => (
                  <p key={index}>{message}</p>
                ))}
              </div>
              <div className="fixed bottom-24">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Type your message..."
                />
                <button
                  className=" bottom-0 bg-darkPrimaryBg rounded-md w-14 text-darkPrimaryText"
                  onClick={() => {
                    handleSendMessage(userInput);
                  }}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
