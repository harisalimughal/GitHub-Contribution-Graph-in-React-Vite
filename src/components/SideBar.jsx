import React, {useState} from 'react'
import {  Menu,
  X,
  Home,
  Phone,
  Calendar,
  Users,
  Settings,
  LogOut,
  ChevronDown,
  Database,
  MessageSquare} from "lucide-react";

const SideBar = () => {
    const [isExpanded, setIsExpanded] = useState(true);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    const toggleSidebar = () =>{
        setIsExpanded(!isExpanded);
        if(!isExpanded){
            setIsSettingsOpen(false);
        }
    };

  return (
    <div
      className={`fixed top-0 left-0 h-screen bg-white shadow-lg flex flex-col transition-all duration-300 ease-in-out ${
        isExpanded ? "w-64" : "w-16"
      }`}
    >
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="absolute -right-3 top-4 bg-green p-1.5 rounded-full shadow-lg border-gray-200 hover:bg-gray-50 hover:text-green-600 transition-colors"
      >
        {isExpanded ? <X size={16} /> : <Menu size={16} />}
      </button>

      {/** Header */}
      <div className="p-4 flex items-center gap-3">
        <div className="h-10 w-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex justify-center items-center shadow-lg">
          <span className="text-xl font-bold"> H</span>
        </div>
        {isExpanded && (
          <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Calls HeatMap
          </span>
        )}
      </div>

     
    </div>
  );
}

export default SideBar
