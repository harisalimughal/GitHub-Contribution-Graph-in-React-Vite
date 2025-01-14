import React from "react";
import CallsHeatmap from "./components/CallsHeatmap";
import SideBar from "./components/SideBar"


const App = () => {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <SideBar />
      <main className="flex-1 flex justify-end">
        <div className="max-w-6xl w-full px-8 py-6 mr-16 mt-16">
          <CallsHeatmap />
        </div>
      </main>
    </div>
  );
};

export default App;