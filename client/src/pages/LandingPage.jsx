import React from "react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/1500')" }}>
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen text-white px-4 py-10 bg-black bg-opacity-50">
        
        {/* Logo */}
        <div className="mb-8">
          <img
            src='/MediTalkLogo.png'  // Make sure the logo path is correct
            alt="App Logo"
            className="w-32 h-32 object-contain"
          />
        </div>
        
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-center mb-6">Welcome to MediTalk</h1>
        <p className="text-lg text-center mb-10">Your health and well-being, at your fingertips.</p>

        {/* Features Section */}
        <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 border border-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-blue-500 mb-4">Feature 1</h3>
            <p>Description of Feature 1.</p>
          </div>
          <div className="p-6 border border-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-green-500 mb-4">Feature 2</h3>
            <p>Description of Feature 2.</p>
          </div>
          <div className="p-6 border border-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-purple-500 mb-4">Feature 3</h3>
            <p>Description of Feature 3.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full py-4 bg-black text-white text-center">
        <p className="text-sm">&copy; 2024 MediTalk. All rights reserved.</p>
      </footer>
    </div>
  );
}
