import React, { useState } from "react";

export const ErrorPage: React.FC = () => {
  const [hover, setHover] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-5xl font-bold text-blue-500 mb-4">Happy Birthday!</h1>
      <a 
        href="https://www.example.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`text-lg font-medium ${hover ? 'text-blue-700' : 'text-blue-500'} transition duration-300`}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        Visit our website
      </a>
    </div>
  );
};

