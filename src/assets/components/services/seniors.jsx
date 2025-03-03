import React from "react";
import { motion } from "framer-motion";
import { FaHome, FaWalking, FaSmile, FaHandHoldingHeart } from "react-icons/fa"; // Icônes de FontAwesome
import Footer from "../footer/footer";
import SEO from "../SEO";

const AideAuxAinés = () => {
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
          title="Aide aux ainés | ONG SEED"
          description="L'ONG SEED aide non seulement les enfants mais aussi des personnes d'âge mûr."
          keywords="Aides, Soutien, Ainés, Prise en charge, Valorisation"
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
            Aide aux ainés
          </motion.h2>

          {/* Contenu avec une mise en forme plus jolie */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={fadeIn}
            className="bg-white dark:bg-gray-800 p-12 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 md:mt-18 xl:mt-28"
          >
            <div className="space-y-6">
              {/* Icônes pour représenter les services (placées en haut) */}
              <div className="flex justify-center space-x-8 mb-8">
                <FaHome className="h-12 w-12 text-blue-600" /> {/* Appui à domicile */}
                <FaWalking className="h-12 w-12 text-green-600" /> {/* Aide au déplacement */}
                <FaSmile className="h-12 w-12 text-yellow-600" /> {/* Activités de relaxation */}
                <FaHandHoldingHeart className="h-12 w-12 text-red-600" /> {/* Bien-être */}
              </div>
              <div className="w-20 h-1 bg-teal-600 dark:bg-blue-600 mx-auto my-6 rounded-full"></div>

              {/* Texte avec une mise en forme élégante */}
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                L’organisation <strong>Sauvons l’Enfance en Difficulté (SEED)</strong> offre des services et programmes d’aide aux personnes âgées en leur offrant des services d’appui à domicile, en les aidant à se déplacer et organisant des activités de relaxation ou d’animation pour leur santé et bien-être.
              </p>

              {/* Séparateur stylisé */}
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AideAuxAinés;