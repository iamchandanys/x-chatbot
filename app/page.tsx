/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import ChatbotOverview from "./components/ChatbotOverview";
import { FaTimes } from "react-icons/fa";
import { getClientDetails } from "./store/actions";
import { getClientAndProductId } from "./utils/helper";
import { ClientDetails } from "./models/client-details.model";

export default function Home() {
  // State to track if the chat window is open
  const [isChatOpen, setIsChatOpen] = useState(false);
  // State to trigger highlight animation
  const [highlight, setHighlight] = useState(false);
  // Get the client and product IDs from the URL parameters
  const { clientId, productId } = getClientAndProductId();
  // Get client details
  const [clientDetails, setClientDetails] = useState<ClientDetails | null>(
    null
  );

  useEffect(() => {
    (async () => {
      try {
        const response = await getClientDetails(clientId, productId);
        setClientDetails(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [clientId, productId]);

  useEffect(() => {
    // Set up an interval to toggle the highlight state every 10 seconds
    const interval = setInterval(() => {
      setHighlight((prev) => !prev);
    }, 3000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <ChatbotOverview />

      <div>
        {/* Chatbot Icon - Only displayed when the chat window is closed */}
        {!isChatOpen && (
          <div className="fixed bottom-4 right-4">
            <button
              className={`w-16 h-16 rounded-full transition-transform duration-300 hover:scale-110 ${
                highlight ? "animate-bounce" : ""
              }`}
              // Toggles the chat window visibility
              onClick={() => setIsChatOpen(!isChatOpen)}
            >
              <img
                src="https://emcdevstoragev2.blob.core.windows.net/public/my-portfolio/dfac3783-fda3-4523-ba19-ad25ff8e28ce.png"
                alt="Chatbot Icon"
                className="w-full h-full object-cover"
              />
            </button>
          </div>
        )}

        {/* Chat Window - Only displayed when the chat window is open */}
        {isChatOpen && (
          <div className="fixed inset-x-4 top-4 bottom-4 bg-white shadow-lg border border-gray-300 rounded-lg flex flex-col md:h-[600px] md:w-96 md:bottom-4 md:right-4 md:inset-auto">
            {/* Header - Contains the assistant title and a close button */}
            <div className="p-4 bg-blue-500 text-white text-lg font-bold flex justify-between items-center">
              <span>{clientDetails?.botName ?? "Assistant"}</span>
              <button
                className="text-white hover:text-gray-200"
                // Closes the chat window
                onClick={() => setIsChatOpen(false)}
              >
                <FaTimes />
              </button>
            </div>
            {/* iFrame Content - Embeds the chatbot */}
            <div className="flex-1">
              <iframe
                src="https://iamchandanys.github.io/x-chatbot/in-iframe/?clientId=48e9556f-a15a-49f6-93f9-851ef9a909d4&productId=5d6e453e-4ae4-41ad-846b-e250c7fa27fe"
                title="Chat Assistant"
                className="w-full h-full"
                allow="fullscreen"
                style={{ border: "none" }}
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
