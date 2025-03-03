import React from "react";
import SEO from "../SEO";
import LivrePDF from "./LivrePDF";

const Histoire = () => {
  return (
    <>
      <section className="relative bg-white dark:bg-black min-h-screen">
        {/* OPTIMISATION SEO */}
        <SEO
          title="Notre histoire | ONG SEED"
          description="Découvrez nos 5 ans d'histoire."
          keywords="Histoire, 5 ans, Existence, Création, Initiative"
        />
        {/* Gradient en arrière-plan couvrant tout l'écran */}
        <div
          className="absolute inset-0 bg-gradient-to-tr from-blue-950 via-transparent to-red-950 opacity-25 dark:opacity-75"
          aria-hidden="true"></div>
        <div>
          <LivrePDF />
        </div>
      </section>
    </>
  );
};

export default Histoire;
