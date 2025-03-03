import React from "react";
import { motion } from "framer-motion";

const About = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative bg-white dark:bg-black py-12 px-6">
      {/* Gradient en arrière-plan couvrant tout l'écran */}
      <div
        className="absolute inset-0 bg-gradient-to-tl from-red-950 via-transparent to-blue-950 opacity-25 dark:opacity-75"
        aria-hidden="true"></div>

      <div className="max-w-5xl mx-auto text-center relative">
        {/* Titre avec animation */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={fadeIn}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-extrabold text-teal-600 dark:text-blue-600 mb-12 mt-8"
        >
          QUI SOMMES-NOUS ?
        </motion.h2>

        {/* Contenu */}
        <div className="space-y-6">
          {[
            "Sauvons l’enfance en difficulté est un organisme à but non lucratif qui prend en charge 5 types d’enfants en difficulté : ceux atteints d’une anomalie de comportement, de communication, d’ordre intellectuel, d’ordre physique ou d’anomalie multiple.",
            "L’organisme offre son aide de soutien, aide éducative et aide thérapeutique aux enfants en difficulté âgés de 0 à 21 ans.",
            "Notre objectif est d’offrir aux enfants en difficulté un état de bien-être agréable en satisfaisant leurs besoins essentiels afin qu’ils puissent mener une vie de qualité et trouver la sérénité.",
            "Nous utilisons une succession de procédés pour mener nos actions : identifier un enfant en difficulté atteint d’une anomalie, procéder à la documentation, et finalement résoudre ses besoins essentiels pour atteindre nos 5 grands résultats.",
          ].map((text, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeIn}
              className="bg-gray-200 sm:text-base md:text-xl lg:text-2xl dark:bg-gray-800 text-gray-950 dark:text-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <p>{text}</p>
            </motion.div>
          ))}
        </div>

        {/* Slogan avec animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeIn}
          className="mt-10 bg-gray-800 text-gray-100 dark:bg-gray-100 dark:text-gray-950 p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 text-blue-600 dark:text-teal-600">
            NOTRE SLOGAN
          </h3>
          <p className="italic font-semibold sm:text-base md:text-xl lg:text-2xl">
            « Plus on aide un enfant en difficulté, plus il est heureux.<br />
            Plus un enfant en difficulté est heureux, plus sa famille est
            heureuse.<br />
            Plus les familles d’enfants en difficulté sont heureuses, plus tous
            les intervenants sont heureux. »
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
