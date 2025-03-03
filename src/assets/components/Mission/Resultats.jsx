import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaUserGraduate, FaComments, FaUsers, FaCheckCircle } from "react-icons/fa";
import Footer from "../footer/footer";
import SEO from '../SEO';

const resultats = [
  {
    titre: "Rehaussement de l’estime de soi",
    description: "Renforcer l’estime de soi des enfants en difficulté atteints d’une anomalie.",
    icone: FaHeart,
    couleur: "text-red-500"
  },
  {
    titre: "Développement de l’autonomie",
    description: "Permettre aux enfants en difficulté de gagner en indépendance.",
    icone: FaUserGraduate,
    couleur: "text-blue-500"
  },
  {
    titre: "Amélioration de la communication",
    description: "Faciliter l’expression et la communication des enfants en difficulté.",
    icone: FaComments,
    couleur: "text-green-500"
  },
  {
    titre: "Intégration sociale et professionnelle",
    description: "Favoriser l’inclusion des enfants en milieu social, scolaire et professionnel.",
    icone: FaUsers,
    couleur: "text-purple-500"
  },
  {
    titre: "Réussite scolaire et professionnelle",
    description: "Encourager la réussite personnelle, scolaire et professionnelle.",
    icone: FaCheckCircle,
    couleur: "text-yellow-500"
  }
];

const cardHover = {
  hover: { scale: 1.1, transition: { duration: 0.2 } },
};

const Resultats = () => {
  return (
    <>
      <section className="relative bg-white dark:bg-black min-h-screen py-12 px-6">
        {/* OPTIMISATION SEO */}
        <SEO 
          title="Résultats escomptés | ONG SEED" 
          description="Les résultats attendus par l'ONG SEED." 
          keywords="Résultats, Attentes, Améliorations, Changements positifs" 
        />
        
        {/* Gradient en arrière-plan */}
        <div
          className="absolute inset-0 bg-gradient-to-tr from-blue-950 via-transparent to-red-950 opacity-25 dark:opacity-75"
          aria-hidden="true"
        ></div>

        <div className="max-w-5xl mx-auto text-center relative">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:text-left xl:text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-teal-600 dark:text-blue-600 mb-12 uppercase"
          >
            Résultats escomptés
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-justify text-xl md:text-2xl lg:md:text-2xl xl:md:text-2xl text-gray-700 dark:text-gray-300 mb-14"
          >
            L'ONG SEED vise à atteindre cinq grands résultats pour améliorer la vie des enfants en difficulté.
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {resultats.map((resultat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
              className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 hover:scale-105 hover:shadow-xl transition-transform duration-300 text-center"
              whileHover="hover"
              variants={cardHover}
            >
              <resultat.icone className={`text-4xl mb-4 ${resultat.couleur}`} />
              <h3 className={`text-xl font-semibold mb-4 ${resultat.couleur}`}>{resultat.titre}</h3>
              <p className="text-gray-600 dark:text-gray-300">{resultat.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Resultats;
