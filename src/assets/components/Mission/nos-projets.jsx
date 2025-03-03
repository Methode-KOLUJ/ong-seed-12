import React from "react";
import { motion } from "framer-motion";
import { FaYoutube, FaGlobe, FaSchool, FaHospital, FaLeaf, FaStore, FaNewspaper, FaUsers } from "react-icons/fa";
import Footer from "../footer/footer";
import SEO from '../SEO'

const projets = [
  {
    categorie: "En premier lieu",
    titre: "Projets à court terme",
    description: "Ouverture de chaînes YouTube, ouverture des réseaux sociaux, rédaction des magazines, descente et visite sur terrain.",
    icones: [FaYoutube, FaNewspaper, FaUsers],
    couleur: "text-red-500"
  },
  {
    categorie: "En deuxième lieu",
    titre: "Projets à moyen terme",
    description: "Création des sites internet, création des plateformes de streaming, lancement de boutique en présentiel, lancement des projets agricoles.",
    icones: [FaGlobe, FaStore, FaLeaf],
    couleur: "text-blue-500"
  },
  {
    categorie: "En dernier lieu",
    titre: "Projets à long terme",
    description: "Construction d’une école d’enseignement personnalisé, lancement d’un centre hospitalier, centre agro-éducatif et centre de formation des jeunes en difficulté atteints d’une anomalie.",
    icones: [FaSchool, FaHospital, FaLeaf],
    couleur: "text-green-500"
  }
];
const cardHover = {
  hover: { scale: 1.1, transition: { duration: 0.2 } },
};

const NosProjets = () => {
  return (
    <>
      <section className="relative bg-white dark:bg-black min-h-screen py-12 px-6">
        {/* OPTIMISATION SEO */}
        <SEO 
          title="Nos projets | ONG SEED" 
          description="Les projets caritatifs de l'ONG SEED." 
          keywords="Projets, Aide, Améliorations, Entreprises, Progression" 
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
            Nos Projets
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-base sm:text-xl md:text-2xl xl:text-2xl text-justify text-gray-700 dark:text-gray-300 mb-16"
          >
            L'organisation non gouvernementale Sauvons l'Enfance en Difficulté (SEED) divise son projet social en trois axes majeurs pour répondre aux défis sociaux et éducatifs en République Démocratique du Congo.
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {projets.map((projet, index) => (
            <div key={index} className="text-center">
              <h4 className="text-xl font-extrabold text-black/50 dark:text-white/50 mb-4 uppercase">{projet.categorie}</h4>
              <motion.div 
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
                className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 hover:scale-105 hover:shadow-xl transition-transform duration-300"
                whileHover="hover"
                variants={cardHover}
              >
                <h3 className={`text-xl font-bold mb-4 ${projet.couleur}`}>{projet.titre}</h3>
                <p className="text-gray-600 dark:text-gray-300">{projet.description}</p>
                <div className="flex justify-center mt-4 space-x-3">
                  {projet.icones.map((Icon, i) => (
                    <Icon key={i} className={`text-3xl ${projet.couleur}`} />
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default NosProjets;
