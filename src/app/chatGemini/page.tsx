"use client";

import { useState } from "react";

export default function GeminiChat() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendPrompt() {
    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: input }),
    });

    const data = await res.json();
    setResult(data.text || data.response);

    setLoading(false);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-20 bg-gray-100 px-4">
      
      <div className="w-full max-w-xl bg-white shadow-md rounded-2xl p-6 space-y-4">
        
        <h1 className="text-2xl font-semibold text-center">
          Gemini Chat
        </h1>

        <div className="flex gap-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ask something..."
          />

          <button
            onClick={sendPrompt}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition disabled:bg-gray-400"
            disabled={loading}
          >
            {loading ? "Thinking..." : "Ask Gemini"}
          </button>
        </div>

        {loading && (
          <p className="text-blue-600 font-medium animate-pulse">
            Loading...
          </p>
        )}

        {result && (
          <pre className="bg-gray-400 font-bold p-4 rounded-lg text-sm overflow-auto max-h-80 whitespace-pre-wrap">
            {result}
          </pre>
        )}
      </div>
    </div>
  );
}
