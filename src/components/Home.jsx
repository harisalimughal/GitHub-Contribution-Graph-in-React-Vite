import React from "react";
import Mobile from "../assets/ChatBotMobileView.png"
import Tablet from "../assets/ChatBotTabletView.png"


const Home = () => {
  return (
    <div className="min-h-screen bg-black/90 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black/50 to-blue-900/20 pointer-events-none" />

      {/* Content container */}
      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content - Left side */}
          <div className="relative z-10 space-y-8">
            <h2 className="text-5xl md:text-7xl font-bold">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                AI Powered
              </span>
              <span className="block mt-2 text-white">Chat Assistant</span>
            </h2>

            <p className="text-lg md:text-xl text-white/70 max-w-2xl">
              Experience the next generation of conversation with our
             chatbot. Seamlessly interact, get instant responses, and unlock
              new possibilities.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:opacity-90 transform hover:-translate-y-0.5 transition-all duration-200">
                Get Started
              </button>
              <button className="px-8 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-200">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <h4 className="text-3xl font-bold text-white">99%</h4>
                <p className="text-white/60">Accuracy</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-white">24/7</h4>
                <p className="text-white/60">Support</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-white">100k+</h4>
                <p className="text-white/60">Users</p>
              </div>
            </div>
          </div>

          {/* Device Mockups - Right side */}
          <div className="relative">
            {/* Tablet Mockup */}
            <div className="relative z-5 bg-gradient-to-t from-white/10 to-white/5 rounded-[2.5rem] p-8 backdrop-blur-lg border border-white/20 shadow-xl">
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                <img
                  src={Tablet}
                  alt="Tablet Interface"
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Tablet Camera */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white/30" />
            </div>

            {/* Phone Mockup - Overlapped */}
            <div className="absolute -left-20 top-1 w-72 bg-gradient-to-t z-5 from-white/10 to-white/5 rounded-[2rem] p-4 backdrop-blur-lg border border-white/20 shadow-xl transform -rotate-12 hover:rotate-0 transition-transform duration-500">
              <div className="aspect-[9/16] relative rounded-xl overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                <img
                  src={Mobile}  
                  alt="Mobile Interface"
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Phone Camera & Speaker */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full bg-white/30" />
            </div>

            {/* Decorative Elements */}
            {/* <div className="absolute -z-10 top-1/2 right-0 w-72 h-72 bg-blue-500/30 rounded-full blur-[100px]" />
            <div className="absolute -z-10 bottom-0 left-1/2 w-72 h-72 bg-purple-500/30 rounded-full blur-[100px]" /> */}
          </div>
        </div>
      </div>

      {/* Floating Shapes */}
      {/* <div className="absolute top-20 left-10 w-20 h-20 border border-white/10 rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 border border-white/10 rounded-full animate-pulse delay-300" />
      <div className="absolute top-40 right-20 w-16 h-16 border border-white/10 rounded-full animate-pulse delay-700" /> */}
    </div>
  );
};

export default Home;
