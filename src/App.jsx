import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import Dashboard from "./components/Dashboard";
import CallsHeatmap from "./components/CallsHeatmap";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex bg-gray-50">
        <SideBar />
        <main className="flex-1 flex items-center justify-center">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/calls" element={<CallsHeatmap />} />
            {/* Add more routes here as needed */}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
