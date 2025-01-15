import React, { useState, useRef, useEffect } from "react";

const SparkleLoader = () => (
  <div className="flex items-center gap-1.5 py-2">
    <div
      className="w-2 h-2 rounded-full bg-blue-400 animate-bounce"
      style={{ animationDelay: "0s" }}
    ></div>
    <div
      className="w-2 h-2 rounded-full bg-purple-400 animate-bounce"
      style={{ animationDelay: "0.2s" }}
    ></div>
    <div
      className="w-2 h-2 rounded-full bg-pink-400 animate-bounce"
      style={{ animationDelay: "0.4s" }}
    ></div>
  </div>
);

const Dashboard = () => {
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hello! How can I assist you today?" },
    { type: "user", text: "What is the weather like today?" },
    { type: "bot", text: "The weather is sunny with a high of 75°F." },
    { type: "user", text: "Thanks for your response" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const textareaRef = useRef(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`;
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [input]);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { type: "user", text: input }]);
      setInput("");
      setIsTyping(true);

      // Show sparkle loader
      setTimeout(() => {
        setMessages((prev) => [...prev, { type: "bot", isTyping: true }]);

        // Replace loader with response after 1.5 seconds
        setTimeout(() => {
          setMessages((prev) => {
            const newMessages = [...prev];
            newMessages[newMessages.length - 1] = {
              type: "bot",
              text: "I'm working on getting that information for you!",
            };
            return newMessages;
          });
          setIsTyping(false);
        }, 1500);
      }, 500);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleRegenerate = (index) => {
    setMessages((prev) => [
      ...prev,
      {
        type: "bot",
        text: "Here's a regenerated response for your question.",
      },
    ]);
  };

  const handleLike = (index) => console.log("Liked message at index:", index);
  const handleDislike = (index) =>
    console.log("Disliked message at index:", index);

  return (
    <div className="min-h-screen bg-black/80 bg-gradient-to-br from-purple-900/30 via-black/50 to-blue-900/30 backdrop-blur-xl p-4 sm:p-6 md:p-8">
      <div className="max-w-3xl mx-auto h-[90vh] flex flex-col space-y-4">
        <div className="bg-white/5 backdrop-blur-md rounded-xl shadow-xl border border-white/10 flex flex-col h-full">
          {/* Header -  inside main container */}
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <div className="flex items-center gap-4">
              <h1 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-pink-200">
                AI Chat Helper
              </h1>
            </div>
            <div className="flex gap-3">
              <button className="p-2 hover:bg-white/20 rounded-lg transition-all duration-300">
                <div className="relative">
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white/80"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4">
            {messages.map((message, index) => (
              <div key={index} className="mb-6 last:mb-0">
                <div
                  className={`flex items-start gap-3 ${
                    message.type === "user" ? "justify-end" : ""
                  }`}
                >
                  {message.type === "bot" && (
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-500 text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                        B
                      </div>
                    </div>
                  )}
                  {message.isTyping ? (
                    <SparkleLoader />
                  ) : (
                    <div
                      className={`max-w-[85%] sm:max-w-[80%] px-4 py-2.5 rounded-2xl backdrop-blur-md ${
                        message.type === "user"
                          ? "bg-gradient-to-r from-blue-500/80 to-indigo-500/80 text-white"
                          : "bg-white/10 text-white/90 border border-white/10"
                      }`}
                    >
                      <div className="whitespace-pre-wrap break-words">
                        {message.text}
                      </div>
                    </div>
                  )}
                </div>

                {message.type === "bot" && !message.isTyping && (
                  <div className="flex items-center gap-2 mt-2 ml-11">
                    <button
                      onClick={() => handleRegenerate(index)}
                      className="p-1.5 hover:bg-white/10 rounded-lg transition-all duration-300"
                      title="Regenerate response"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white/70 hover:text-white transition-all duration-300 hover:rotate-180"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleLike(index)}
                        className="p-1.5 hover:bg-white/10 rounded-lg transition-all duration-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-white/70 hover:text-green-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={() => handleDislike(index)}
                        className="p-1.5 hover:bg-white/10 rounded-lg transition-all duration-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-white/70 hover:text-red-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018c.163 0 .326.02.485.06L17 4m-7 10v2a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area - with border-top */}
          <div className="border-t border-white/10 p-4">
            <div className="relative">
              <textarea
                ref={textareaRef}
                rows={1}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="w-full px-4 py-2.5 text-white bg-white/10 rounded-2xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-pink-500/50 placeholder-white/50 resize-none overflow-hidden min-h-[40px] max-h-[200px]"
                style={{ lineHeight: "1.5" }}
              />
              {!input.trim() ? (
                <button className="absolute right-3 bottom-2.5 p-1.5 hover:bg-white/10 rounded-full transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white/70"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    />
                  </svg>
                </button>
              ) : (
                <button
                  onClick={handleSend}
                  className="absolute right-3 bottom-2.5 p-1.5 bg-blue-500 hover:bg-blue-600 rounded-lg transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 transform group-hover:-translate-y-0.5 transition-transform duration-200 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 13l-5-5m0 0l-5 5m5-5v12"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="text-sm text-center text-white/60">
          Free Research Preview. May produce inaccurate information about
          people, places, or facts. May 12 Version
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
