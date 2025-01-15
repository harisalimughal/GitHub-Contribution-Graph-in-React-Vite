import React, { useState } from 'react'

const Dashboard = () => {

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-2xl border border-gray-200/50 transition-all duration-300 hover:shadow-indigo-200/20">
      <div className="  items-center justify-between mb-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center  gap-4">
            <h1 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              AI Chat helper
            </h1>
          </div>
          <div>
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
          </div>
        </div>

        {/* Blank block for chat prompts */}
        <div className="mt-6 bg-white rounded-lg p-4 border border-gray-300 shadow-sm h-64 overflow-y-auto">
          {/* Placeholder for chat prompts */}
          <p className="text-gray-500 text-center">
            Your prompts will appear here...
          </p>
        </div>

        <div className="mt-6 p-4 bg-white/70 backdrop-blur-sm rounded-lg flex justify-between items-center border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300">
          <span className="text-gray-600">
            I have created a project in your Codepen account
          </span>
          <button className="text-indigo-600 flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-indigo-50 transition-all duration-300">
            View
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 animate-bounce"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        
        <div className="flex justify-center mt-8">
          <button className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-white border border-gray-200 hover:border-indigo-400 hover:bg-indigo-50 text-gray-600 hover:text-indigo-600 transition-all duration-300 shadow-sm hover:shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 group-hover:rotate-180 transition-transform duration-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                clipRule="evenodd"
              />
            </svg>
            Regenerate response
          </button>
        </div>
        {/* Chat Input Section */}
        <div className="flex items-center gap-2 p-4 bg-white rounded-lg shadow-sm">
          <div className="flex-grow relative">
            <input
              type="text"
              placeholder="Start typing..."
              className="w-full px-4 py-2.5 text-gray-700 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400/50 transition-all duration-300"
            />

            {/* Microphone Button */}
            <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 hover:bg-gray-200 rounded-full transition-all duration-200 group">
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
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                />
              </svg>
            </button>
          </div>

          {/* Page Icon */}
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

          {/* Send Button */}
          <button className="bg-indigo-600 text-white p-2.5 rounded-lg hover:bg-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg group">
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

        {/* Free Research Preview Text */}
        <div className="text-center mt-4 text-sm text-gray-500">
          Free Research Preview. May produce inaccurate information
          about people, places, or facts. May 12 Version
        </div>
      </div>
    </div>
  );
}

export default Dashboard
