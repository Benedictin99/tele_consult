import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import ConsultationOverview from "./consultation/ConsultationOverview";
import ConsultationDetails from "./consultation/ConsultationDetails";
import ConsultationHistory from "./consultation/ConsultationHistory";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour gérer l'ouverture du menu sur mobile

  // Fonction pour changer la section active
  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  // Composants à afficher en fonction de la section active
  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return <ConsultationOverview />;
      case "details":
        return <ConsultationDetails />;
      case "history":
        return <ConsultationHistory />;
      default:
        return <ConsultationOverview />;
    }
  };

  return (
    <nav className="bg-white fixed w-full z-10">
      <div className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo */}
        <ScrollLink
          to="accueil"
          smooth={true}
          duration={600}
          className="cursor-pointer"
        >
          <h1 className="text-3xl font-bold">
            <span className="text-black font-bold">TELE</span>
            <span className="text-blue-600 font-extrabold">MEDECINE</span>
          </h1>
        </ScrollLink>

        <div className="hidden md:flex flex-1 justify-end space-x-6 px-5 text-lg font-semibold">
          <ScrollLink
            to="accueil"
            smooth={true}
            duration={600}
            className="text-gray-700 hover:text-blue-600 cursor-pointer"
          >
            Accueil
          </ScrollLink>
          <ScrollLink
            to="services"
            smooth={true}
            duration={600}
            className="text-gray-700 hover:text-blue-600 cursor-pointer"
          >
            Services
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={600}
            className="text-gray-700 hover:text-blue-600 cursor-pointer"
          >
            À propos
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={600}
            className="text-gray-700 hover:text-blue-600 cursor-pointer"
          >
            Contact
          </ScrollLink>
        </div>
      </div>
    </nav>
  );
};

export default Dashboard;
