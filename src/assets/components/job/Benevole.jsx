import React from "react";
import { motion } from "framer-motion";
import Footer from "../footer/footer";
import SEO from "../SEO"
import Form from "../form/form";

const Partenariats = () => {
  const handleFormSubmit = (formData) => {
    console.log('Données validées et soumises :', formData);

    // Vous pouvez maintenant envoyer les données à une API ou les traiter
    fetch('http://localhost:3000/inscription', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Réponse de l\'API :', data);
      })
      .catch((error) => {
        console.error('Erreur lors de l\'envoi des données :', error);
      });
  };
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <>
      <section className="relative bg-white dark:bg-black min-h-screen py-12 px-6">
      <SEO 
      title="Partenariat | ONG SEED" 
      description="Devenez notre partenaire officiel et profitez de notre bande passante !" 
      keywords="Partenariat, Collaboration, Partenaire, Entraide" 
      />
      {/* Gradient en arrière-plan couvrant tout l'écran */}
      <div
  className="absolute inset-0 bg-gradient-to-tr from-blue-950 via-transparent to-red-950 opacity-25 dark:opacity-75 pointer-events-none"
  aria-hidden="true"
></div>

      <div className="max-w-4xl mx-auto text-center relative">
        {/* Titre avec animation */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={fadeIn}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-extrabold text-teal-600 dark:text-blue-600 mb-12 uppercase"
        >
          Devenir bénévole
        </motion.h2>
      </div>
      <div className="p-4">
      <Form onSubmit={handleFormSubmit}/>
    </div>
      </section>
      <Footer/>
      </>
  );
};

export default Partenariats;
