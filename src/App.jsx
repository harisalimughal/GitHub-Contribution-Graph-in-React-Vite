import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import SideBar from "./components/SideBar";
import Dashboard from "./components/Dashboard";
import CallsHeatmap from "./components/CallsHeatmap";
import  Home  from "./components/Home";


const App = () => {
  // Hook to get the current route location
  const location = useLocation();

  // Determine whether to show the sidebar
  const showSidebar = location.pathname !== "/";

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Conditionally render the sidebar */}
      {showSidebar && <SideBar />}
      <main className={`flex-1 ${showSidebar ? "ml-[240px]" : ""} flex items-center justify-center`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/calls" element={<CallsHeatmap />} />
          {/* Add more routes here as needed */}
        </Routes>
      </main>
    </div>
  );
};

const Root = () => (
  <Router>
    <App />
  </Router>
);

export default Root;
