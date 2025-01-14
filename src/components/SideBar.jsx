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
            Haris
          </span>
        )}
      </div>

      {/* User Info */}
      {isExpanded && (
        <div className="px-4 py-3 mx-3 bg-gray-50 rounded-lg">
          <p className="text-sm font-medium text-gray-700">Haris Ali Mughal</p>
          <p className="text-sm text-gray-500">harisali@gmail.com</p>
        </div>
      )}

      {/* Logout */}
      <div className="p-4">
        <button className={`w-full text-gray-700 hover:bg-gray-50 hover:text-red-600 p-2 rounded-lg transition-all flex items-center gap-3 ${!isExpanded ? "justify-center group" : ""}`}>
          <LogOut size={20} className="min-w-5" color="#EF4444" strokeWidth={1.5}/>
          {isExpanded && <span>Logout</span>}
          {!isExpanded && (
            <div className="absolute left-16 bg-gray-800 text-white px-2 py-1 rounded ml-2 text-sm invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all">
              Logout
            </div>
          )}
        </button>
      </div>
    </div>
  );
}

export default SideBar
