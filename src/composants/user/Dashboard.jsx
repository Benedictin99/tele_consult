import React from "react";

const Dashboard = () => {
  return (
    <div className="flex h-screen flex-col md:flex-row">
      {/* Barre de menu à gauche */}
      <div className="w-full md:w-64 bg-blue-900 text-white p-6">
        <h2 className="text-2xl font-bold mb-8">Menu</h2>
        <ul>
          <li className="mb-4">
            <a href="#" className="hover:text-blue-400">
              Accueil
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:text-blue-400">
              Consultation
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:text-blue-400">
              Discussion
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:text-blue-400">
              Profile
            </a>
          </li>
        </ul>
      </div>

      {/* Contenu principal */}
      <div className="flex-1 flex flex-col">
        {/* Barre de navigation en haut */}
        <div className="bg-blue-700 text-white p-4 flex justify-between items-center">
          <h1 className="text-3xl font-semibold">Telemedecine</h1>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-400">
              Logout
            </button>
          </div>
        </div>

        {/* Section des indicateurs */}
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Taux de glycémie */}
          <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
            <h3 className="text-xl font-bold text-blue-900">
              Taux de Glycémie
            </h3>
            <p className="text-3xl text-blue-700">90 mg/dL</p>
            <p className="text-gray-500">Normal</p>
          </div>

          {/* Température corporelle */}
          <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
            <h3 className="text-xl font-bold text-blue-900">
              Température Corporelle
            </h3>
            <p className="text-3xl text-blue-700">36.7°C</p>
            <p className="text-gray-500">Normal</p>
          </div>

          {/* Tension artérielle */}
          <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
            <h3 className="text-xl font-bold text-blue-900">
              Tension Artérielle
            </h3>
            <p className="text-3xl text-blue-700">120/80 mmHg</p>
            <p className="text-gray-500">Normale</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
