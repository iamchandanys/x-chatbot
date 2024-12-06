import React, { useEffect } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { getAllArticles } from "../store/actions";
import { getClientAndProductId } from "../utils/helper";

const ChatbotOverview = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [artDocs, setArtDocs] = React.useState([{ name: "", content: "" }]);
  // Get the client and product IDs from the URL parameters
  const { clientId, productId } = getClientAndProductId();

  useEffect(() => {
    (async () => {
      await getAllArticles(clientId, productId)
        .then((response) => {
          setArtDocs(response);
        })
        .catch(() => {
          alert("Error in fetching articles");
        });
    })();
  }, [clientId, productId]);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-8">
        Chat with Your Own Data
      </h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
        <p>
          The chatbot can directly interact with your own documents and answer
          questions based on their content. It is designed to make accessing
          specific information easier, helping you quickly find insights,
          summarize data, and support decision-making.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          You Can Ask These Details
        </h2>
        <div className="bg-white rounded-lg shadow-md">
          <div
            className="flex justify-between items-center px-4 py-2 cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <span className="text-gray-700 font-medium">
              Uploaded documents &nbsp;
              <span className="text-gray-500 text-sm">
                (More details can be uploaded from API)
              </span>
            </span>
            <span className="">
              {isExpanded ? <FaArrowUp /> : <FaArrowDown />}
            </span>
          </div>
          {isExpanded && (
            <div className="p-4">
              <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                {artDocs.map((detail, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white shadow-md rounded-lg"
                  >
                    <h3 className="text-lg font-semibold mb-2">
                      {detail.name}
                    </h3>
                    <p>{detail.content}</p>
                  </div>
                ))}
              </div>
              <div className="text-gray-500 text-sm mt-4">
                * More details can be uploaded from API
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          How It Works (RAG - Retrieval Augmented generation)
        </h2>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://emcdevstoragev2.blob.core.windows.net/public/RAG Model.png"
          alt="RAG Model"
          className="w-full h-auto mb-8"
        />
        <ol className="list-decimal list-inside space-y-4">
          <li>
            <strong>Document Chunking Process:</strong> The document library,
            which holds various documents, undergoes a chunking process. This
            means that each document is divided into smaller sections to
            facilitate more precise analysis and retrieval.
          </li>
          <li>
            <strong>Embedding Creation with Azure OpenAI Service:</strong> Each
            chunk (or section) of a document is processed by the Azure OpenAI
            Service using a model called &quot;text-embedding-3-large&quot;.
            This step creates numerical representations called embeddings, which
            capture the semantic meaning of each section. The chunked data along
            with their embeddings are then stored in Azure Cosmos DB.
          </li>
          <li>
            <strong>Indexing in Azure AI Search Vector Index:</strong> The
            embeddings for all the document sections are indexed in the Azure AI
            Search Vector Index. This vector index helps in efficiently finding
            the most relevant document chunks when a user query is received.
          </li>
          <li>
            <strong>User Interaction and Question Handling:</strong> When a user
            submits a question, it goes through the Azure OpenAI Service to
            create an embedded representation of the question. The embedding is
            used to match and retrieve the relevant document sections from the
            vector index.
          </li>
          <li>
            <strong>Answer Generation:</strong> The retrieved relevant document
            sections are combined into a prompt, which is then processed by
            another model (such as GPT-4.0) to generate a comprehensive response
            to the user&apos;s question. This response can include not only
            direct answers but also other NLP tasks, such as summarization or
            further explanations.
          </li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Azure OpenAI Service:</strong> Used to generate embeddings
            and process natural language inputs.
          </li>
          <li>
            <strong>Azure Cosmos DB:</strong> Stores chunked data and their
            embeddings for efficient retrieval.
          </li>
          <li>
            <strong>Azure AI Search Vector Index:</strong> Indexes embeddings
            for fast and relevant document search.
          </li>
          <li>
            <strong>GPT-4.0:</strong> Generates responses based on user
            questions and relevant document content.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Interactive Document Search:</strong> Users can ask
            questions about the documents, and the chatbot will provide answers
            derived directly from the document content.
          </li>
          <li>
            <strong>Cost-Effective:</strong> By leveraging Azure AI Verctor
            Search, the solution minimizes resource-intensive operations by
            targeting specific and relevant content rather than analyzing entire
            documents. This targeted approach significantly reduces
            computational costs, ensuring a budget-friendly implementation
            without compromising performance.
          </li>
          <li>
            <strong>Efficient Data Retrieval:</strong> The embedding-based
            approach ensures that only the most relevant portions of documents
            are analyzed for each question, providing quick and accurate
            responses.
          </li>
          <li>
            <strong>Advanced AI Technology:</strong> The system leverages Azure
            OpenAI Service and Azure AI Search to deliver high-quality,
            context-aware responses, making it suitable for a variety of
            applications like customer service, research assistance, and
            internal documentation analysis.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Time-Saving:</strong> Provides instant answers without the
            need to manually search through documents.
          </li>
          <li>
            <strong>User-Friendly:</strong> Offers a conversational interface
            that reduces the complexity of interacting with large volumes of
            data.
          </li>
          <li>
            <strong>Flexible Usage:</strong> The system can handle a variety of
            document formats and is adaptable for different industries.
          </li>
        </ul>
      </section>

      <p className="text-lg">
        This chatbot project combines document analysis with conversational AI
        to create an innovative solution for interacting with stored information
        efficiently and intuitively.
      </p>

      <div className="text-center text-xs text-gray-400 p-2 border-t border-gray-200 mt-10">
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
  );
};

export default ChatbotOverview;
