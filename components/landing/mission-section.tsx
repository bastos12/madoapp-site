"use client";

import React from "react";
import { motion } from "framer-motion";

export function MissionSection() {
  return (
    <section className="bg-[#f6f3ed] py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[#046147] text-2xl md:text-3xl font-bold tracking-wide text-left mb-8"
        >
          NOTRE MISSION
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6 text-[#046147] text-base md:text-lg leading-relaxed text-left"
        >
          <p>
            Chez MADO, notre mission est simple :{" "}
            <strong>vous accompagner vers une relation saine et durable.</strong>
          </p>

          <p>
            Pas de swipes sans fin, pas de faux profils, pas de conversations superficielles, juste
            des <strong>échanges sincères</strong> avec des personnes qui, comme vous, recherchent{" "}
            <strong>une histoire qui a du sens.</strong>
          </p>

          <p>
            {"Chez MADO, on croit aux "}<strong>vraies rencontres</strong>{", à celles qui se construisent sur la base du "}
            <strong>respect</strong>{", de la "}<strong>confiance</strong>{" et d'une réelle "}<strong>compatibilité</strong>.
          </p>

          <p>
            Ici tout commence par des <strong>questions</strong>, celles qui comptent, celles qui permettent de
            savoir si vous êtes vraiment fait pour vous entendre, celles qui évitent les relations
            bancales et les déceptions inutiles.
          </p>

          <p className="font-semibold">
            Moins de profils. Plus de compatibilité.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
