import { useState } from "react";

function AIChatBox() {
  const [message, setMessage] =
    useState("");

  const [response, setResponse] =
    useState(
      "AI sustainability recommendations will appear here."
    );

  const askAI = () => {
    setResponse(
      "Reduce transportation emissions and try a plant-based meal this week."
    );
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="font-bold text-2xl">
        AI Sustainability Coach
      </h2>

      <textarea
        className="w-full border mt-4 p-3 rounded"
        rows={4}
        value={message}
        onChange={(e) =>
          setMessage(e.target.value)
        }
        placeholder="Ask AI about sustainability..."
      />

      <button
        onClick={askAI}
        className="mt-4 bg-green-600 text-white px-6 py-2 rounded"
      >
        Ask AI
      </button>

      <div className="mt-6 bg-gray-100 p-4 rounded">
        {response}
      </div>
    </div>
  );
}

export default AIChatBox;
