import React, { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString()); // Using eval() to compute expression
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white p-5 rounded-lg shadow-lg w-72">
        <h2 className="text-2xl font-bold text-center mb-3">Calculator</h2>
        <div className="bg-gray-100 text-right p-3 text-2xl rounded mb-3">{input || "0"}</div>
        <div className="grid grid-cols-4 gap-2">
          {["7", "8", "9", "/"].map((char) => (
            <button key={char} onClick={() => handleClick(char)} className="btn">{char}</button>
          ))}
          {["4", "5", "6", "*"].map((char) => (
            <button key={char} onClick={() => handleClick(char)} className="btn">{char}</button>
          ))}
          {["1", "2", "3", "-"].map((char) => (
            <button key={char} onClick={() => handleClick(char)} className="btn">{char}</button>
          ))}
          {["0", ".", "C", "+"].map((char) => (
            <button 
              key={char} 
              onClick={char === "C" ? clearInput : () => handleClick(char)}
              className={`btn ${char === "C" ? "bg-red-500 text-white" : ""}`}
            >
              {char}
            </button>
          ))}
          <button onClick={calculateResult} className="col-span-4 bg-blue-500 text-white p-3 rounded">=</button>
        </div>
      </div>
    </div>
  );
}

// Tailwind CSS Styling
const style = document.createElement("style");
style.innerHTML = `
  .btn {
    background: #f3f3f3;
    padding: 15px;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
  }
  .btn:hover {
    background: #e0e0e0;
  }
`;
document.head.appendChild(style);
