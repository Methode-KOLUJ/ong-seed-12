import React from "react";
import { motion } from "framer-motion";
import Footer from "../footer/footer";
import SEO from "../SEO";

const NosValeurs = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Valeurs avec images
  const valeurs = [
    {
      nom: "Le respect",
      image: "/images/respect.webp",
    },
    {
      nom: "L’engagement",
      image: "/images/engagement.webp",
    },
    {
      nom: "La responsabilité",
      image: "/images/responsabilite.webp",
    },
    {
      nom: "L’intégrité",
      image: "/images/integrite.webp",
    }
  ];

  return (
    <>
      <section className="relative bg-white dark:bg-black min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        {/* OPTIMISATION SEO */}
        <SEO 
          title="Nos valeurs | ONG SEED" 
          description="Les principales valeurs de l'ONG SEED." 
          keywords="Valeur, Considération, Respect, Différence" 
        />
        {/* OPTIMISATION SEO */}

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
            className="lg:text-left xl:text-left text-3xl sm:text-4xl md:text-5xl font-extrabold text-teal-600 dark:text-blue-600 mb-12 uppercase"
          >
            Nos valeurs
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={fadeIn}
            className="text-justify text-base sm:text-xl md:text-2xl xl:text-2xl text-gray-700 dark:text-gray-300 mb-14 leading-relaxed"
          >
            Sauvons l’Enfance en Difficulté (SEED) est un organisme à but non lucratif qui travaille en fonction de 4 valeurs fondamentales.
          </motion.p>

          {/* Liste des valeurs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {valeurs.map((valeur, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                variants={fadeIn}
                className="overflow-hidden transform transition duration-500 hover:scale-105"
              >
                <h3 className="text-2xl md:text-2xl xl:text-3xl font-extrabold text-red-800 dark:text-yellow-700 uppercase mb-4">{valeur.nom}</h3>
                <img 
                  src={valeur.image} 
                  alt={valeur.nom} 
                loading="lazy"
                  className="w-full h-50 object-cover rounded-xl shadow-md dark:opacity-80"
                />
              </motion.div>
            ))}
          </div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={fadeIn}
            className="text-base sm:text-xl md:text-2xl xl:text-2xl font-semibold text-gray-700 dark:text-gray-300 mt-12 leading-relaxed"
          >
            En dehors de ces 4 valeurs fondamentales de l’Organisation non Gouvernementale Sauvons l’Enfance en difficulté (SEED), l’organisme privilégie la collaboration, le travail d’équipe et la fierté. L’organisme adopte le CTF.
          </motion.p>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default NosValeurs;
