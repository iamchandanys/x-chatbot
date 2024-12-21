"use client";

import { useEffect, useRef, useState } from "react";
import { FaUser, FaUserNurse } from "react-icons/fa";
import { IoSendSharp } from "react-icons/io5";
import { ThreeDots } from "react-loader-spinner";
import Suggestions from "./Suggestions";
import { chatCompletion, initChat } from "../store/actions";
import { getClientAndProductId, playAudio } from "../utils/helper";
import ReactMarkdown from "react-markdown";

interface Message {
  sender: "system" | "user";
  text: string;
}

const Chatbot: React.FC = () => {
  // Get the client and product IDs from the URL parameters
  const { clientId, productId } = getClientAndProductId();
  // State to keep track of messages in the chat
  const [messages, setMessages] = useState<Message[]>([]);
  // State to store the chat ID
  const [chatId, setChatId] = useState<string>("");
  // State to store the user's current input message
  const [userMessage, setUserMessage] = useState<string>("");
  // State to manage loading indicator
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // Ref for scrolling to the bottom
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Make API call to initialize chatbot
  useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        const response = await initChat(clientId, productId);
        // Play sound when inital message is received
        // playAudio(false);
        // Set initial message from the chatbot
        setMessages([
          { sender: "system", text: "Hello! How can I assist you today?" },
        ]);
        // Set the chat ID
        setChatId(response.id);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [clientId, productId]);

  // Function to handle sending a message
  const handleSendMessage = (newMessage: string) => {
    // Prevent sending empty messages
    if (newMessage.trim() === "") return;

    // Update messages with the user's message
    const newMessages: Message[] = [
      ...messages,
      { sender: "user", text: newMessage },
    ];
    // Play sound when user sends a message
    playAudio(true);
    setMessages(newMessages);
    setUserMessage("");

    // Make API call to send the message to chatCompletion
    setIsLoading(true);
    (async () => {
      await chatCompletion({
        chatId: chatId,
        message: newMessage,
        clientId,
        productId,
      })
        .then((response) => {
          setIsLoading(false);
          console.log(response);
          // Play sound when response is received
          playAudio(false);
          setMessages((prevMessages: Message[]) => [
            ...prevMessages,
            { sender: "system", text: response?.messageContent },
          ]);
        })
        .catch(() => {
          setIsLoading(false);
          alert("Error in sending message to chatCompletion");
        });
    })();
  };

  // Handle sending message on Enter key press
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      if (isLoading) return;
      e.preventDefault();
      handleSendMessage(userMessage);
    }
  };

  const onClickSuggestion = (suggestion: string) => {
    setUserMessage(suggestion);
    handleSendMessage(suggestion);
  };

  // Scroll to the bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="bg-white flex flex-col h-screen">
      {/* Chat messages container */}
      <div className="flex-grow overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-3 flex items-start ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {message.sender === "system" && (
              <div className="flex items-center">
                <FaUserNurse className="mr-2 text-lg text-purple-700" />
                <div className="bg-purple-100 text-black p-3 rounded-lg max-w-xs text-sm">
                  <ReactMarkdown>{message.text}</ReactMarkdown>
                </div>
              </div>
            )}
            {message.sender === "user" && (
              <div className="flex items-center">
                <div className="bg-gray-100 text-black p-3 rounded-lg max-w-xs text-sm mr-2">
                  {message.text}
                </div>
                <FaUser className="text-lg text-gray-700" />
              </div>
            )}
          </div>
        ))}
        {/* Loading indicator */}
        {isLoading && (
          <div className="flex items-start mb-3">
            <FaUserNurse className="mr-2 text-lg text-purple-700" />
            <div className="flex items-center">
              <ThreeDots
                height="10"
                width="30"
                color="#6b46c1"
                ariaLabel="three-dots-loading"
              />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input area for the user to type messages */}
      <div>
        {/* Do not show suggestions if the user has already sent a message */}
        {!messages.find((message) => message.sender === "user") && (
          <div className="mb-2">
            <Suggestions onClickSuggestion={onClickSuggestion} />
          </div>
        )}

        {/* Input area for the user to type messages */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center bg-gray-100 p-3 rounded">
            <textarea
              className="flex-1 bg-transparent outline-none text-black px-4 text-base resize-none"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your question..."
              rows={3}
            />
            {/* ToDo - isdisabled is not working */}
            <button
              onClick={() => handleSendMessage(userMessage)}
              className="text-white bg-purple-500 hover:bg-purple-800 p-2 rounded-full focus:outline-none ml-3 text-lg"
              disabled={isLoading}
            >
              <IoSendSharp className="pl-1" />
            </button>
          </div>
        </div>

        {/* Footer with "Powered By" text */}
        <div className="text-center text-xs text-gray-400 p-2 border-t border-gray-200">
          Developed by{" "}
          <span>
            <a
              href="https://www.chandanys.in/"
              target="_blank"
              className="underline decoration-gray-400"
            >
              Chandan
            </a>
          </span>{" "}
          • Powered by ChatGPT & Azure AI Search
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
