"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    category: "INSCRIPTION / CONNEXION / SUPPRESSION",
    questions: [
      {
        question: "Comment télécharger MADO ?",
        answer: `L'application est disponible en version bêta, sur iPhone et Android, voici comment l'installer selon votre smartphone :

→ Mado sur iPhone (Apple)
Téléchargez Mado : app de rencontre sur l'App Store

→ Mado sur Android (Samsung, Redmi, etc.)
Téléchargez Mado : app de rencontre sur le Play Store`,
      },
      {
        question: '"Cet article est indisponible"',
        answer: `Si le message "Cet article n'est pas disponible" s'affiche sur votre store, cela peut être lié à la certification de votre âge sur votre compte Google.

Comme MADO est une application de rencontre, Google doit s'assurer que vous êtes bien majeur(e) pour pouvoir l'utiliser.

→ Pour certifier cela, suivez ce lien : https://myaccount.google.com/age-verification`,
      },
      {
        question: "Comment s'inscrire sur MADO ?",
        answer: `Une fois l'application téléchargée, il vous suffit de cliquer sur "Créer un compte"

Vous pouvez ensuite vous inscrire avec :
• Un email et un mot de passe
• Un identifiant Google
• Un identifiant Apple

En cas de difficultés, n'hésitez pas à contacter le support : hello@madoapp.fr`,
      },
      {
        question: "Que faire en cas d'oubli de mot de passe ?",
        answer: `Au moment de vous connecter :
1. Cliquez sur "Mot de passe oublié"
2. Cliquez sur le lien reçu par email, créez un nouveau mot de passe puis reconnectez-vous.`,
      },
      {
        question: "Comment supprimer mon compte ?",
        answer: `Aller dans les paramètres en haut à droite de votre profil.
En bas de la page cliquez sur "supprimer mon compte".`,
      },
    ],
  },
  {
    category: "TARIFS / ABONNEMENT",
    questions: [
      {
        question: "Est-ce que l'application est payante ?",
        answer: `Pour le moment l'application est 100% gratuite en phase "bêta".
Les abonnements commenceront début 2026.`,
      },
      {
        question: "Pourquoi proposer un abonnement à terme ?",
        answer: `Pour :
• Continuer à développer une application de haute qualité
• Continuer de proposer des contenus exclusifs de thérapeutes partenaires
• Maintenir un espace sécurisant et bienveillant
• Faire un premier tri à l'entrée pour garantir l'engagement de nos utilisateurs.trices`,
      },
    ],
  },
  {
    category: "SÉCURITÉ & VÉRIFICATION",
    questions: [
      {
        question: "Pourquoi dois-je vérifier mon identité ?",
        answer: `Pour garantir que MADO reste un espace sûr, authentique et sans faux profils.

La vérification d'identité permet :
• D'éviter les comptes frauduleux
• D'empêcher les mineurs d'accéder à l'application
• De protéger les membres contre l'usurpation`,
      },
      {
        question: "Qui réalise la vérification d'identité ?",
        answer: `Nous utilisons Did It, un prestataire français conforme au RGPD et spécialisé dans la vérification d'identité sécurisée.`,
      },
      {
        question: "Mes données d'identité sont-elles conservées ?",
        answer: `Non. Les documents transmis (CNI, passeport…) sont supprimés une fois la vérification effectuée.`,
      },
      {
        question: "Puis-je signaler un comportement inapproprié ?",
        answer: `Oui. Chaque profil comporte un bouton "Signaler".
Nous examinons chaque signalement dans un délai de 24h.`,
      },
      {
        question: "Puis-je bloquer un utilisateur ?",
        answer: `Oui, vous pouvez bloquer un profil à tout moment depuis sa fiche.`,
      },
    ],
  },
  {
    category: "CONFIDENTIALITÉ ET DONNÉES",
    questions: [
      {
        question: "Quels types de données MADO collecte ?",
        answer: `Uniquement ce qui est nécessaire pour :
• Personnaliser vos suggestions
• Garantir la sécurité
• Améliorer l'expérience

Nous ne revendons aucune donnée.`,
      },
      {
        question: "Puis-je supprimer mes données ?",
        answer: `Oui, vous pouvez supprimer votre compte à tout moment.
Toutes vos données sont alors effacées définitivement.`,
      },
    ],
  },
  {
    category: "UTILISATION DE L'APPLICATION",
    questions: [
      {
        question: 'Comment fonctionne le "match" sur MADO ?',
        answer: `Si vous aimez un profil, vous envoyez un "J'aime".
Si l'autre personne vous aime également, c'est un match, et une conversation peut commencer.`,
      },
      {
        question: "Puis-je modifier mes critères ?",
        answer: `Oui, vous pouvez ajuster vos critères depuis votre profil, et vos suggestions s'adapteront automatiquement.

Vous pouvez également modifier vos réponses au questionnaire dans l'onglet "Profil".`,
      },
      {
        question: "Puis-je me désinscrire facilement ?",
        answer: `Oui, vous pouvez supprimer votre compte en 2 clics depuis les paramètres.`,
      },
      {
        question: "Comment sont choisis mes 3 profils du jour ?",
        answer: `Chaque jour à 18h, vous recevez 3 profils compatibles selon vos critères et vos réponses au questionnaire.

L'objectif : limiter la surconsommation et faciliter les vraies rencontres.`,
      },
      {
        question: "Pourquoi je ne reçois pas toujours 3 profils ?",
        answer: `Il arrive que dans votre zone ou tranche d'âge, le nombre de profils compatibles soit encore limité.

MADO étant en phase de lancement, notre communauté grandit chaque jour — merci de votre patience !`,
      },
    ],
  },
  {
    category: "SERVICE CLIENT",
    questions: [
      {
        question: "Comment contacter l'équipe MADO ?",
        answer: `Par mail : hello@madoapp.fr`,
      },
    ],
  },
];

function AccordionItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-transparent hover:border-[#f2cce5] transition-colors">
      <button
        onClick={onClick}
        className="w-full py-4 flex items-center justify-between text-left hover:opacity-80 transition-opacity"
      >
        <span className="text-[#f6f3ed] font-medium text-sm md:text-base pr-4">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-[#f2cce5] flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] pb-4" : "max-h-0"
        }`}
      >
        <p className="text-[#f6f3ed]/80 text-sm whitespace-pre-line leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="min-h-screen bg-[#046147]">
      {/* Header */}
      <header className="flex items-center justify-center py-8">
        <Link href="/">
          <Image
            src="/hero/logo-rose.png"
            alt="Mado logo"
            width={150}
            height={50}
            className="h-12 w-auto hover:opacity-80 transition-opacity"
          />
        </Link>
      </header>

      {/* Contenu FAQ */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <h1 className="text-[#f6f3ed] text-3xl md:text-4xl font-bold text-center mb-12">
          FAQ MADO
        </h1>

        {faqData.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            {/* Titre de catégorie */}
            <h2 className="text-[#f6f3ed] text-lg md:text-xl font-bold mb-4 pb-2 border-b-2 border-[#f6f3ed]">
              {category.category}
            </h2>

            {/* Questions */}
            <div>
              {category.questions.map((item, questionIndex) => (
                <AccordionItem
                  key={questionIndex}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openItems[`${categoryIndex}-${questionIndex}`] || false}
                  onClick={() => toggleItem(categoryIndex, questionIndex)}
                />
              ))}
            </div>
          </div>
        ))}

        {/* Contact */}
        <div className="text-center mt-12 pt-8 border-t border-[#f2cce5]">
          <p className="text-[#f6f3ed] mb-2">Une autre question ?</p>
          <a
            href="mailto:hello@madoapp.fr"
            className="text-[#f2cce5] font-medium hover:underline"
          >
            hello@madoapp.fr
          </a>
        </div>
      </div>
    </div>
  );
}

