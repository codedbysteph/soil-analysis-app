import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Leaf, Sun, Droplet, Wind, AlertTriangle, ChevronDown, Settings, Bell } from "lucide-react";

export const Home = (): JSX.Element => {
  const { username, logout } = useAuthStore();
  const navigate = useNavigate();
  const [selectedCrop, setSelectedCrop] = useState("Tomatoes");

  const handleLogout = () => {
    logout();
    navigate('/signin');
  };

  const weatherData = {
    temperature: "24°C",
    humidity: "65%",
    windSpeed: "12 km/h",
    sunlight: "High"
  };

  const alerts = [
    { id: 1, message: "Low soil moisture detected in Zone A", severity: "high" },
    { id: 2, message: "Optimal growing conditions in Zone B", severity: "low" },
    { id: 3, message: "Pest detection alert in Zone C", severity: "medium" }
  ];

  const crops = ["Tomatoes", "Lettuce", "Carrots", "Peppers"];

  return (
    <div className="w-full min-h-screen bg-[#91C997]">
      {/* Header */}
      <div className="w-full h-16 [background:linear-gradient(90deg,rgba(72,99,74,1)_7%,rgba(145,201,151,1)_68%)] flex items-center justify-between px-6 shadow-md">
        <div className="flex items-center gap-8">
          <div className="[font-family:'Jaro',Helvetica] font-normal text-black text-2xl">
            LuxeCrop
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Current Crop:</span>
            <div className="relative inline-block">
              <select
                value={selectedCrop}
                onChange={(e) => setSelectedCrop(e.target.value)}
                className="appearance-none bg-white rounded-lg px-4 py-2 pr-8 shadow-sm text-sm font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                {crops.map((crop) => (
                  <option key={crop} value={crop}>{crop}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button className="p-2 hover:bg-black/10 rounded-full">
            <Bell className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-black/10 rounded-full">
            <Settings className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-4">
            <span className="[font-family:'Inter',Helvetica] text-sm">Welcome, {username}</span>
            <button
              onClick={handleLogout}
              className="text-sm text-black hover:underline"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Weather Metrics */}
          <Card className="col-span-1 lg:col-span-4 p-6 bg-white/90 backdrop-blur shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Current Conditions</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                <Sun className="w-8 h-8 text-orange-500" />
                <div>
                  <p className="text-sm text-gray-600">Temperature</p>
                  <p className="text-lg font-semibold">{weatherData.temperature}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                <Droplet className="w-8 h-8 text-blue-500" />
                <div>
                  <p className="text-sm text-gray-600">Humidity</p>
                  <p className="text-lg font-semibold">{weatherData.humidity}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                <Wind className="w-8 h-8 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-600">Wind Speed</p>
                  <p className="text-lg font-semibold">{weatherData.windSpeed}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                <Leaf className="w-8 h-8 text-green-500" />
                <div>
                  <p className="text-sm text-gray-600">Sunlight</p>
                  <p className="text-lg font-semibold">{weatherData.sunlight}</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Main Dashboard */}
          <div className="col-span-1 lg:col-span-3 space-y-6">
            {/* Crop Status */}
            <Card className="p-6 bg-white/90 backdrop-blur shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Crop Status - {selectedCrop}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Growth Progress</span>
                    <span className="font-semibold">75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Health Status</span>
                    <span className="font-semibold text-green-500">Excellent</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Water Level</span>
                    <span className="font-semibold">65%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: "65%" }}></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Nutrient Level</span>
                    <span className="font-semibold">80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{ width: "80%" }}></div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Actions */}
            <Card className="p-6 bg-white/90 backdrop-blur shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button className="bg-blue-500 hover:bg-blue-600">Water Now</Button>
                <Button className="bg-orange-500 hover:bg-orange-600">Add Nutrients</Button>
                <Button className="bg-purple-500 hover:bg-purple-600">Adjust Light</Button>
                <Button className="bg-green-600 hover:bg-green-700">View Reports</Button>
              </div>
            </Card>
          </div>

          {/* Alerts Sidebar */}
          <div className="col-span-1 space-y-6">
            <Card className="p-6 bg-white/90 backdrop-blur shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Alerts</h2>
                <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm">{alerts.length} New</span>
              </div>
              <div className="space-y-4">
                {alerts.map((alert) => (
                  <div
                    key={alert.id}
                    className={`p-4 rounded-lg flex items-start gap-3 ${
                      alert.severity === 'high' ? 'bg-red-50' :
                      alert.severity === 'medium' ? 'bg-yellow-50' : 'bg-green-50'
                    }`}
                  >
                    <AlertTriangle className={`w-5 h-5 ${
                      alert.severity === 'high' ? 'text-red-500' :
                      alert.severity === 'medium' ? 'text-yellow-500' : 'text-green-500'
                    }`} />
                    <p className="text-sm">{alert.message}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-white/90 backdrop-blur shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Upcoming Tasks</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm">Harvest Zone A</span>
                  <span className="text-xs text-gray-500">Tomorrow</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm">Fertilize Zone B</span>
                  <span className="text-xs text-gray-500">In 2 days</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm">Maintenance Check</span>
                  <span className="text-xs text-gray-500">Next Week</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};