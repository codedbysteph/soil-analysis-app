import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { useNavigate } from "react-router-dom";

export const Home = (): JSX.Element => {
  const navigate = useNavigate();

  // Navigation menu items (without logout)
  const navItems = [
    { label: "Home", id: "home", icon: "🏠" },
    { label: "Pricing Plans", id: "pricing", icon: "💲" },
    { label: "Settings", id: "settings", icon: "⚙️" },
  ];

  // Main action buttons
  const actionButtons = [
    { label: "Take Photo", id: "take-photo", icon: "📸", color: "bg-gradient-to-br from-emerald-600 to-emerald-400" },
    { label: "Connect Device", id: "connect-device", icon: "🔌", color: "bg-gradient-to-br from-blue-600 to-blue-400" },
    { label: "Analyze", id: "analyze", icon: "🔍", color: "bg-gradient-to-br from-purple-600 to-purple-400" },
    { label: "Support", id: "support", icon: "🛟", color: "bg-gradient-to-br from-amber-600 to-amber-400" },
    { label: "Data & Reports", id: "data-reports", icon: "📊", color: "bg-gradient-to-br from-indigo-600 to-indigo-400" },
    { label: "NPK Sensor", id: "npk-sensor", icon: "🌱", color: "bg-gradient-to-br from-green-600 to-green-400" },
  ];

  const handleLogout = () => {
    // Add your logout logic here (e.g., clear auth tokens, etc.)
    console.log("Logging out...");
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="h-screen w-screen bg-gray-50 flex flex-col overflow-hidden font-sans">
      {/* Header */}
      <header className="w-full h-16 bg-gradient-to-r from-emerald-700 to-emerald-500 flex items-center justify-between px-6 shadow-sm">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
            <span className="text-white text-xl">🌿</span>
          </div>
          <h1 className="text-white font-bold text-xl">LuxeCrop</h1>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-white/90 text-sm hidden md:block">Welcome back, User!</span>
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">
            <span>👤</span>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Navigation sidebar */}
        <nav className="w-64 h-full bg-white border-r border-gray-100 flex flex-col py-6 px-4 space-y-1">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              className="w-full justify-start px-4 py-3 rounded-lg hover:bg-emerald-50 hover:text-emerald-700 transition-colors text-gray-700"
            >
              <span className="text-lg mr-3">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </Button>
          ))}
          
          {/* Logout button at bottom */}
          <div className="mt-auto pt-4 border-t border-gray-100">
            <Button 
              variant="ghost" 
              onClick={handleLogout}
              className="w-full justify-start px-4 py-3 rounded-lg hover:bg-red-50 hover:text-red-600 text-gray-700"
            >
              <span className="text-lg mr-3">🚪</span>
              <span className="font-medium">Logout</span>
            </Button>
          </div>
        </nav>

        {/* Main content area */}
        <main className="flex-1 h-full overflow-y-auto p-6 md:p-8 bg-gray-50">
          {/* Welcome section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-1">Dashboard</h2>
            <p className="text-gray-500">Monitor and manage your agricultural data</p>
          </section>

          {/* Action buttons grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {actionButtons.map((button) => (
              <Card
                key={button.id}
                className={`${button.color} border-0 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer h-44`}
              >
                <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                  <span className="text-4xl mb-3">{button.icon}</span>
                  <span className="text-white font-semibold text-lg text-center">
                    {button.label}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recent activity section */}
          <section className="mt-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-800">Recent Activity</h3>
              <Button variant="ghost" className="text-emerald-600 hover:text-emerald-700">
                View All
              </Button>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
              <div className="space-y-4">
                {[
                  { id: 1, action: "New soil analysis completed", time: "2 hours ago", icon: "📊" },
                  { id: 2, action: "Device connected successfully", time: "5 hours ago", icon: "🔌" },
                  { id: 3, action: "Crop health report generated", time: "1 day ago", icon: "🌱" }
                ].map((item) => (
                  <div key={item.id} className="flex items-start pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                    <div className="bg-emerald-100 p-2 rounded-lg mr-4">
                      <span className="text-emerald-600">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">{item.action}</h4>
                      <p className="text-sm text-gray-500">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};