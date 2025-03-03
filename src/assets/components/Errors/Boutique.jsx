import { Link } from "react-router-dom";

const Erreur = () => {
  return (
    <div className="flex bg-gray-100 dark:bg-gray-950 flex-col items-center justify-center min-h-screen p-6 text-center">
      <h1 className="text-5xl xl:text-7xl font-bold text-red-600 uppercase">Momentanément indisponible</h1>
      <p className="text-xl text-black dark:text-white mt-4">Nous sommes désolés, ce service n'est pas disponible pour le moment.</p>
      <div className="mt-6 flex space-x-4">
        <button 
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          onClick={() => window.location.reload()}
        >
          Réessayer
        </button>
        <Link 
          to="/"
          className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
        >
          Quitter
        </Link>
      </div>
    </div>
  );
};

export default Erreur;
