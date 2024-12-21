"use client";

import Chatbot from "./components/Chatbot";
import ChatbotOverview from "./components/ChatbotOverview";
import { useEffect, useState } from "react";
import { getClientDetails } from "./store/actions";
import { getClientAndProductId } from "./utils/helper";
import { ClientDetails } from "./models/client-details.model";

export default function Home() {
  // Get the client and product IDs from the URL parameters
  const { clientId, productId } = getClientAndProductId();
  const [clientDetails, setClientDetails] = useState<ClientDetails | null>(
    null
  );

  useEffect(() => {
    (async () => {
      const response = await getClientDetails(clientId, productId);
      setClientDetails(response);
    })();
  }, [clientId, productId]);

  return (
    <div>
      <ChatbotOverview />
      <Chatbot clientDetails={clientDetails} />
    </div>
  );
}
