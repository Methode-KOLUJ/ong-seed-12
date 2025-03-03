import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok, FaDollarSign } from "react-icons/fa"; // Icônes de FontAwesome
import Footer from "../footer/footer";
import SEO from "../SEO";

const ServiceMedia = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <>
      <section className="relative bg-white dark:bg-black min-h-screen py-12 px-6">
        {/* OPTIMISATION SEO */}
        <SEO
          title="Services médiatiques | ONG SEED"
          description="L'ONG SEED se trouve sur plusieurs plate-formes médiatiques."
          keywords="Plate-formes, Médiaques, Médias, Informations, Divertissements"
        />
        {/* OPTIMISATION SEO */}

        {/* Gradient en arrière-plan couvrant tout l'écran */}
        <div
          className="absolute inset-0 bg-gradient-to-tr from-blue-950 via-transparent to-red-950 opacity-25 dark:opacity-75"
          aria-hidden="true"
        ></div>

        <div className="max-w-6xl mx-auto relative">
          {/* Titre avec animation */}
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={fadeIn}
            className="text-center md:text-left text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-extrabold text-teal-600 dark:text-blue-600 mb-12 uppercase"
          >
            Services médiatiques
          </motion.h2>

          {/* Contenu avec une mise en forme plus jolie */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={fadeIn}
            className="bg-white dark:bg-gray-800 p-12 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 md:mt-18 xl:mt-32"
          >
            <div className="space-y-6">
              {/* Texte avec une mise en forme élégante */}
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                L’organisation non gouvernementale <strong>Sauvons l’Enfance en Difficulté (SEED)</strong> offre des services de média gratuits et payants afin de vendre ses contenus de médias sociaux promotionnels et pertinents en vue de générer des revenus et accroître la visibilité de sa marque.
              </p>

              {/* Séparateur stylisé */}
              <div className="w-20 h-1 bg-teal-600 dark:bg-blue-600 mx-auto my-6 rounded-full"></div>

              {/* Icônes pour représenter les plateformes médiatiques */}
              <div className="flex justify-center space-x-8">
                <FaFacebook className="h-10 w-10 text-gray-500" /> 
                <FaInstagram className="h-10 w-10 text-gray-500" />
                <FaYoutube className="h-10 w-10 text-gray-500" /> 
                <FaTiktok className="h-10 w-10 text-gray-500" />
                <FaDollarSign className="h-10 w-10 text-gray-500" /> 
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ServiceMedia;