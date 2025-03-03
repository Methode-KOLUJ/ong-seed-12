import React from "react";
import Slider from "./Slider";
import About from "./About";
import Footer from "../footer/footer"
import PartenaireScroller from "./Partners";
import SEO from "../SEO"


const Accueil = () => {
  const slides = [
    {
      image: "/Home/ONG SEED.webp",
      title: "ONG SEED",
      description: "En souscrivant en tant que Partenaire, Donateur ou Bénévole; vous contribuez à la poursuite de la mission de l'ONG SEED !",
      cta: "DEVENEZ PARTENAIRE",
      link: "/partenaire",
    },
    {
      image: "/Home/BOUTIQUE.jpeg",
      title: "BOUTIQUE OFFICIELLE",
      description: "Les articles que vous achetez contribuent au financement des activités de prise en charge des enfants.",
      cta: "VISITER LA BOUTIQUE",
      link: "/Boutique",
    },
    {
      image: "/Home/Cinema.webp",
      title: "SEED TV CINEMA",
      description: "SEED TV Cinéma est une plateforme dédiée à nos productions cinématographiques, suivez nos réalisations sans frais payés !",
      cta: "SUIVRE NOS FILMS",
      link: "/YouTube",
    },
    {
      image: "/Home/YouTube.jpg",
      title: "CHAINES YOUTUBE",
      description: "Nous avons 4 chaînes YouTube principales traitant sur des thématiques diverses, un j'aime et/ou un abonnement serait une façon de nous soutenir gratuiement !",
      cta: "SUIVRE NOS CHAINES",
      link: "/YouTubes",
    },
  ];

  return (
    <>
      <div className="dark:bg-black">
      <SEO 
      title="Accueil | ONG SEED" 
      description="Bienvenue sur le site officiel de l'ONG SEED" 
      keywords="Accueil, Bienvenue, ONG SEED, Welcome" 
      />
      <div
        className="absolute inset-0 bg-gradient-to-tl from-blue-950 via-transparent to-red-950 opacity-50"
        aria-hidden="true"></div>
       <div className="bg-white lg:py-0 sm:py-0 md:py-0 flex items-center justify-center dark:bg-black">
      <Slider slides={slides} />
    </div>
        <div>
          <About />
        </div>
        <div>
          <PartenaireScroller/>
        </div>
        <div>
          <Footer/> 
        </div>
    </div>
    
     </> 
  );
};

export default Accueil;
