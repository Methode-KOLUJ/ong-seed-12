import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaHistory,
  FaBullseye,
  FaServicestack,
  FaHandshake,
  FaDonate,
  FaFilm,
  FaRobot,
  FaBriefcase,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [openSection, setOpenSection] = useState(null); // Gère l'ouverture des sous-menus
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // Gère l'ouverture du menu mobile
  const menuRef = useRef(null);
  const location = useLocation(); // Récupère l'URL actuelle

  const handleSectionToggle = (section) => {
    setOpenSection(openSection === section ? null : section); // Ouvre/ferme une section spécifique
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpenSection(null); // Ferme tous les sous-menus si clic à l'extérieur
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Fonction pour vérifier si un lien est actif
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav ref={menuRef} className="bg-white dark:bg-black shadow-md-white fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-blue-500 dark:text-teal-500 font-bebas">
          ONG SEED
        </div>
        {/* Hamburger Icon (Mobile Only) */}
        <button
          className="xl:hidden text-3xl text-blue-500 z-50"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Menu */}
        <ul className={`hidden xl:flex space-x-6`}>
          <li className="text-center">
            <Link
              to="/"
              className={`hover:text-blue-500 dark:text-white transition ${
                isActive("/") ? "active" : ""
              }`}>
              <FaHome className="mx-auto text-2xl text-green-500" />
              <span>Accueil</span>
            </Link>
          </li>
          <li className="relative text-center">
            <Link
              to="/notre-histoire"
              className={`text-blue-950 dark:text-white transition ${
                isActive("/notre-histoire") ? "active" : ""
              }`}>
              <FaHistory className="mx-auto text-2xl text-orange-700" />
              <span>Découvrez l’histoire de nos 5 ans !</span>
            </Link>
          </li>
          <li className="relative text-center">
            <button
              onClick={() => handleSectionToggle("objectifs")}
              className="text-blue-950 dark:text-white transition">
              <FaBullseye className="mx-auto text-2xl text-red-600" />
              <span>Mission</span>
            </button>
            {openSection === "objectifs" && (
              <ul className="absolute bg-white shadow-md mt-2 p-3 rounded">
                <li>
                  <Link
                    to="/nos-valeurs"
                    className={`hover:text-blue-500 ${
                      isActive("/nos-valeurs") ? "active" : ""
                    }`}>
                    Nos valeurs
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    to="/notre-vision"
                    className={`hover:text-blue-500 ${
                      isActive("/notre-vision") ? "active" : ""
                    }`}>
                    Notre vision
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    to="/nos-projets"
                    className={`hover:text-blue-500 ${
                      isActive("/nos-projets") ? "active" : ""
                    }`}>
                    Nos projets
                  </Link>
                </li>
                  <li className="mt-2">
                  <Link
                    to="/Resultats"
                    className={`hover:text-blue-500 whitespace-nowrap ${
                      isActive("/Resultats") ? "active" : ""
                    }`}>
                    Résultats escomptés
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="relative text-center">
            <button
              onClick={() => handleSectionToggle("services")}
              className="text-blue-950 dark:text-white transition">
              <FaServicestack className="mx-auto text-2xl text-blue-400" />
              <span>Services</span>
            </button>
            {openSection === "services" && (
              <ul className="absolute bg-white shadow-md mt-2 p-3 rounded">
                <li>
                  <Link
                    to="/aide-educative"
                    className={`hover:text-blue-500 ${
                      isActive("/aide-educative") ? "active" : ""
                    }`}>
                    Service d’aide éducative
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    to="/aide-soutien"
                    className={`hover:text-blue-500 ${
                      isActive("/aide-soutien") ? "active" : ""
                    }`}>
                    Service d’aide de soutien
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    to="/sante-mentale"
                    className={`hover:text-blue-500 whitespace-nowrap ${
                      isActive("/sante-mentale") ? "active" : ""
                    }`}>
                    Service d’aide en santé mentale
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    to="/medias"
                    className={`hover:text-blue-500 ${
                      isActive("/medias") ? "active" : ""
                    }`}>
                    Service des médias
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    to="/seniors"
                    className={`hover:text-blue-500 ${
                      isActive("/seniors") ? "active" : ""
                    }`}>
                    Service aux aînés
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    to="https://www.youtube.com/@3savoirstv"
                    className={`hover:text-blue-500 ${
                      isActive("/formation-gratuite") ? "active" : ""
                    }`}>
                    Formation gratuite (en ligne !)
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    to="/boutique"
                    className={`hover:text-blue-500 ${
                      isActive("/boutique") ? "active" : ""
                    }`}>
                    Boutique officielle
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    to="/AddPartners"
                    className={`hover:text-blue-500 ${
                      isActive("/AddPartners") ? "active" : ""
                    }`}>
                    Admin
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="text-center">
            <Link
              to="/partenaire"
              className={`text-blue-950 dark:text-white transition ${
                isActive("/partenaire") ? "active" : ""
              }`}>
              <FaHandshake className="mx-auto text-2xl text-green-500" />
              <span>Partenariat</span>
            </Link>
          </li>
          <li className="relative text-center">
            <button
              onClick={() => handleSectionToggle("emploi")}
              className="text-blue-950 dark:text-white transition">
              <FaBriefcase className="mx-auto text-2xl text-yellow-600" />
              <span>Opportunités</span>
            </button>
            {openSection === "emploi" && (
              <ul className="absolute bg-white shadow-md mt-2 p-3 rounded">
                <li>
                  <Link
                    to="/emplois"
                    className={`hover:text-blue-500 ${
                      isActive("/emplois") ? "active" : ""
                    }`}>
                    Possibilités d’emploi
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    to="/Benevole"
                    className={`hover:text-blue-500 whitespace-nowrap ${
                      isActive("/Benevole") ? "active" : ""
                    }`}>
                    Postuler en tant que Bénévole
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className="text-center"
            title="Aidez les Enfants en faisant un Don">
            <Link
              to="/boutique"
              className={`text-blue-950 dark:text-white transition ${
                isActive("/don") ? "active" : ""
              }`}>
              <FaDonate className="mx-auto text-2xl text-yellow-400" />
              <span>Faire un don</span>
            </Link>
          </li>
          <li className="relative text-center" title="Nos Médias">
            <button
              onClick={() => handleSectionToggle("medias")}
              className="text-blue-950 dark:text-white transition">
              <FaFilm className="mx-auto text-2xl text-teal-500" />
              <span>Médias</span>
            </button>
            {openSection === "medias" && (
              <ul className="absolute bg-white shadow-md mt-2 p-3 rounded">
                <li>
                  <Link
                    to="/YouTube"
                    className={`hover:text-blue-500 ${
                      isActive("/YouTube") ? "active" : ""
                    }`}>
                    Films
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    to="https://www.youtube.com/@3savoirstv"
                    className={`hover:text-blue-500 whitespace-nowrap ${
                      isActive("/magazine") ? "active" : ""
                    }`}>
                    SEED Magazine
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="text-center" title="Assistant virtuel">
            <Link
              to="/Chatbot"
              className={`text-blue-950 dark:text-white transition ${
                isActive("/Chatbot") ? "active" : ""
              }`}>
              <FaRobot className="mx-auto text-2xl text-gray-400" />
              <span>Chatbot</span>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <ul className="xl:hidden bg-gray-100 dark:bg-gray-900 absolute top-0 left-0 w-full shadow-md p-4 space-y-4">
            <li>
              <Link
                to="/"
                className={`flex items-center space-x-2 text-blue-500 dark:text-white font-bold text-xl md:text-2xl lg:text-2xl ${
                  isActive("/") ? "active" : ""
                }`}>
                <span>Accueil</span>
              </Link>
            </li>
            <li>
              <Link
                to="/notre-histoire"
                className={`flex items-center space-x-2 text-blue-500 dark:text-white font-bold text-xl md:text-2xl lg:text-2xl ${
                  isActive("/notre-histoire") ? "active" : ""
                }`}>
                <span>Découvrez l’histoire de nos 5 ans !</span>
              </Link>
            </li>
            <li>
              <button
                onClick={() => handleSectionToggle("objectifs")}
                className="flex items-center space-x-2 text-blue-500 dark:text-white font-bold text-xl md:text-2xl lg:text-2xl">
                <span>Mission</span>
              </button>
              {openSection === "objectifs" && (
                <ul className="mt-2 pl-4">
                  <li>
                    <Link
                      to="/nos-valeurs"
                      className={`block text-blue-600 dark:text-white ${
                        isActive("/nos-valeurs") ? "active" : ""
                      }`}>
                      Nos valeurs
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      to="/notre-vision"
                      className={`block text-blue-600 dark:text-white ${
                        isActive("/notre-vision") ? "active" : ""
                      }`}>
                      Notre vision
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      to="/nos-projets"
                      className={`block text-blue-600 dark:text-white ${
                        isActive("/nos-projets") ? "active" : ""
                      }`}>
                      Nos projets
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      to="/Resultats"
                      className={`block text-blue-600 dark:text-white ${
                        isActive("/Resultats") ? "active" : ""
                      }`}>
                      Résultats escomptés
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button
                onClick={() => handleSectionToggle("services")}
                className="flex items-center space-x-2 text-blue-500 dark:text-white font-bold text-xl md:text-2xl lg:text-2xl">
                <span>Services</span>
              </button>
              {openSection === "services" && (
                <ul className="mt-2 pl-4">
                  <li>
                    <Link
                      to="/aide-educative"
                      className={`block text-blue-600 dark:text-white ${
                        isActive("/aide-educative") ? "active" : ""
                      }`}>
                      Service d’aide éducative
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      to="/aide-soutien"
                      className={`block text-blue-600 dark:text-white ${
                        isActive("/aide-soutien") ? "active" : ""
                      }`}>
                      Service d’aide de soutien
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      to="/sante-mentale"
                      className={`block text-blue-600 dark:text-white ${
                        isActive("/sante-mentale") ? "active" : ""
                      }`}>
                      Service d’aide en santé mentale
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      to="/medias"
                      className={`block text-blue-600 dark:text-white ${
                        isActive("/medias") ? "active" : ""
                      }`}>
                      Service des médias
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      to="/seniors"
                      className={`block text-blue-600 dark:text-white ${
                        isActive("/seniors") ? "active" : ""
                      }`}>
                      Service aux aînés
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      to="https://www.youtube.com/@3savoirstv"
                      className={`block text-blue-600 dark:text-white ${
                        isActive("/formation-gratuite") ? "active" : ""
                      }`}>
                      Formation gratuite (en ligne !)
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      to="/boutique"
                      className={`block text-blue-600 dark:text-white ${
                        isActive("/boutique") ? "active" : ""
                      }`}>
                      Boutique officielle
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                to="/partenaire"
                className={`flex items-center space-x-2 text-blue-500 dark:text-white font-bold text-xl md:text-2xl lg:text-2xl ${
                  isActive("/partenaire") ? "active" : ""
                }`}>
                <span>Partenariat</span>
              </Link>
            </li>
            <li>
              <button
                onClick={() => handleSectionToggle("emploi")}
                className="flex items-center space-x-2 text-blue-500 dark:text-white font-bold text-xl md:text-2xl lg:text-2xl">
                <span>Opportunités</span>
              </button>
              {openSection === "emploi" && (
                <ul className="mt-2 pl-4">
                  <li>
                    <Link
                      to="/emplois"
                      className={`block text-blue-600 dark:text-white ${
                        isActive("/emplois") ? "active" : ""
                      }`}>
                      Possibilités d’emploi
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      to="/Benevole"
                      className={`block text-blue-600 dark:text-white ${
                        isActive("/Benevole") ? "active" : ""
                      }`}>
                      Postuler en tant que Bénévole
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                to="/boutique"
                className={`flex items-center space-x-2 text-blue-500 dark:text-white font-bold text-xl md:text-2xl lg:text-2xl ${
                  isActive("/don") ? "active" : ""
                }`}>
                <span>Faire un don</span>
              </Link>
            </li>
            <li>
              <button
                onClick={() => handleSectionToggle("medias")}
                className="flex items-center space-x-2 text-blue-500 dark:text-white font-bold text-xl md:text-2xl lg:text-2xl">
                <span>Médias</span>
              </button>
              {openSection === "medias" && (
                <ul className="mt-2 pl-4">
                  <li>
                    <Link
                      to="/YouTube"
                      className={`block text-blue-600 dark:text-white ${
                        isActive("/YouTube") ? "active" : ""
                      }`}>
                      Films
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      to="https://www.youtube.com/@3savoirstv"
                      className={`block text-blue-600 dark:text-white ${
                        isActive("/magazine") ? "active" : ""
                      }`}>
                      SEED Magazine
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="text-center">
              <Link
                to="/Chatbot"
                className={`flex items-center space-x-2 text-blue-500 dark:text-white font-bold text-xl md:text-2xl lg:text-2xl ${
                  isActive("/Chatbot") ? "active" : ""
                }`}>
                <span>Chatbot</span>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;