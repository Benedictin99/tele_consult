import React from "react";
import { useEffect, useState } from "react";

const Bluetooth = () => {
  const [variable, setVariable] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://192.168.4.1/") // Remplacez par l'adresse IP de votre ESP32
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((data) => {
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(data, "text/html");
        const value = htmlDoc.querySelector("h1").textContent.split(": ")[1];
        setVariable(value);
        setError(null);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data from ESP32");
      });
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Variable from ESP32:</h1>
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <p className="text-xl">{variable}</p>
        )}
      </div>
    </div>
  );
};
export default Bluetooth;
