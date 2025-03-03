import React from "react";
import { FaYoutube } from "react-icons/fa";
import Footer from "../footer/footer";

const channels = [
  { name: "ONG SEED TV", url: "https://www.youtube.com/@ONGSEEDTVEDUCATIVE" },
  {
    name: "SEED TV CINEMA",
    url: "https://www.youtube.com/@SEEDTVCINEMAFran%C3%A7ais",
  },
  {
    name: "SEED LES VRAIS ADORATEURS TV",
    url: "https://www.youtube.com/@SVATV%C3%89VANG%C3%89LIQUE",
  },
  { name: "3 SAVOIRS TV", url: "https://www.youtube.com/@3savoirstv" },
];

const YoutubeLinks = () => {
  return (
    <div className="flex flex-col  bg-white dark:bg-black">
      {/* Section principale avec une hauteur ajustée */}
      <div className="h-screen relative flex items-center justify-center py-20 md:py-32">
        <div
          className="absolute inset-0 bg-gradient-to-tr from-blue-950 via-transparent to-red-950 opacity-25 dark:opacity-75"
          aria-hidden="true"></div>
        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-8 w-full px-6 md:px-20">
          {channels.map((channel, index) => (
            <a
              key={index}
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group">
              <div className="rounded-full border-4 bg-gray-100 hover:bg-white border-red-700 hover:border-red-600 p-8 md:p-12 shadow-lg transition-transform transform group-hover:scale-110 dark:shadow-gray-700">
                <FaYoutube size={60} className="text-red-700 hover:text-red-600" />
              </div>
              <span className="mt-4 text-base md:text-lg text-gray-700 dark:text-gray-300 text-center font-semibold">
                {channel.name}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default YoutubeLinks;
