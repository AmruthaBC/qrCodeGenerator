import React, { useState } from "react";
import QRCode from "react-qr-code";

const QRCodeGenerator: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">QR Code Generator</h1>
      <input
        type="text"
        placeholder="Enter text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="p-2 border border-gray-300 rounded mb-4 w-64"
      />
      {inputValue && (
        <div className="bg-white p-4 rounded shadow">
          <QRCode value={inputValue} size={150} />
        </div>
      )}
    </div>
  );
};

export default QRCodeGenerator;
