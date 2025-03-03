import React, { useState, useRef, useEffect } from "react";
import { FaPaperPlane, FaComments } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../SEO";

const Card = ({ children, className = "" }) => (
  <div className={`bg-white shadow-md rounded-lg border-2 border-teal-700 dark:border-blue-500 ${className}`}>
    {children}
  </div>
);

const Input = ({ className = "", ...props }) => (
  <input
    {...props}
    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${className}`}
  />
);

const Button = ({ children, className = "", ...props }) => (
  <button
    {...props}
    className={`px-4 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 ${className}`}
  >
    {children}
  </button>
);

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { type: "bot", text: "Bonjour ! Vous avez besoin des renseignements supplémentaires sur l'ONG SEED ?", displayedText: "" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    if (lastMessage.type === "bot" && lastMessage.displayedText.length < lastMessage.text.length) {
      const timer = setTimeout(() => {
        setMessages((prev) => {
          const newMessages = [...prev];
          const lastMsg = newMessages[newMessages.length - 1];
          lastMsg.displayedText = lastMessage.text.substring(0, lastMsg.displayedText.length + 1);
          return newMessages;
        });
      }, 50); // Ajustez la vitesse de frappe ici

      return () => clearTimeout(timer);
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { type: "user", text: input, displayedText: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://seed-backend-pcka.onrender.com/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      
      const data = await response.json();
      setMessages((prev) => [...prev, { type: "bot", text: data.reply, displayedText: "" }]);
    } catch (error) {
      console.error("Erreur lors de la communication avec l'API", error);
      setMessages((prev) => [...prev, { type: "bot", text: "Une erreur s'est produite. Veuillez réessayer.", displayedText: "" }]);
    }
    
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-full relative p-4">
      <SEO 
        title="ChatBot | ONG SEED" 
        description="Echangez avec notre ChatBot pour en savoir plus sur notre ONG." 
        keywords="ONG SEED, ChatBot, Informations, Intelligence artificielle, IA" 
      />

      <Link to="/" className="fixed top-2 right-2 px-4 py-2 bg-red-600 text-white font-bold rounded-lg shadow-lg hover:bg-red-700 z-50">
        X
      </Link>

      <div className="flex flex-col items-center justify-center w-full h-full">
        <Card className="w-full max-w-6xl h-[90vh] max-h-[650px] flex flex-col shadow-2xl rounded-2xl dark:bg-gray-900 dark:text-white overflow-hidden self-center">
          <div className="flex items-center justify-between border-b p-4">
            <div className="flex items-center space-x-2">
              <FaComments className="text-blue-600 dark:text-teal-600" size={24} />
              <h1 className="text-xl font-bold">SEED Chatbot</h1>
            </div>
          </div>

          <div className="flex-1 space-y-3 p-4 overflow-y-auto">
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`flex ${message.type === "bot" ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`${
                    message.type === "bot" ? "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-white" : "bg-blue-600 text-white"
                  } p-3 rounded-2xl max-w-[75%] shadow-md break-words`}
                >
                  {message.type === "bot" ? message.displayedText : message.text}
                </div>
              </motion.div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="flex items-center space-x-2 p-4 dark:text-black">
            <Input
              className="flex-1"
              placeholder="Écrivez un message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              disabled={loading}
            />
            <Button onClick={handleSendMessage} className="bg-teal-600" disabled={loading}>
              {loading ? "..." : <FaPaperPlane className="w-5 h-5" />}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Chatbot;
