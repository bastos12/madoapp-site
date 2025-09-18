import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Logo } from "./logo";

export function Footer() {
  const pages = [
    {
      title: "Accueil",
      href: "/",
    },
    {
      title: "Fonctionnalités",
      href: "/#features",
    },
    // {
    //   title: "Prix",
    //   href: "/#pricing",
    // },
    // {
    //   title: "Témoignages",
    //   href: "/#contact",
    // },
    // {
    //   title: "Images",
    //   href: "/#view",
    // },
  ];

  const socials = [
    // {
    //   title: "Facebook",
    //   href: "https://www.facebook.com/profile.php?id=61558150144865#",
    // },
    {
      title: "Instagram",
      href: "https://www.instagram.com/mado_app",
    },
    // {
    //   title: "LinkedIn",
    //   href: "https://www.linkedin.com/company/formafoot-formations/",
    // },
    // {
    //   title: "Site internet",
    //   href: "https://www.formafoot.fr",
    // },
  ];
  const legals = [
    {
      title: "Politique de confidentialité",
      href: "/privacy/politique",
    },
    {
      title: "Conditions générales d'utilisation",
      href: "/privacy/cgu",
    },
    {
      title: "Conditions générales de vente",
      href: "/privacy/cgv",
    },
      {
        title: "Droit des mineurs",
        href: "/privacy/safe",
      },
      {
        title: "Support",
        href: "/support",
      },
  ];

  const signups = [
    {
      title: "Créer un compte",
      href: "https://www.formafoot.fr/signup?saas=true",
      target: "_blank",
    },
    {
      title: "Connexion",
      href: "https://app.formafoot.fr",
      target: "_blank",
    },
    {
      title: "Nous écrire",
      href: "mailto:contact@formafoot.fr",
    },
  ];
  return (
    <div className="border-t border-neutral-100 dark:border-white/[0.1] px-8 py-20 bg-white dark:bg-[#f7cbe5] w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-sm text-neutral-500 flex sm:flex-row flex-col justify-between items-start  md:px-8">
        <div>
          <div className="mr-0 md:mr-4 md:flex mb-4 space-x-2 items-center">
          <Image
            src="/icon_app.png"
            alt="logo"
            width={30}
            height={30}
            className="rounded-full"
          />
            <span className="font-medium text-black dark:text-neutral-900">Mado</span>
          </div>

          <div className="mt-2 lg:ml-2 text-neutral-900 dark:text-neutral-900">
            &copy; copyright Mado {new Date().getFullYear()}. Tout droit réservé.
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 items-start mt-10 sm:mt-0 md:mt-0">
          <div className="flex justify-center space-y-4 flex-col w-full">
            <p className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-900 font-bold">
              Navigation
            </p>
            <ul className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 list-none space-y-4">
              {pages.map((page, idx) => (
                <li key={"pages" + idx} className="list-none">
                  <Link
                    className="transition-colors hover:text-text-neutral-800 dark:text-zinc-800"
                    href={page.href}
                  >
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center space-y-4 flex-col">
            <p className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-900 font-bold">
              Réseaux sociaux
            </p>
            <ul className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-900 list-none space-y-4">
              {socials.map((social, idx) => (
                <li key={"social" + idx} className="list-none">
                  <Link
                    className="transition-colors hover:text-text-neutral-800 dark:text-zinc-800"
                    href={social.href}
                    target="_blank"
                  >
                    {social.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center space-y-4 flex-col">
            <p className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-900 font-bold">
              Mentions légales
            </p>
            <ul className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-900 list-none space-y-4">
              {legals.map((legal, idx) => (
                <li key={"legal" + idx} className="list-none">
                  <Link
                    className="transition-colors hover:text-text-neutral-800 dark:text-zinc-800 hover:cursor-pointer"
                    href={legal.href}
                  >
                    {legal.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center space-y-4 flex-col">
            <p className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-900 font-bold">
              Téléchargement
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/#" className="transition-colors hover:text-text-neutral-800 dark:text-zinc-800 hover:cursor-pointer">
                <Image src="/app-store-badge.svg" alt="App Store" width={135} height={40} />
              </Link>
              <Link href="/#" className="transition-colors hover:text-text-neutral-800 dark:text-zinc-800 hover:cursor-pointer">
                <Image src="/google-play-badge.svg" alt="Google Play" width={135} height={40} />
              </Link>
            </div>
          </div>
          {/* <div className="flex justify-center space-y-4 flex-col">
            <p className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-900 font-bold">
              Comptes
            </p>
            <ul className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 list-none space-y-4">
              {signups.map((auth, idx) => (
                <li key={"auth" + idx} className="list-none">
                  <Link
                    className="transition-colors hover:text-text-neutral-800 dark:text-zinc-800"
                    href={auth.href}
                    target={auth.target}
                  >
                    {auth.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
}
