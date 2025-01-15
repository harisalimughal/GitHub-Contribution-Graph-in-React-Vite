import React, { useState } from 'react'

const Dashboard = () => {
    const [activeTab, setActiveTab]=useState("JS");
    const [isCopied, setIsCopied] = useState(false);



      const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      };
  return (
    <div className="max-w-3xl mx-auto p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-2xl border border-gray-200/50 transition-all duration-300 hover:shadow-indigo-200/20">
      <div className=" items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className='flex items-center gap-4'>
            <h1 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              AI Chat helper
            </h1>
          </div>

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

        <div className="mt-6 text-sm text-gray-600 bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-gray-200/50 shadow-sm">
          <p>
            Note: This is just an example of a simple HTML form. In a real-world
            scenario, you would also want to include proper validation and
            handling of the form data on the server side.
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
      </div>
    </div>
  );
}

export default Dashboard
