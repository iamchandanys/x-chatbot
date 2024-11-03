import React from "react";

const suggestionsArray = [
  "Room rent details",
  "Explain maternity benefits available",
  "More details on available insurance products",
  "I want to know more on Day Care Procedures",
];

interface SuggestionsProps {
  onClickSuggestion: (suggestion: string) => void;
}

const Suggestions: React.FC<SuggestionsProps> = ({ onClickSuggestion }) => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="p-4 max-w-md bg-white">
        <h1 className="text-lg font-bold mb-3 flex items-center">
          <span className="mr-2">👋</span>
          Hi there
        </h1>
        <p className="text-gray-600 mb-3 text-xs">
          Ask me anything about star health insurance..
        </p>
        <div className="flex flex-wrap gap-2">
          {suggestionsArray.map((suggestion, index) => (
            <button
              key={index}
              className="py-1 px-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg shadow whitespace-nowrap text-xs"
              onClick={() => onClickSuggestion(suggestion)}
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
