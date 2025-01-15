import React, { useState } from "react";

const Dashboard = () => {
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hello! How can I assist you today?" },
    { type: "user", text: "What is the weather like today?" },
    {
      type: "bot",
      text: "The weather is sunny with a high of 75°F.",
    },
    { type: "user", text: "Thanks for your response" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { type: "user", text: input }]);
      setInput("");
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            text: "I'm working on getting that information for you!",
          },
        ]);
      }, 1000);
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

  const handleLike = (index) => {
    // Implement like functionality
    console.log("Liked message at index:", index);
  };

  const handleDislike = (index) => {
    // Implement dislike functionality
    console.log("Disliked message at index:", index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 p-4 rounded-lg shadow-md bg-gradient-to-tr from-gray-500 via-black to-blue-500 via-gray rounded-xl shadow-2xl  transition-all duration-300 hover:shadow-indigo-200/20">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-semibold  text-transparent bg-clip-text bg-gradient-to-r from-white to-pink-200">
              AI Chat Helper
            </h1>
          </div>
          <div className="flex gap-2">
            <button className="group relative p-2 hover:bg-gray-100 rounded-lg transition-all duration-200">
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600 group-hover:text-indigo-600 transition-colors duration-200"
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
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-200 group ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600 group-hover:text-indigo-600 transition-colors duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4  shadow-sm h-[400px] overflow-y-auto">
          {messages.map((message, index) => (
            <div key={index} className="mb-6 last:mb-0">
              <div
                className={`flex items-start gap-3 ${
                  message.type === "user" ? "justify-end" : ""
                }`}
              >
                {message.type === "bot" && (
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 text-white rounded-full flex items-center justify-center font-bold shadow-md">
                      B
                    </div>
                  </div>
                )}
                <div
                  className={`max-w-[80%] px-4 py-2.5 rounded-2xl ${
                    message.type === "user"
                      ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {message.text}
                </div>
              </div>

              {message.type === "bot" && (
                <div className="flex items-center gap-2 mt-2 ml-11">
                  <button
                    onClick={() => handleRegenerate(index)}
                    className="p-1.5 hover:bg-gray-100 rounded-lg transition-all duration-200 group"
                    title="Regenerate response"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 group-hover:rotate-180 transition-transform duration-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                        clipRule="evenodd"
                        className="text-gray-500 group-hover:text-indigo-300 transition-colors duration-500"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleLike(index)}
                    className="p-1.5 hover:bg-gray-100 rounded-lg transition-all duration-200 group"
                    title="Like"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-500 group-hover:text-green-600 transition-colors duration-200"
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
                    className="p-1.5 hover:bg-gray-100 rounded-lg transition-all duration-200 group"
                    title="Dislike"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-500 group-hover:text-red-600 transition-colors duration-200"
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
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 p-4 bg-white/40 backdrop-blur-lg rounded-xl shadow-sm ">
          <div className="flex-grow relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="w-full px-4 py-2.5 text-white transition-all duration-300 
                 rounded-full bg-gradient-to-r from-gray-700 via-black to-blue-700 shadow-lg 
                 focus:outline-none focus:ring-2 focus:ring-pink-purple-500"
            />
            <button
              class="absolute text-white right-3 top-1/2 -translate-y-1/2 p-1.5 
         hover:bg-gray-200 rounded-full transition-all duration-200 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-white group-hover:text-indigo-600 
           transition-colors duration-200 fill-current"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                />
              </svg>
            </button>
          </div>

          <button className="p-2.5 hover:bg-gray-100 rounded-lg transition-all duration-200 group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500 group-hover:text-indigo-600 transition-colors duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </button>

          <button
            onClick={handleSend}
            className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-2.5 rounded-lg hover:opacity-90 transition-all duration-200 shadow-md hover:shadow-lg group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transform group-hover:translate-x-0.5 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>

        <div className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-white to-pink-200">
          Free Research Preview. May produce inaccurate information about
          people, places, or facts. May 12 Version
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
