import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Heart, Sparkles } from 'lucide-react';

const messages = [
  { text: "Hey Ruju… just pause for a second and read this slowly.", delay: 4000 },
  { text: "Today is your birthday, but this isn’t just about a date on the calendar.", delay: 7000 },
  { text: "It’s about you — someone who somehow became my home, even from miles away.", delay: 8000 },
  { text: "Long distance isn’t easy. Some days I miss you more than I know how to say.", delay: 8500 },
  { text: "I miss your voice, your presence, the comfort of knowing you’re right there.", delay: 9000 },
  { text: "But even with the distance… choosing you has never felt like a mistake. (And I mean it)", delay: 9500 },
  { text: "You matter to me more than convenience, more than comfort, more than logic.", delay: 9500 },
  { text: "I’m proud of you — for who you are, for how strong you are, for not giving up.", delay: 9000 },
  { text: "And even on days when we’re apart… my heart still reaches for you first.", delay: 9500 },
  { text: "So I made this… not because it’s perfect, but because you are worth the effort.", delay: 9000 },
  { text: "Will you let me show you what’s next?", delay: 5000 }
];

const BirthdayGreeting = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [showButtons, setShowButtons] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
  if (currentMessageIndex < messages.length) {
    const timer = setTimeout(() => {
      if (currentMessageIndex === messages.length - 1) {
        setShowButtons(true);
      } else {
        setCurrentMessageIndex((prev) => prev + 1);
      }
    }, messages[currentMessageIndex].delay);

    return () => clearTimeout(timer);
  }
}, [currentMessageIndex]);

  const handleButtonClick = () => {
    setShowButtons(false);
    setShowFinalMessage(true);
    setTimeout(() => {
      navigate('/surprise');
    }, 7000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ y: '100vh', x: Math.random() * 100 + 'vw' }}
            animate={{
              y: '-10vh',
              x: Math.random() * 100 + 'vw',
              rotate: 360
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'linear'
            }}
          >
            <Heart className="text-pink-300" size={24} />
          </motion.div>
        ))}
      </div>

      <div className="max-w-2xl w-full mx-4">
        <AnimatePresence mode="wait">
          {!showFinalMessage ? (
            <motion.div
              key="message"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl text-center"
            >
              <Sparkles className="inline-block text-yellow-400 mb-4" size={32} />
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentMessageIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                  className="text-2xl font-semibold text-gray-800 mb-6"
                >
                  {messages[currentMessageIndex].text}
                </motion.p>
              </AnimatePresence>

              {showButtons && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  className="space-x-4"
                >
                  <button
                    onClick={handleButtonClick}
                    className="px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transform hover:scale-105 transition-all"
                  >
                    Yes!
                  </button>
                  <button
                    onClick={handleButtonClick}
                    className="px-6 py-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transform hover:scale-105 transition-all"
                  >
                    No
                  </button>
                </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="final"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl text-center"
            >
              <p className="text-2xl font-semibold text-gray-800">
                Have a look at it, Chinguli ♡
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BirthdayGreeting;
