"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative w-full aspect-video overflow-hidden">
      {/* Vidéo en background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero/hero.mp4" type="video/mp4" />
      </video>

      {/* Header desktop avec logo au centre et badges à droite */}
      <header className="hidden md:flex relative z-20 items-center justify-between px-12 py-6">
        {/* Espace vide à gauche pour équilibrer */}
        <div className="w-40" />

        {/* Logo au centre */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2">
          <Image
            src="/hero/logo-rose.png"
            alt="Mado logo"
            width={200}
            height={70}
            className="h-20 w-auto"
          />
        </Link>

        {/* Boutons téléchargement à droite */}
        <div className="flex items-center space-x-5">
          <Link href="https://apps.apple.com/fr/app/mado-app-de-rencontre/id6747421904">
            <Image
              src="/hero/app-store.png"
              alt="Disponible sur l'App Store"
              width={280}
              height={84}
              className="h-24 w-auto hover:opacity-80 transition-opacity"
            />
          </Link>
          <Link href="https://play.google.com/store/apps/details?id=com.madoapp.mado">
            <Image
              src="/hero/play-store.png"
              alt="Disponible sur Google Play"
              width={280}
              height={84}
              className="h-24 w-auto hover:opacity-80 transition-opacity"
            />
          </Link>
        </div>
      </header>

      {/* Mobile : Logo en haut centré */}
      <div className="md:hidden relative z-20 flex justify-center pt-4">
        <Link href="/">
          <Image
            src="/hero/logo-rose.png"
            alt="Mado logo"
            width={150}
            height={50}
            className="h-10 w-auto"
          />
        </Link>
      </div>

      {/* Mobile : Boutons téléchargement au centre */}
      <div className="md:hidden relative z-20 flex flex-row items-center justify-center flex-1 gap-3 px-4 py-0 lg:py-6">
        <Link href="https://apps.apple.com/fr/app/mado-app-de-rencontre/id6747421904">
          <Image
            src="/hero/app-store.png"
            alt="Disponible sur l'App Store"
            width={250}
            height={75}
            className="h-14 w-auto hover:opacity-80 transition-opacity"
          />
        </Link>
        <Link href="https://play.google.com/store/apps/details?id=com.madoapp.mado">
          <Image
            src="/hero/play-store.png"
            alt="Disponible sur Google Play"
            width={250}
            height={75}
            className="h-14 w-auto hover:opacity-80 transition-opacity"
          />
        </Link>
      </div>

      {/* Texte en bas à gauche */}
      <div className="absolute bottom-4 left-4 md:bottom-12 md:left-12 z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#f6f3ed] text-xs sm:text-base md:text-2xl font-bold leading-relaxed text-left max-w-xs sm:max-w-md md:max-w-none"
        >
          <span className="md:whitespace-nowrap">{"L'application qui vous accompagne dans la construction"}</span>
          <br className="hidden md:block" />
          <span className="md:hidden"> </span>
          <span className="md:whitespace-nowrap">{"d'un amour vrai, sincère et durable."}</span>
        </motion.p>
      </div>
    </section>
  );
}
