"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, X } from "lucide-react";

export default function SafyChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "assistant", content: "👋 Hi! I'm SafyBot, your AI assistant. How can I help you today?" },
  ]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });
      const data = await res.json();

      if (data.text) {
        setMessages((prev) => [...prev, { role: "assistant", content: data.text }]);
      } else {
        setMessages((prev) => [...prev, { role: "assistant", content: "Now I'm not able to answer this question." }]);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-20 right-4 sm:bottom-28 sm:right-6 bg-gradient-to-r from-[#7755FF] to-[#1DBF73] text-white p-3 rounded-full shadow-2xl hover:shadow-lg z-50"
        aria-label="Open Safyzone Chatbot"
      >
        {open ? <X size={22} /> : <Bot size={22} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-36 right-4 sm:bottom-40 sm:right-6 w-80 sm:w-96 h-[26rem] bg-[#16141D] text-white shadow-2xl border border-gray-700 rounded-2xl flex flex-col overflow-hidden z-50"
          >
            {/* Header */}
            <div className="bg-[#1DBF73] text-white px-4 py-3 font-semibold text-center">
              SafyBot 🤖 — AI Assistant
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 space-y-3 text-sm scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-2 rounded-lg max-w-[80%] ${
                    m.role === "user"
                      ? "bg-[#1DBF73]/20 self-end ml-auto"
                      : "bg-[#23212B] self-start"
                  }`}
                >
                  {m.content}
                </motion.div>
              ))}
              {loading && (
                <div className="text-gray-400 italic">Thinking...</div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={sendMessage} className="p-3 border-t border-gray-700 flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 px-3 py-2 bg-[#23212B] text-white text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1DBF73]"
              />
              <button
                type="submit"
                disabled={loading}
                className="ml-2 bg-[#1DBF73] hover:bg-[#39C683] text-white p-2 rounded-lg transition"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
