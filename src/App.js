// src/App.js
import React from "react";
import ButtonComponent from "./components/buttonComponent";

function App() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="text-center">
      <header className="bg-blue-500 p-6">
        <h1 className="text-4xl font-bold text-white">
          Welcome to Tailwind CSS in Smash Badminton
        </h1>
      </header>
      <main className="p-4">
        <p className="text-lg text-gray-700">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ButtonComponent
          onClick={handleClick}
          btnlabel="Click Me"
          className="mt-4"
        />
      </main>
    </div>
  );
}

export default App;
