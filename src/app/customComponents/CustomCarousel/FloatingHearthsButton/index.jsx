"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

let idCounter = 0;

export default function FloatingHeartsButton() {
  const [hearts, setHearts] = useState([]);

  const handleClick = () => {
    const newHearts = Array.from({ length: 10 }, () => ({
      id: idCounter++,
      x: Math.random() * 200 - 100, // -100 a 100 px para o lado
      y: Math.random() * -150 - 50, // -50 a -200 px para cima
      rotation: Math.random() * 360,
    }));

    setHearts((prev) => [...prev, ...newHearts]);

    setTimeout(() => {
      setHearts((prev) => prev.slice(newHearts.length));
    }, 10000);
  };

  return (
    <div className="w-full flex items-center justify-center flex-col">
      <Button onClick={handleClick} variant="secondary" className="w-28">
        Te amo ♥️
      </Button>
      <p className="brightness-40 pt-2">Botão clicável</p>

      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
            animate={{
              opacity: 0,
              x: heart.x,
              y: heart.y,
              rotate: heart.rotation,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute"
          >
            <Heart className="text-red-500 w-5 h-5" fill="currentColor" />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
