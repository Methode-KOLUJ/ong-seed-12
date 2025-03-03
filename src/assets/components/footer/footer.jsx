import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-black py-8 text-black dark:text-white relative">
      {/* Gradient en arrière-plan */}
      <div
        className="absolute inset-0 bg-gradient-to-tl from-red-950 via-transparent to-blue-950 opacity-35 dark:opacity-95"
        aria-hidden="true"></div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
          {/* Première colonne : Horaires de Fonctionnement */}
          <div>
            <h3 className="text-xl md:text-2xl lg:text-3xl text-center uppercase font-extrabold xl:mb-6 text-blue-600 dark:text-teal-600">
              nos Horaires
            </h3>
            <ul className="mt-4 space-y-4 text-center">
              <li>
                <p className="text-xl font-bold text-green-800 hover:text-green-500">
                  Du lundi au vendredi
                </p>
                <p className="text-lg font-bold">08H - 17H</p>
              </li>
              <li>
                <p className="text-xl font-bold text-yellow-800 hover:text-yellow-500">
                  Samedi
                </p>
                <p className="text-lg font-bold">08H - 15H</p>
              </li>
              <li>
                <p className="text-xl font-bold text-red-800 hover:text-red-500">
                  Dimanche
                </p>
                <p className="text-lg font-bold">Fermé</p>
              </li>
            </ul>
          </div>

          {/* Deuxième colonne : Mes Contacts */}
          <div>
            <h3 className="text-xl md:text-2xl lg:text-3xl text-center uppercase font-extrabold xl:mb-6 text-blue-600 dark:text-teal-600">
              contactez-nous
            </h3>
            <ul className="mt-4 space-y-4 flex flex-col items-center">
              <li>
                <a
                  href="/"
                  className="font-bold text-xl flex items-center gap-2 dark:text-gray-100 text-gray-600 hover:text-teal-500 dark:hover:text-teal-500"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaWhatsapp size={22} />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:ongseedtv@gmail.com"
                  className="font-bold text-xl flex items-center gap-2 dark:text-white text-gray-600 hover:text-blue-500 dark:hover:text-blue-500">
                  <FaEnvelope size={22} />
                  <span>Email</span>
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="font-bold text-xl flex items-center gap-2 dark:text-white text-gray-600 hover:text-green-500 dark:hover:text-green-500">
                  <FaPhone size={22} />
                  <span>Appel</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Troisième colonne : Réseaux sociaux */}
          <div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-center uppercase xl:mb-6 text-blue-600 dark:text-teal-600">
              suivez-nous
            </h3>
            <ul className="mt-4 space-y-4 flex flex-col items-center">
              <li>
                <a
                  href="/"
                  className="font-bold text-xl flex items-center gap-2 dark:text-white text-gray-600 hover:text-blue-700 dark:hover:text-blue-700"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaLinkedin size={22} />
                  <span>LinkedIn</span>
                </a>
              </li>

              <li>
                <a
                  href="/"
                  className="font-bold text-xl flex items-center gap-2 dark:text-white text-gray-600 hover:text-pink-700 dark:hover:text-pink-700"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaInstagram size={22} />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/Sauvonslenfanceendifficulte"
                  className="font-bold text-xl flex items-center gap-2 dark:text-white text-gray-600 hover:text-blue-800 dark:hover:text-blue-800"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaFacebook size={22} />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <Link to="/YouTubes"
                  className="font-extrabold text-xl flex items-center gap-2 dark:text-white text-gray-600 hover:text-red-500 dark:hover:text-red-600">
                  <FaYoutube size={22} />
                  <span>YouTube</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-gray-500 dark:border-gray-600 pt-4 mt-8">
          <p className="sm:text-xs lg:text-sm xl:text-base">
            &copy; {currentYear} Tous droits réservés à l'ONG SEED || Développé
            par{" "}
            <span className="font-bold">
              <a href="https://wa.me/243812539000"> KOLUJ_DEV</a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
