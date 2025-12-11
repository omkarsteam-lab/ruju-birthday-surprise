import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import Musicc from './musicc2.mp3';
const Message = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center relative overflow-hidden p-4">

      {/* 🎵 Subtle Background Music */}
      <audio autoPlay loop volume={0.15}>
        <source src={Musicc} type="audio/mpeg" />
      </audio>

      {/* 💗 Slow Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-300/40"
            initial={{
              y: '110%',
              x: `${Math.random() * 100}%`,
              scale: Math.random() * 0.5 + 0.6,
              opacity: 0
            }}
            animate={{
              y: '-10%',
              opacity: [0, 0.4, 0.4, 0]
            }}
            transition={{
              duration: 28 + Math.random() * 10,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random() * 6
            }}
          >
            <Heart size={26} fill="currentColor" />
          </motion.div>
        ))}
      </div>

      {/* 💫 Message Card with Soft Pulse Glow */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: 1,
          y: 0,
          boxShadow: [
            '0 0 0px rgba(236,72,153,0.25)',
            '0 0 28px rgba(236,72,153,0.4)',
            '0 0 0px rgba(236,72,153,0.25)',
          ]
        }}
        transition={{
          opacity: { duration: 1.5 },
          y: { duration: 1.5 },
          boxShadow: {
            duration: 4.5,
            repeat: Infinity,
            ease: 'easeInOut'
          }
        }}
        className="relative max-w-2xl bg-white/80 backdrop-blur-sm p-8 rounded-2xl text-center"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Dear Ruju,
        </h1>

        <p className="text-lg text-gray-700 leading-loose mb-4">
          This distance between us is real — and so is what I feel for you.
        </p>

        <p className="text-lg text-gray-700 leading-loose mb-4">
          I may not be there beside you today, but my heart is with you in every quiet moment,
          every smile, every wish you make before blowing the candles.
        </p>

        <p className="text-lg text-gray-700 leading-loose mb-4">
          You came into my life unexpectedly, and somehow made it warmer,
          calmer, and more meaningful — even from miles away.
        </p>

        <p className="text-lg text-gray-700 leading-loose mb-4">
          I don’t promise perfection.
          <br />
          But I do promise effort, honesty, and choosing you — even on days when it’s hard.
        </p>

        <p className="text-lg text-gray-700 leading-loose mb-6">
          This is just a small expression of what you mean to me.
          <br />
          Not to impress you…
          <br />
          but to remind you that you matter.
        </p>

        <p className="text-xl font-semibold text-pink-600">
          Happy Birthday my World 🌎❤️.
        </p>
      </motion.div>
    </div>
  );
};

export default Message;
