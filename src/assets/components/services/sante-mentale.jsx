import React from "react";
import { motion } from "framer-motion";
import { FaUserMd, FaBrain, FaHandsHelping } from "react-icons/fa"; // Icônes de FontAwesome
import Footer from "../footer/footer";
import SEO from "../SEO";

const Mentale = () => {
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
          title="Santé mentale | ONG SEED"
          description="L'ONG SEED aide les enfants vivants avec des problèmes mentaux."
          keywords="Santé mentale, Bien-être, Croissance, Prise en charge, Valorisation"
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
            Santé mentale
          </motion.h2>

          {/* Contenu avec une mise en forme plus jolie */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={fadeIn}
            className="bg-white dark:bg-gray-800 p-10 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 xl:mt-20"
          >
            <div className="space-y-6">
              {/* Icône illustrative pour la santé mentale */}
              <div className="text-center">
                <FaBrain className="h-16 w-16 mx-auto text-purple-600" /> {/* Couleur pour la santé mentale */}
              </div>

              {/* Texte avec une mise en forme élégante */}
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                L’organisme à but non lucratif <strong>Sauvons l’Enfance en Difficulté (SEED)</strong>, en partenariat avec ses psychologues, psychiatres, travailleurs, médecins et éducateurs, vise à apporter des changements dans la personnalité de l’enfant atteint d’une anomalie par la création d’un lien de confiance afin qu’il ait la compréhension et la conscience de sa personnalité.
              </p>

              {/* Séparateur stylisé */}
              <div className="w-20 h-1  bg-black/10 dark:bg-white/10 mx-auto my-6 rounded-full"></div>

              {/* Icônes supplémentaires pour illustrer les partenaires */}
              <div className="flex justify-center space-x-8">
                <FaUserMd className="h-12 w-12 text-blue-600" /> {/* Couleur pour les médecins */}
                <FaHandsHelping className="h-12 w-12 text-green-600" /> {/* Couleur pour le soutien */}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Mentale;