import React from "react";
import { motion } from "framer-motion";
import { GiBookshelf, GiBrain } from "react-icons/gi"; // Icônes pertinentes
import Footer from "../footer/footer";
import SEO from "../SEO";

const AideEducative = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <>
      <section className="relative bg-white dark:bg-black min-h-screen py-12 px-6">
        {/* OPTIMISATION SEO */}
        <SEO 
          title="Aides éducatives | ONG SEED" 
          description="L'ONG SEED aide les enfants à poursuivre leurs cursus scolaires." 
          keywords="Educations, Scolarité, Etudes, Ecoliers, Enfants" 
        />
        {/* OPTIMISATION SEO */}

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
            Aides éducatives
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
              {/* Icône illustrative pour l'éducation */}
              <div className="text-center">
                <GiBookshelf className="h-16 w-16 mx-auto text-gray-500 dark:text-gray-300" />
              </div>

              {/* Texte avec une mise en forme élégante */}
              <p className="text-lg text-black dark:text-white leading-relaxed">
                L’organisme à but non lucratif <strong>Sauvons l’Enfance en Difficulté (SEED)</strong> offre un service d’aide éducative qui vise à aider un enfant en difficulté atteint d’une anomalie à trouver des solutions aux difficultés qu’il traverse dans le présent, avant d’améliorer sa qualité de vie et son bien-être.
              </p>

              <div className="w-100 h-1 bg-black/5 dark:bg-white/5 mx-auto my-6 rounded-full"></div>

              <div className="text-center">
                <GiBrain className="h-16 w-16 mx-auto text-yellow-600 dark:text-yellow-400" />
              </div>

              <p className="text-lg text-black dark:text-white leading-relaxed">
                Le travail de terrain de l’organisation non gouvernementale <strong>Sauvons l’Enfance en Difficulté (SEED)</strong> se centre sur <em>« ici et maintenant »</em> en utilisant son approche cognitivo-comportementale.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AideEducative;