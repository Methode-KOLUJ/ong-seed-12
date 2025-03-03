import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './assets/components/Navbar/Navbar';
import ThemeSwitcher from './assets/components/Thème';
import ScrollToTop from './assets/components/ScrollTop/ScrollTop';

// Importez vos composants de page ici
import Accueil from './assets/components/home/Accueil';
import Chatbot from './assets/components/bot/Chatbot';
import YoutubeLinks from './assets/components/NosChaines/YouTubes';
import NosFilms from './assets/components/Films/YouTube';
import AideAuxAinés from './assets/components/services/seniors';
import Mentale from './assets/components/services/sante-mentale';
import AideEducative from './assets/components/services/aide-educative';
import AideSoutien from './assets/components/services/aide-soutien';
import ServiceMedia from './assets/components/services/medias';
import NosValeurs from './assets/components/Mission/nos-valeurs';
import NosProjets from './assets/components/Mission/nos-projets';
import NotreVision from './assets/components/Mission/notre-vision';
import Resultats from './assets/components/Mission/Resultats';
import Histoire from './assets/components/history/notre-histoire';
import Partenariats from './assets/components/partenariats/partenaire';
import Emplois from './assets/components/job/emplois';
import Benevolat from './assets/components/job/Benevole';
import Boutique from './assets/components/Errors/Boutique';
import AddPartners from './assets/components/home/AddPartners';

const App = () => {
  return (
    <Router>
      <MainApp />
    </Router>
  );
};

const MainApp = () => {
  const location = useLocation(); // Maintenant, on peut utiliser useLocation ici sans erreur
  const hideNavbarRoutes = ["/Chatbot"];
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <div id='afterNav'>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/YouTubes" element={<YoutubeLinks />} />
          <Route path="/YouTube" element={<NosFilms />} />
          <Route path="/Chatbot" element={<Chatbot />} />
          <Route path="/seniors" element={<AideAuxAinés />} />
          <Route path="/sante-mentale" element={<Mentale />} />
          <Route path="/aide-educative" element={<AideEducative />} />
          <Route path="/aide-soutien" element={<AideSoutien />} />
          <Route path="/medias" element={<ServiceMedia />} />
          <Route path="/nos-valeurs" element={<NosValeurs />} />
          <Route path="/nos-projets" element={<NosProjets />} />
          <Route path="/notre-vision" element={<NotreVision />} />
          <Route path="/Resultats" element={<Resultats />} />
          <Route path="/notre-histoire" element={<Histoire />} />
          <Route path="/partenaire" element={<Partenariats />} />
          <Route path="/emplois" element={<Emplois />} />
          <Route path="/Benevole" element={<Benevolat />} />
          <Route path="/Boutique" element={<Boutique />} />
          <Route path="/AddPartners" element={<AddPartners />} />
        </Routes>
      </div>
      <div className="h-screen w-screen fixed z-50">
        <ThemeSwitcher />
      </div>
    </>
  );
};

export default App;
