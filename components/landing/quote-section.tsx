"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function QuoteSection() {
  return (
    <section className="bg-[#046147] py-12 md:py-20">
      <div className="flex flex-col md:flex-row items-center">
        {/* Image couple - collée à gauche */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 aspect-[4/3] overflow-hidden rounded-tr-3xl rounded-br-3xl"
        >
          <Image
            src="/citation/couple.svg"
            alt="Couple sur un bateau"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Citation */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-1/2 px-8 md:px-16 py-12 md:py-0"
        >
          <div>
            <span className="text-[#f2cce5] text-5xl md:text-7xl font-serif leading-none block -mb-4 md:-mb-6">&ldquo;</span>
            <p className="text-[#f6f3ed] text-lg md:text-xl leading-relaxed px-4">
              {"Dans un monde où l'amour semble devenu un bien de consommation, MADO vous invite à ralentir et à redécouvrir le plaisir des relations authentiques."}
            </p>
            <span className="text-[#f2cce5] text-5xl md:text-7xl font-serif leading-none block text-right -mt-4 md:-mt-6">&rdquo;</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
