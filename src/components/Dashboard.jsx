import React, { useState } from 'react'

const Dashboard = () => {
    const [activeTab, setActiveTab]=useState("JS");
    const [isCopied, setIsCopied] = useState(false);
  return (
    <div className="max-w-3xl mx-auto p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-2xl border border-gray-200/50 transition-all duration-300 hover:shadow-indigo-200/20">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          AI Chat helper
        </h1>
        <div className="flex items-center gap-4">
          {/* Bell Icon */}
          <button className="group relative p-2 hover:bg-gray-100 rounded-lg transion-all duration-200">
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
          {/* Info Icon */}
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-200 group">
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
          {/* Window Icon */}
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-200 group">
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
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard
