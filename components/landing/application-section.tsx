"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    icon: "/features/protection.svg",
    title: "Une vérification d'identité",
    subtitle: "afin d'éviter les faux profils",
  },
  {
    icon: "/features/logo.svg",
    title: "3 profils par jour les plus",
    subtitle: "compatibles avec vous.",
  },
  {
    icon: "/features/questionnaire.svg",
    title: "Un questionnaire de compatibilité",
    subtitle: "de + de 100 questions.",
  },
  {
    icon: "/features/audio.svg",
    title: "Des contenus audio conçus par",
    subtitle: "nos thérapeutes partenaires.",
  },
];

export function ApplicationSection() {
  return (
    <section className="bg-[#f6f3ed] py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[#046147] text-2xl md:text-3xl font-bold tracking-wide text-left mb-12 md:mb-16"
        >
          NOTRE APPLICATION
        </motion.h2>

        {/* Layout desktop : 1/4 - 1/2 - 1/4 */}
        <div className="hidden md:flex items-start gap-6">
          {/* Colonne gauche - 1/4 */}
          <div className="w-1/4 space-y-16 pt-12">
            {features.slice(0, 2).map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center gap-4"
              >
                <Image src={feature.icon} alt={feature.title} width={64} height={64} />
                <div>
                  <p className="text-[#046147] text-base font-semibold">
                    {feature.title}
                  </p>
                  <p className="text-[#046147]/70 text-base">{feature.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Phone au centre - 1/2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-1/2 flex justify-center"
          >
            <div className="w-80 lg:w-96">
              <Image
                src="/screen_app/screen.svg"
                alt="Screenshot de l'application Mado"
                width={400}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Colonne droite - 1/4 */}
          <div className="w-1/4 space-y-16 pt-12">
            {features.slice(2, 4).map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center gap-4"
              >
                <Image src={feature.icon} alt={feature.title} width={64} height={64} />
                <div>
                  <p className="text-[#046147] text-base font-semibold">
                    {feature.title}
                  </p>
                  <p className="text-[#046147]/70 text-base">{feature.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Layout mobile : Phone en haut, puis features en grid 2x2 */}
        <div className="md:hidden flex flex-col items-center gap-10">
          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-56"
          >
            <Image
              src="/screen_app/screen.svg"
              alt="Screenshot de l'application Mado"
              width={256}
              height={540}
              className="w-full h-auto"
            />
          </motion.div>

          {/* Features en grid 2x2 */}
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center gap-3"
              >
                <Image src={feature.icon} alt={feature.title} width={48} height={48} />
                <div>
                  <p className="text-[#046147] text-sm font-semibold leading-tight">
                    {feature.title}
                  </p>
                  <p className="text-[#046147]/70 text-sm">{feature.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
