import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "ONG SEED",
  description = "Bienvenue sur le site officiel de l'ONG SEED.",
  keywords = "ONG, SEED, ENFANT, PRISE EN CHARGE",
  image = "/Home/ONG SEED.jpg",
  url = "https://www.ong-seed.com",
}) => {
  // Vérifie si `keywords` est fourni et non vide, sinon utilise la valeur par défaut
  const metaKeywords = keywords.trim() !== "" ? keywords : "ONG, SEED, ENFANT, PRISE EN CHARGE, ASSISTANCE";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
