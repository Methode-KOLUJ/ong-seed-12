import React from "react";
import { motion } from "framer-motion";
import { FaBookOpen, FaStar, FaHeart, FaChild } from "react-icons/fa";
import Footer from "../footer/footer";
import SEO from "../SEO";

const NotreVision = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const cardHover = {
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  return (
    <>
      <section className="relative bg-white dark:bg-black min-h-screen py-12 px-6">
        <SEO
          title="Notre vision | ONG SEED"
          description="La vision globale de l'ONG Sauvons l'Enfance en Difficulté (SEED)."
          keywords="Vision, But, Recherche, Appréhension"
        />
        {/* Gradient en arrière-plan couvrant tout l'écran */}
        <div
          className="absolute inset-0 bg-gradient-to-tr from-blue-950 via-transparent to-red-950 opacity-25 dark:opacity-75"
          aria-hidden="true"
        ></div>

        <div className="max-w-5xl mx-auto text-center relative">
          {/* Titre avec animation */}
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={fadeIn}
            className="lg:text-left xl:text-left text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-extrabold text-teal-600 dark:text-blue-600 mb-12 uppercase"
          >
            Notre vision
          </motion.h2>

          {/* Contenu de la vision */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={fadeIn}
            className="text-3xl sm:text-4xl xl:text-5xl text-gray-700 dark:text-gray-300 mb-16 leading-relaxed"
          >
            <p className="text-xl md:text-2xl lg:md:text-2xl xl:md:text-2xl mb-12 text-justify">L’organisme à but non lucratif Sauvons l'Enfance en Difficulté (SEED) vise à promouvoir :</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="flex flex-col items-center p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg"
                whileHover="hover"
                variants={cardHover}
              >
                <FaBookOpen className="text-teal-500 text-6xl mb-4" />
                <span className="text-xl font-bold">L'éducation</span>
              </motion.div>
              <motion.div
                className="flex flex-col items-center p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg"
                whileHover="hover"
                variants={cardHover}
              >
                <FaStar className="text-yellow-500 text-6xl mb-4" />
                <span className="text-xl font-bold">Les talents</span>
              </motion.div>
              <motion.div
                className="flex flex-col items-center p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg"
                whileHover="hover"
                variants={cardHover}
              >
                <FaHeart className="text-red-500 text-6xl mb-4" />
                <span className="text-xl font-bold">Les valeurs</span>
              </motion.div>
              <motion.div
                className="flex flex-col items-center p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg"
                whileHover="hover"
                variants={cardHover}
              >
                <FaChild className="text-blue-500 text-6xl mb-4" />
                <span className="text-xl font-bold">Les capacités de l’enfant en difficulté atteint d’une anomalie</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default NotreVision;
