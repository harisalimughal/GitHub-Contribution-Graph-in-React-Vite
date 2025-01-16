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
  Wrench,
  MessageSquare,
 ChevronLeft,
ChevronRight
} from "lucide-react";
import { useNavigate} from 'react-router-dom';

const SideBar = () => {
    const [isExpanded, setIsExpanded] = useState(true);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const navigate = useNavigate();

    const menuItems = [
      { icon: Home, label: "Dashboard", color: "#4F46E5", path: "/dashboard" }, // Path to Dashboard
      { icon: Phone, label: "Calls", color: "#059669", path: "/calls" }, // Path to Calls
      {
        icon: Calendar,
        label: "Appointments",
        color: "#DC2626",
        path: "/appointments",
      }, // Path to Appointments
      {
        icon: Users,
        label: "Assistants",
        color: "#2563EB",
        path: "/assistants",
      }, // Path to Assistants
      {
        icon: MessageSquare,
        label: "Messages",
        color: "#7C3AED",
        path: "/messages",
      }, // Path to Messages
    ];

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
      {/* Header with integrated toggle button */}
      <div className="p-4 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex justify-center items-center shadow-lg">
            <span className="text-xl font-bold">H</span>
          </div>
          {isExpanded && (
            <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            </span>
          )}
        </div>
        <button
          onClick={toggleSidebar}
          className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-300 group"
        >
          {isExpanded ? (
            <ChevronLeft
              size={20}
              className="text-gray-600 group-hover:text-blue-600 transform transition-transform duration-300 group-hover:scale-110"
            />
          ) : (
            <ChevronRight
              size={20}
              className="text-gray-600 group-hover:text-blue-600 transform transition-transform duration-300 group-hover:scale-110"
            />
          )}
        </button>
      </div>
      {/* User Info */}
      {isExpanded && (
        <div className="px-4 py-3 mx-3 bg-gray-50 rounded-lg">
          <p className="text-sm font-medium text-gray-700">Haris Ali Mughal</p>
          <p className="text-sm text-gray-500">harisali@gmail.com</p>
        </div>
      )}
      {/** Menu Items */}
      <nav className="flex-1 p-4">
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li key={item.label} className="group">
              <div 
              onClick={() => navigate(item.path)}  
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-all duration-150">
                <item.icon
                  size={20}
                  className="min-w-5"
                  color={item.color}
                  strokeWidth={1.5}
                />
                {isExpanded && (
                  <span className="text-gray-700 group-hover:text-gray-900">
                    {item.label}
                  </span>
                )}
                {!isExpanded && (
                  <div className="absolute left-16 bg-gray-800 text-white px-2 py-1 rounded ml-2 text-sm invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all">
                    {item.label}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </nav>
      {/* Settings Section */}
      <div className="p-4 border-t border-gray-100">
        <div
          className={`text-gray-700 font-medium flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-all ${
            !isExpanded ? "justify-center group" : "justify-between"
          }`}
          onClick={() => isExpanded && setIsSettingsOpen(!isSettingsOpen)}
        >
          <div className="flex items-center gap-3">
            <Settings
              size={20}
              className="min-w-5"
              color="#F59E0B"
              strokeWidth={1.5}
            />
            {isExpanded && <span>Settings</span>}
          </div>
          {isExpanded && (
            <ChevronDown
              className={`w-4 h-4 transform transition-transform ${
                isSettingsOpen ? "rotate-180" : ""
              }`}
            />
          )}
          {!isExpanded && (
            <div className="absolute left-16 bg-gray-800 text-white px-2 py-1 rounded ml-2 text-sm invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all">
              Settings
            </div>
          )}
        </div>
        {isExpanded && isSettingsOpen && (
          <ul className="mt-2 ml-4 space-y-2 text-gray-600 text-sm">
            <li className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-all">
              <Wrench size={16} color="#6366F1" strokeWidth={1.5} />
              <span>User Settings</span>
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-all">
              <Wrench size={16} color="#8B5CF6" strokeWidth={1.5} />
              <span>others</span>
            </li>
          </ul>
        )}
      </div>

      {/* Logout */}
      <div className="p-4">
        <button
          className={`w-full text-gray-700 hover:bg-gray-50 hover:text-red-600 p-2 rounded-lg transition-all flex items-center gap-3 ${
            !isExpanded ? "justify-center group" : ""
          }`}
        >
          <LogOut
            size={20}
            className="min-w-5"
            color="#EF4444"
            strokeWidth={1.5}
          />
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
