"use client";

import { useState } from "react";
import Chatbot from "./components/Chatbot";
import ChatbotOverview from "./components/ChatbotOverview";
import { FaTimes, FaUserNurse } from "react-icons/fa";

export default function Home() {
  // State to manage whether the chatbot is open or closed
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <ChatbotOverview />

      <div className="fixed bottom-4 right-4">
        {!isOpen && (
          <button
            onClick={toggleChat}
            className="bg-purple-700 text-white rounded-md p-4 shadow-lg transition-transform transform hover:scale-105"
          >
            <FaUserNurse />
          </button>
        )}
        {isOpen && (
          <div className="w-94 h-[36rem] bg-white rounded-lg shadow-2xl flex flex-col mt-2">
            {/* Header with close button and options */}
            <div className="flex justify-between items-center bg-white text-black p-4 border-b border-gray-200 rounded-t-lg">
              <div className="flex items-center">
                <FaUserNurse className="text-2xl mr-2" />
                <span className="font-semibold text-lg">
                  MS Serene Heights Assistant
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={toggleChat}
                  className="hover:text-gray-500 focus:outline-none"
                >
                  <FaTimes />
                </button>
              </div>
            </div>
            <Chatbot />
          </div>
        )}
      </div>
    </div>
  );
}
