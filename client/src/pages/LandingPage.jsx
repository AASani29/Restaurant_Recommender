import React from "react";
//import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      
      
      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center">
        {/* Logo */}
        <div className="mb-10">
          <img
            src='/MediTalkLogo.png'
            alt="App Logo"
            className="w-32 h-32"
          />
        </div>
        <div>Landingpage</div>

        {/* Features Section */}
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-4 border rounded-lg shadow-md hover:shadow-lg">
            <h3 className="text-xl font-semibold text-blue-500">Feature 1</h3>
            <p className="text-gray-600 mt-2">Description of Feature 1.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md hover:shadow-lg">
            <h3 className="text-xl font-semibold text-green-500">Feature 2</h3>
            <p className="text-gray-600 mt-2">Description of Feature 2.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md hover:shadow-lg">
            <h3 className="text-xl font-semibold text-purple-500">Feature 3</h3>
            <p className="text-gray-600 mt-2">Description of Feature 3.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-4 bg-gray-100">
        <p className="text-gray-600">&copy; 2024 YourApp. All rights reserved.</p>
      </footer>
    </div>
  );
}
