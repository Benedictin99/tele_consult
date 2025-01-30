import React, { useState, useEffect } from "react";

const Data = () => {
  const [temperature, setTemperature] = useState("--");
  const [bloodPressure, setBloodPressure] = useState("--/--");
  const [glucoseLevel, setGlucoseLevel] = useState("--");

  // Simuler la récupération des données des capteurs
  useEffect(() => {
    const fetchSensorData = () => {
      // Simuler des données de capteurs (remplacez par des appels API réels)
      setTemperature((36.5 + Math.random() * 0.5).toFixed(1));
      setBloodPressure(
        `${Math.floor(110 + Math.random() * 10)}/${Math.floor(
          70 + Math.random() * 10
        )}`
      );
      setGlucoseLevel((90 + Math.random() * 10).toFixed(0));
    };

    // Mettre à jour les données toutes les 5 secondes
    const interval = setInterval(fetchSensorData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Suivi de Santé
        </h1>

        {/* Carte pour la température */}
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <h2 className="text-lg font-semibold text-blue-800">
            Température Corporelle
          </h2>
          <p className="text-3xl font-bold text-blue-600 mt-2">
            {temperature} °C
          </p>
        </div>

        {/* Carte pour la tension artérielle */}
        <div className="bg-green-50 p-4 rounded-lg mb-4">
          <h2 className="text-lg font-semibold text-green-800">
            Tension Artérielle
          </h2>
          <p className="text-3xl font-bold text-green-600 mt-2">
            {bloodPressure} mmHg
          </p>
        </div>

        {/* Carte pour le taux de glycémie */}
        <div className="bg-purple-50 p-4 rounded-lg">
          <h2 className="text-lg font-semibold text-purple-800">
            Taux de Glycémie
          </h2>
          <p className="text-3xl font-bold text-purple-600 mt-2">
            {glucoseLevel} mg/dL
          </p>
        </div>
      </div>
    </div>
  );
};

export default Data;
