import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import SEO from "../SEO";

const API_KEY = import.meta.env.VITE_API_KEY;
const CHANNEL_ID = import.meta.env.VITE_CHANNEL_ID;
const MAX_RESULTS = 12;
console.log(API_KEY, CHANNEL_ID);

// Cache la promesse de l'ouverture de la base de données
let dbPromise = null;

const openDB = (name, version) => {
  if (!dbPromise) {
    dbPromise = new Promise((resolve, reject) => {
      const request = indexedDB.open(name, version);

      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains('videos')) {
          db.createObjectStore('videos', { keyPath: 'token' });
        }
      };

      request.onsuccess = (event) => resolve(event.target.result);
      request.onerror = (event) => reject(event.target.error);
    });
  }
  return dbPromise;
};

const saveVideos = async (db, token, data) => {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction('videos', 'readwrite');
    const store = transaction.objectStore('videos');
    const request = store.put({ token, ...data });

    request.onsuccess = () => resolve();
    request.onerror = (event) => reject(event.target.error);
  });
};

const getVideos = async (db, token) => {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction('videos', 'readonly');
    const store = transaction.objectStore('videos');
    const request = store.get(token);

    request.onsuccess = (event) => resolve(event.target.result);
    request.onerror = (event) => reject(event.target.error);
  });
};

const NosFilms = () => {
  const storedPage = sessionStorage.getItem("currentPage");
  const storedPageToken = sessionStorage.getItem("pageToken");

  const [videos, setVideos] = useState([]);
  const [pageToken, setPageToken] = useState(storedPageToken || "");
  const [nextPageToken, setNextPageToken] = useState(null);
  const [prevPageToken, setPrevPageToken] = useState(null);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(storedPage ? parseInt(storedPage, 10) : 1);

  const fetchVideos = async (token = "", page = 1) => {
    const db = await openDB('youtubeCache', 1);

    const cachedData = await getVideos(db, token);
    if (cachedData) {
      setVideos(cachedData.items || []);
      setNextPageToken(cachedData.nextPageToken || null);
      setPrevPageToken(cachedData.prevPageToken || null);
      setTotalResults(cachedData.pageInfo?.totalResults || 0);
      setCurrentPage(page);
      setPageToken(token);
      sessionStorage.setItem("currentPage", page);
      sessionStorage.setItem("pageToken", token);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=${MAX_RESULTS}&order=date&type=video&key=${API_KEY}&pageToken=${token}`
      );
      const data = await response.json();
      await saveVideos(db, token, data);
      setVideos(data.items || []);
      setNextPageToken(data.nextPageToken || null);
      setPrevPageToken(data.prevPageToken || null);
      setTotalResults(data.pageInfo?.totalResults || 0);
      setCurrentPage(page);
      setPageToken(token);
      sessionStorage.setItem("currentPage", page);
      sessionStorage.setItem("pageToken", token);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error("Erreur lors de la récupération des vidéos :", error);
    }
  };

  useEffect(() => {
    fetchVideos(pageToken, currentPage);
  }, []);

  const totalPages = useMemo(() => Math.ceil(totalResults / MAX_RESULTS), [totalResults]);

  return (
    <section className="relative bg-white dark:bg-black min-h-screen py-12 px-6">
      {/* OPTIMISATION SEO */}
      <SEO 
      title="Films | SEED TV CINEMA" 
      description="Découvrez nos réalisations cinématographiques." 
      keywords="Films, Cinéma, Divertissement, Advertising, Education" 
      />
      {/* OPTIMISATION SEO */}
      
      <div className="absolute inset-0 bg-gradient-to-tl from-red-950 via-transparent to-blue-950 opacity-25 dark:opacity-75" aria-hidden="true"></div>
      <div className="max-w-6xl mx-auto text-center relative">
      <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
          className="text-4xl font-extrabold text-gray-750 dark:text-red-700 mb-12"
        >
          SEED TV CINEMA
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-6">
          {videos.map((video) => (
            <motion.div
              key={video.id.videoId}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }}
              className="bg-gray-100 dark:bg-gray-900 rounded-xl shadow-md overflow-hidden"
            >
              <iframe
                className="w-full h-52 md:h-40 lg:h-44"
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                title={video.snippet.title}
                allowFullScreen
              ></iframe>
              <div className="p-4">
                <h3 className="text-xs font-semibold text-gray-800 dark:text-white">{video.snippet.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-between items-center mt-8">
          <button
            className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
            disabled={!prevPageToken}
            onClick={() => fetchVideos(prevPageToken, currentPage - 1)}
          >
            ← Retour
          </button>
          <span className="text-white font-bold">{currentPage} / {totalPages}</span>
          <button
            className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
            disabled={!nextPageToken}
            onClick={() => fetchVideos(nextPageToken, currentPage + 1)}
          >
            Suivant →
          </button>
        </div>
      </div>
    </section>
  );
};

export default NosFilms;