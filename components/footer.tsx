import Image from "next/image";
import Link from "next/link";
import React from "react";

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
  ];

  const socials = [
    {
      title: "Instagram",
      href: "https://www.instagram.com/mado_app",
    },
    {
      title: "Facebook",
      href: "https://www.facebook.com/p/Mado-rencontrez-vous-61573696675480/",
    },
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

  return (
    <div className="border-t border-[#f5f0e8]/20 px-8 py-20 bg-[#016145] w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-sm text-[#f5f0e8] flex sm:flex-row flex-col justify-between items-start md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-6 items-start mt-10 sm:mt-0 md:mt-0">
        <div className="text-left">
          <div className="flex mb-4 space-x-2 items-center">
            <Image
              src="/icon_app.png"
              alt="logo"
              width={30}
              height={30}
              className="rounded-full"
            />
            <span className="font-medium text-[#f5f0e8]">Mado</span>
          </div>

          <div className="mt-2 text-[#f5f0e8]/80">
            &copy; copyright Mado {new Date().getFullYear()}. Tout droit réservé.
          </div>
        </div>
          <div className="flex justify-center space-y-4 flex-col w-full">
            <p className="text-[#f5f0e8] font-bold">
              Navigation
            </p>
            <ul className="list-none space-y-4">
              {pages.map((page, idx) => (
                <li key={"pages" + idx} className="list-none">
                  <Link
                    className="text-[#f5f0e8]/80 hover:text-[#f5f0e8] transition-colors"
                    href={page.href}
                  >
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center space-y-4 flex-col">
            <p className="text-[#f5f0e8] font-bold">
              Réseaux sociaux
            </p>
            <ul className="list-none space-y-4">
              {socials.map((social, idx) => (
                <li key={"social" + idx} className="list-none">
                  <Link
                    className="text-[#f5f0e8]/80 hover:text-[#f5f0e8] transition-colors"
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
            <p className="text-[#f5f0e8] font-bold">
              Mentions légales
            </p>
            <ul className="list-none space-y-4">
              {legals.map((legal, idx) => (
                <li key={"legal" + idx} className="list-none">
                  <Link
                    className="text-[#f5f0e8]/80 hover:text-[#f5f0e8] transition-colors"
                    href={legal.href}
                  >
                    {legal.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center space-y-4 flex-col">
            <p className="text-[#f5f0e8] font-bold">
              Téléchargement
            </p>
            <div className="flex flex-row gap-3 lg:gap-5 w-full lg:w-auto">
              <Link href="https://apps.apple.com/fr/app/mado-app-de-rencontre/id6747421904" className="hover:opacity-80 transition-opacity w-1/2 lg:w-auto">
                <Image src="/hero/app-store.png" alt="App Store" width={280} height={84} className="h-auto w-full lg:w-auto lg:h-20" />
              </Link>
              <Link href="https://play.google.com/store/apps/details?id=com.madoapp.mado" className="hover:opacity-80 transition-opacity w-1/2 lg:w-auto">
                <Image src="/hero/play-store.png" alt="Google Play" width={280} height={84} className="h-auto w-full lg:w-auto lg:h-20" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
