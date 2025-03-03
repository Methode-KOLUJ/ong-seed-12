import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { z } from "zod";
import Codes from "./Code.json";

// Schéma de validation avec Zod
const schemaFormulaire = z.object({
  nom: z.string().min(1, "Le nom est requis"),
  telephone: z
    .string()
    .regex(/^[0-9]{9}$/, "Le numéro de téléphone doit contenir 9 chiffres"),
  codePays: z.string().min(1, "L'indicatif pays est requis"),
  email: z.string().email("Veuillez entrer une adresse email valide"),
  role: z.string().min(1, "Veuillez sélectionner un rôle"),
  message: z
    .string()
    .min(50, "Votre description doit avoir au moins 50 lettres"),
});

const Formulaire = ({ onSubmit, className = "" }) => {
  const [donneesFormulaire, setDonneesFormulaire] = useState({
    nom: "",
    telephone: "",
    codePays: "+243", 
    email: "",
    role: "",
    message: "",
  });

  const [erreurs, setErreurs] = useState({});
  const [message, setMessage] = useState({ texte: "", type: "" });
  const [enCoursEnvoi, setEnCoursEnvoi] = useState(false);

  useEffect(() => {
    if (message.texte) {
      const timer = setTimeout(() => {
        setMessage({ texte: "", type: "" });
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const gererChangement = (e) => {
    const { name, value } = e.target;
    setDonneesFormulaire((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (erreurs[name]) {
      setErreurs((prevErreurs) => ({
        ...prevErreurs,
        [name]: "",
      }));
    }
  };

  const gererSoumission = (e) => {
    e.preventDefault();
    setEnCoursEnvoi(true);

    try {
      schemaFormulaire.parse(donneesFormulaire);
      const telephoneComplet = `${donneesFormulaire.codePays}${donneesFormulaire.telephone}`;
      onSubmit({ ...donneesFormulaire, telephone: telephoneComplet });
      setMessage({ texte: "Formulaire soumis avec succès !", type: "success" });
      setDonneesFormulaire({
        nom: "",
        telephone: "",
        codePays: "+243",
        email: "",
        role: "",
        message: "",
      });
      setErreurs({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const nouvellesErreurs = {};
        error.errors.forEach((err) => {
          nouvellesErreurs[err.path[0]] = err.message;
        });
        setErreurs(nouvellesErreurs);
        setMessage({
          texte: "Veuillez corriger les erreurs avant de soumettre.",
          type: "error",
        });
      }
    } finally {
      setEnCoursEnvoi(false);
    }
  };

  return (
    <>
      <form
        onSubmit={gererSoumission}
        className={`max-w-3xl mx-auto p-4 space-y-4 ${className}`}>
        {/* Champ Nom */}
        <div>
          <label
            htmlFor="nom"
            className="block text-xl font-medium text-gray-700 dark:text-white">
            Nom complet ou d'Entreprise
          </label>
          <input
            type="text"
            name="nom"
            id="nom"
            value={donneesFormulaire.nom}
            onChange={gererChangement}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
          {erreurs.nom && (
            <p className="text-red-500 text-sm mt-1">{erreurs.nom}</p>
          )}
        </div>

        {/* Champ Téléphone */}
        <div>
          <label
            htmlFor="telephone"
            className="block text-xl font-medium text-gray-700 dark:text-white">
            Téléphone
          </label>
          <div className="flex gap-2">
            <select
              name="codePays"
              value={donneesFormulaire.codePays}
              onChange={gererChangement}
              className="mt-1 block w-1/4 px-3 py-2 border border-gray-300 rounded-md shadow-sm">
              {Codes.map((pays) => (
                <option key={pays.code} value={pays.code}>
                  {pays.nom} ({pays.code})
                </option>
              ))}
            </select>
            <input
              type="tel"
              name="telephone"
              id="telephone"
              value={donneesFormulaire.telephone}
              onChange={gererChangement}
              className="mt-1 block w-3/4 px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          {erreurs.telephone && (
            <p className="text-red-500 text-sm mt-1">{erreurs.telephone}</p>
          )}
        </div>

        {/* Champ Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-xl font-medium text-gray-700 dark:text-white">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={donneesFormulaire.email}
            onChange={gererChangement}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
          {erreurs.email && (
            <p className="text-red-500 text-sm mt-1">{erreurs.email}</p>
          )}
        </div>

        {/* Champ Rôle */}
        <div>
          <label
            htmlFor="role"
            className="block text-xl font-medium text-gray-700 dark:text-white">
            Qui voulez-vous devenir ?
          </label>
          <select
            name="role"
            id="role"
            value={donneesFormulaire.role}
            onChange={gererChangement}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            required>
            <option value="">Sélectionnez une option</option>
            <option value="partenaire">Partenaire de l'ONG SEED</option>
            <option value="benevole">Bénévole au sein de SEED</option>
          </select>
          {erreurs.role && (
            <p className="text-red-500 text-sm mt-1">{erreurs.role}</p>
          )}
        </div>

        {/* Champ Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-xl font-medium text-gray-700 dark:text-white">
            Parlez-nous de vous en détails !
          </label>
          <textarea
            name="message"
            id="message"
            value={donneesFormulaire.message}
            onChange={gererChangement}
            rows="5"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm resize-none"
            required></textarea>
          {erreurs.message && (
            <p className="text-red-500 text-sm mt-1">{erreurs.message}</p>
          )}
        </div>
        {/* Bouton de soumission */}
        <div>
          <button
            type="submit"
            disabled={enCoursEnvoi}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-xl font-medium text-white bg-blue-700 hover:bg-blue-800">
            {enCoursEnvoi ? "Envoi en cours..." : "ENVOYER"}
          </button>
        </div>
      </form>

      {/* Modale pour les messages */}
      {message.texte && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div
            className={`p-6 rounded-lg shadow-lg ${
              message.type === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}>
            <p className="text-lg font-semibold">{message.texte}</p>
          </div>
        </div>
      )}
    </>
  );
};

Formulaire.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  className: PropTypes.string,
};
export default Formulaire;
