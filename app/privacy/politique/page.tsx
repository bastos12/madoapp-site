import React from "react";

/**
 * Privacy Policy component for MADO (French)
 * Usage:
 *  - Place this file in your project (e.g. src/components/PrivacyPolicyMADO.jsx)
 *  - Ensure Tailwind CSS is available in your project for styling
 *  - Import and use: import PrivacyPolicyMADO from './components/PrivacyPolicyMADO';
 *    <PrivacyPolicyMADO lastUpdated="16 septembre 2025" />
 *
 * The component is accessible, responsive and organized by sections with anchors.
 */

export default function PrivacyPolicyMADO({ lastUpdated = "16 septembre 2025" }) {
  return (
    <article className="prose prose-lg mx-auto p-6 rounded-2xl shadow-sm mt-20 md:px-20">
      <header className="mb-4">
        <h1 className="text-2xl font-semibold">🛡️ Politique de Confidentialité – MADO</h1>
        <p className="text-sm">Dernière mise à jour : <strong>{lastUpdated}</strong></p>
      </header>

      <nav aria-label="Table des matières" className="mb-6">
        <ul className="flex flex-wrap gap-2 text-sm">
          {[
            ["1", "Qui sommes-nous"],
            ["2", "Données collectées"],
            ["3", "Finalités du traitement"],
            ["4", "Profilage & algorithmes"],
            ["5", "Partage des données"],
            ["6", "Cookies & traceurs"],
            ["7", "Conservation des données (RGPD)"],
            ["8", "Vos droits RGPD"],
            ["9", "Sécurité & Signalement"],
            ["10", "Transferts internationaux"],
            ["11", "Modifications"],
            ["12", "Contact"],
            ["13", "Autorité de contrôle"]
          ].map(([id, title]) => (
            <li key={id}>
              <a className="inline-block px-3 py-1 rounded-md hover:bg-gray-100" href={`#section-${id}`}>
                {id}. {title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section id="section-1" className="mb-4">
        <h2 className="text-xl font-medium">1. Qui sommes-nous</h2>
        <p>
          L’application est éditée par <strong>MADO</strong>, société SAS immatriculée au RCS de Lyon sous le
          numéro <strong>94514059800018</strong>, dont le siège social est situé dans le 2ème arrondissement de Lyon.
        </p>
        <p>Nous aidons les adultes à nouer des connexions sérieuses, sécurisées et authentiques.</p>
      </section>

      <section id="section-2" className="mb-4">
        <h2 className="text-xl font-medium">2. Données collectées</h2>
        <p>Nous collectons les catégories de données suivantes :</p>
        <ul className="list-disc ml-5">
          <li><strong>Informations d’inscription</strong> : nom, e‑mail, date de naissance.</li>
          <li><strong>Données de profil</strong> : photos, réponses au questionnaire, géolocalisation approximative, etc.</li>
          <li><strong>Contenus générés</strong> : messages, commentaires et autres contributions.</li>
          <li><strong>Données de paiement</strong> : via les stores (lorsque vous souscrivez un abonnement payant).</li>
          <li><strong>Données techniques anonymes</strong> : appareil, logs, cookies et données similaires.</li>
        </ul>
      </section>

      <section id="section-3" className="mb-4">
        <h2 className="text-xl font-medium">3. Finalités du traitement</h2>
        <p>Nous utilisons vos données afin de :</p>
        <ul className="list-disc ml-5">
          <li>Authentifier et sécuriser les profils.</li>
          <li>Proposer des suggestions de profils compatibles (profilage automatique).</li>
          <li>Gérer les interactions (matchs, messages).</li>
          <li>Proposer du contenu personnalisé et gérer les abonnements.</li>
          <li>Détecter les comportements abusifs et assurer la sécurité des utilisateurs.</li>
          <li>Respecter nos obligations légales.</li>
        </ul>
      </section>

      <section id="section-4" className="mb-4">
        <h2 className="text-xl font-medium">4. Profilage & algorithmes</h2>
        <p>
          Nous pratiquons le profilage automatique dans le but de : afficher des profils compatibles, lutter contre les
          faux profils / bots et personnaliser le contenu et la sécurité du service.
        </p>
      </section>

      <section id="section-5" className="mb-4">
        <h2 className="text-xl font-medium">5. Partage des données</h2>
        <p>Vos données peuvent être partagées avec :</p>
        <ul className="list-disc ml-5">
          <li>D'autres membres (uniquement les informations que vous choisissez de partager publiquement ou en messagerie).</li>
          <li>Prestataires techniques et prestataires en charge de la sécurité.</li>
          <li>Partenaires intégrés (par exemple coachs ou thérapeutes) lorsque vous utilisez ces services.</li>
          <li>Plateformes de paiement pour la gestion des transactions.</li>
          <li>Autorités légales en cas de demande légale valide ou de flagrant délit.</li>
        </ul>
      </section>

      <section id="section-6" className="mb-4">
        <h2 className="text-xl font-medium">6. Cookies & traceurs</h2>
        <p>
          Nous utilisons des cookies pour le fonctionnement technique, l’analyse et la sécurité (détection des fraudes).
          Certains outils analytiques externes (par ex. Google Analytics) peuvent être utilisés. Vous pouvez désactiver
          les cookies via votre navigateur ou nos réglages, mais cela peut altérer l’expérience.
        </p>
      </section>

      <section id="section-7" className="mb-6">
        <h2 className="text-xl font-medium">7. Conservation des données (RGPD)</h2>
        <p>Durées de conservation (à titre indicatif) :</p>

        <div className="overflow-x-auto rounded-md border dark:border-white/80">
          <table className="w-full table-auto text-sm">
            <thead className="bg-transparent">
              <tr>
                <th className="p-3 text-left">Type de données</th>
                <th className="p-3 text-left">Durée de conservation</th>
                <th className="p-3 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t dark:border-white/80">
                <td className="p-3">Données utiles</td>
                <td className="p-3">90 jours post-suppression</td>
                <td className="p-3">Profil et contenus</td>
              </tr>
              <tr className="border-t dark:border-white/80">
                <td className="p-3">Comportement abusif</td>
                <td className="p-3">Jusqu’à 2 ans</td>
                <td className="p-3">Conservation pour enquêtes</td>
              </tr>
              <tr className="border-t dark:border-white/80">
                <td className="p-3">Données de paiement</td>
                <td className="p-3">10 ans</td>
                <td className="p-3">Obligations légales</td>
              </tr>
              <tr className="border-t dark:border-white/80">
                <td className="p-3">Logs, consentements, support</td>
                <td className="p-3">1–5 ans</td>
                <td className="p-3">Selon usage & législation</td>
              </tr>
              <tr className="border-t dark:border-white/80">
                <td className="p-3">Données anonymisées</td>
                <td className="p-3">Indéfiniment</td>
                <td className="p-3">Utilisées pour analyses</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="section-8" className="mb-4">
        <h2 className="text-xl font-medium">8. Vos droits RGPD</h2>
        <p>Vous disposez des droits suivants :</p>
        <ul className="list-disc ml-5">
          <li>Accès, portabilité et rectification de vos données.</li>
          <li>Effacement ("droit à l’oubli").</li>
          <li>Restriction et opposition au traitement.</li>
          <li>Retrait du consentement (cookies, géoloc., etc.).</li>
          <li>Droit d’exporter vos données (via l’app ou sur demande).</li>
        </ul>
        <p className="mt-2">Note : si un signalement est abusif, nous pouvons suspendre temporairement ou définitivement le compte concerné.</p>
      </section>

      <section id="section-9" className="mb-4">
        <h2 className="text-xl font-medium">9. Sécurité & Signalement</h2>
        <p>MADO met en place des mesures de sécurité et une modération 24/7.
          Tout contenu dangereux ou harcèlement est strictement interdit — suspension immédiate possible.</p>
        <p>Vous pouvez signaler tout comportement via l’app ou à : <a href="mailto:hello@madoapp.fr" className="underline">hello@madoapp.fr</a></p>
      </section>

      <section id="section-10" className="mb-4">
        <h2 className="text-xl font-medium">10. Transferts internationaux</h2>
        <p>
          Vos données peuvent être transférées à nos serveurs ou prestataires hors UE. Nous utilisons des mécanismes conformes
          (clauses contractuelles types, etc.) pour encadrer ces transferts et protéger vos droits.
        </p>
      </section>

      <section id="section-11" className="mb-4">
        <h2 className="text-xl font-medium">11. Modifications</h2>
        <p>Nous pouvons amender cette politique à tout moment. Une notification sera envoyée pour les changements importants.</p>
      </section>

      <section id="section-12" className="mb-4">
        <h2 className="text-xl font-medium">12. Contact</h2>
        <p>Pour exercer vos droits ou pour toute question relative à la vie privée : <a href="mailto:hello@madoapp.fr" className="underline">hello@madoapp.fr</a></p>
      </section>

      <section id="section-13" className="mb-6">
        <h2 className="text-xl font-medium">13. Autorité de contrôle</h2>
        <p>Si vous résidez dans l’Union européenne, vous pouvez contacter la CNIL ou toute autre autorité de contrôle compétente.</p>
      </section>
    </article>
  );
}
