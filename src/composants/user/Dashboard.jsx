import React, { useState } from "react";
import { FiUser, FiSettings, FiLogOut } from "react-icons/fi";
import { HiOutlineMenu } from "react-icons/hi";
import Home from "./Home";
import Menu from "../../utils/Menu";

const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState("Accueil");
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 768);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const renderContent = () => {
    switch (activeMenu) {
      case "Accueil":
        return <Home />;
      case "Consultation":
        return <div>Contenu des consultations</div>;
      case "Discussion":
        return <div>Liste des discussions</div>;
      case "Profile":
        return <div>Profil utilisateur</div>;
      default:
        return <div>Contenu par défaut</div>;
    }
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Barre de navigation */}
      <nav className="bg-white shadow-sm fixed top-0 left-0 w-full h-16 flex items-center px-6 justify-between z-10">
        {/* Bouton Menu Mobile */}
        <button
          className="md:hidden p-2 bg-gray-200 rounded-md"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <HiOutlineMenu className="text-2xl" />
        </button>

        <h1 className="text-xl font-bold text-gray-700">Tableau de Bord</h1>

        {/* Profil utilisateur */}
        <div className="relative">
          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="flex items-center gap-3 focus:outline-none"
          >
            <img
              src="https://via.placeholder.com/40"
              alt="User Profile"
              className="w-10 h-10 rounded-full border"
            />
          </button>

          {/* Menu déroulant */}
          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1">
              <button className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-2">
                <FiUser /> Profile
              </button>
              <button className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-2">
                <FiSettings /> Paramètres
              </button>
              <button className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-2">
                <FiLogOut /> Déconnexion
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Layout principal */}
      <div className="flex flex-1 mt-16">
        {/* Sidebar (Barre latérale) */}
        <Menu
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          isSidebarOpen={isSidebarOpen}
        />

        {/* Contenu principal */}
        <div
          className={`flex-1 p-6 transition-all duration-300 ${
            isSidebarOpen ? "md:ml-64" : "ml-0"
          }`}
        >
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
