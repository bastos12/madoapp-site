"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const subscriptions = [
  {
    icon: "/abonnement/rencontre.svg",
    name: 'ABONNEMENT "RENCONTRE"',
    description: "(Accès à toutes les fonctionnalités)",
    prices: [
      { label: "", price: "21,99€ / mois", detail: "(sans engagement)" },
      { label: "", price: "49,99€ les 3 mois", detail: "(soit 16,5€ / mois)" },
      { label: "", price: "74,99€ les 6 mois", detail: "(soit 12,5€ / mois)" },
    ],
  },
  {
    icon: "/abonnement/coaching.svg",
    name: 'ABONNEMENT "COACHING"',
    description: "(Accès aux contenus des thérapeutes)",
    prices: [
      { label: "", price: "6,99€ / mois", detail: "(sans engagement)" },
      { label: "", price: "4,99€ / mois", detail: "(engagement annuel)" },
    ],
  },
];

export function PricingSection() {
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
          NOS ABONNEMENTS
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {subscriptions.map((sub, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              {/* Icône SVG */}
              <Image
                src={sub.icon}
                alt={sub.name}
                width={200}
                height={200}
                className="w-40 h-40 md:w-52 md:h-52 mb-8"
              />

              {/* Nom */}
              <h3 className="text-[#046147] font-bold text-base md:text-lg mb-1">
                {sub.name}
              </h3>
              <p className="text-[#046147]/70 text-sm mb-6">{sub.description}</p>

              {/* Prix */}
              <div className="space-y-2">
                {sub.prices.map((price, priceIdx) => (
                  <p key={priceIdx} className="text-[#046147] text-sm md:text-base">
                    <span className="font-semibold">{price.price}</span>{" "}
                    <span className="text-[#046147]/60">{price.detail}</span>
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
