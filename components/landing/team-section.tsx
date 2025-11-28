"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  {
    name: "CLARA MONTI",
    role: "Fondatrice & CEO de MADO",
    description: "Stratégie, partenariats, communication...",
    photo: "/equipes/clara.svg",
    color: "green",
  },
  {
    name: "BASTIEN ANGELOZ",
    role: "CTO",
    description: "Développement et support de l’application. Analyse et traitement des données.",
    photo: "/equipes/bastien.svg",
    color: "pink",
  },
  {
    name: "GAYANÉ KELÉCHIAN",
    role: "Psychologue clinicienne et psychothérapeute",
    description: "Spécialisée en thérapies cognitives, comportementales et émotionnelles (TCCE).",
    photo: "/equipes/gaya.svg",
    color: "green",
  },
  {
    name: "DIANE DESWARTE",
    role: "Sexologue",
    description: "Création de contenus autour de la sexualité et de l’intimité.",
    photo: "/equipes/diane.svg",
    color: "pink",
  },
];

export function TeamSection() {
  return (
    <section className="bg-[#f6f3ed] py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[#046147] text-2xl md:text-3xl font-bold tracking-wide text-right mb-12 md:mb-16"
        >
          NOTRE ÉQUIPE
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-stretch">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col h-full"
            >
              {/* Photo */}
              <div className="aspect-square overflow-hidden">
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Texte dans un encadré coloré */}
              <div
                className={`p-3 md:p-4 flex-1 ${
                  member.color === "green"
                    ? "bg-[#046147] text-white"
                    : "bg-[#f2cce5] text-[#046147]"
                }`}
              >
                <h3 className={`font-bold text-sm md:text-base pb-2 border-b ${
                  member.color === "green" ? "border-white" : "border-[#046147]"
                }`}>
                  {member.name}
                </h3>
                <p className={`text-xs md:text-sm font-medium mt-1 ${
                  member.color === "green" ? "text-white/80" : "text-[#046147]/70"
                }`}>
                  {member.role}
                </p>
                <p className={`text-xs mt-2 leading-relaxed ${
                  member.color === "green" ? "text-white/70" : "text-[#046147]/60"
                }`}>
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
