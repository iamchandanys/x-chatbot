"use client";

import Chatbot from "./components/Chatbot";
import ChatbotOverview from "./components/ChatbotOverview";

export default function Home() {
  return (
    <div>
      <ChatbotOverview />
      <Chatbot />
    </div>
  );
}
