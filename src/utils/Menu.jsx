import React from "react";
import { FiHome, FiMessageSquare, FiUser } from "react-icons/fi";
import { MdOutlineMedicalServices } from "react-icons/md";

const Menu = ({ activeMenu, setActiveMenu, isSidebarOpen }) => {
  const menus = [
    { name: "Accueil", icon: <FiHome className="text-xl" /> },
    {
      name: "Consultation",
      icon: <MdOutlineMedicalServices className="text-xl" />,
    },
    { name: "Discussion", icon: <FiMessageSquare className="text-xl" /> },
    { name: "Profile", icon: <FiUser className="text-xl" /> },
  ];

  return (
    <div
      className={`fixed md:relative top-0 left-0 h-full w-64 bg-white shadow-lg p-5 transition-transform duration-300 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-64"
      } md:translate-x-0 md:flex md:flex-col`}
    >
      <h2 className="text-xl font-bold text-gray-700 mb-6">Menu</h2>
      <ul className="space-y-4">
        {menus.map((menu) => (
          <li key={menu.name}>
            <button
              onClick={() => setActiveMenu(menu.name)}
              className={`flex items-center space-x-2 w-full px-4 py-3 rounded-lg text-left transition ${
                activeMenu === menu.name
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {menu.icon}
              <span>{menu.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
