import React from "react";
import { motion } from "framer-motion";
import { FaHandsHelping, FaHeartbeat } from "react-icons/fa"; // Icônes de FontAwesome
import Footer from "../footer/footer";
import SEO from "../SEO";

const AideSoutien = () => {
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
          title="Aides de soutien | ONG SEED"
          description="L'ONG SEED soutient les enfants en difficultés motrice, mentale ou de croissance."
          keywords="Soutenir, Aider, Valoriser, Protéger, Soutien moral"
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
            Aides de soutien
          </motion.h2>

          {/* Contenu avec une mise en forme plus jolie */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={fadeIn}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700"
          >
            <div className="space-y-6">
              {/* Icône illustrative pour le soutien */}
              <div className="text-center">
                <FaHandsHelping className="h-16 w-16 mx-auto dark:text-gray-300 text-gray-500" />
              </div>

              {/* Texte avec une mise en forme élégante */}
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                L’organisme à but non lucratif <strong>Sauvons l’Enfance en Difficulté (SEED)</strong> offre son service de soutien ponctuel à 1 enfant en difficulté atteint d’une anomalie pour l'aider à trouver une solution à ses problèmes immédiats ou à se libérer de ses émotions pénibles.
              </p>

              {/* Séparateur stylisé */}
              <div className="w-100 h-1 bg-black/5 dark:bg-white/5 mx-auto my-6 rounded-full"></div>

              {/* Icône illustrative pour le bien-être émotionnel */}
              <div className="text-center">
                <FaHeartbeat className="h-16 w-16 mx-auto text-red-500" />
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Notre approche vise à apporter un soutien personnalisé et bienveillant, en mettant l'accent sur le bien-être émotionnel et mental de l'enfant.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AideSoutien;