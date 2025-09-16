import React from "react";

/**
 * Composant React : Conditions Générales de Vente (CGV) – MADO
 * Usage :
 *  - Placer ce fichier dans votre projet (ex: src/components/CGVMADO.jsx)
 *  - Assurez-vous que Tailwind CSS est configuré si vous voulez le style
 *  - Importer et utiliser : import CGVMADO from './components/CGVMADO';
 *    <CGVMADO lastUpdated="25/06/2025" contactEmail="hello@madoapp.fr" />
 */

export default function CGVMADO({ lastUpdated = "16 septembre 2025", contactEmail = "hello@madoapp.fr" }) {
  return (
    <article className="prose prose-lg mx-auto p-6 rounded-2xl shadow-sm mt-20 md:px-20">
      <header className="mb-4">
        <h1 className="text-2xl font-semibold">🧾 Conditions Générales de Vente – MADO</h1>
        <p className="text-sm">Dernière mise à jour : <strong>{lastUpdated}</strong></p>
      </header>

      <section className="mb-4" id="section-1">
        <h2 className="text-xl font-medium">1. Présentation</h2>
        <p>
          Les présentes Conditions Générales de Vente (CGV) régissent les modalités de souscription, de paiement et d’accès aux services payants proposés via l’application MADO, éditée par MADO, société SAS immatriculée au RCS de Lyon n° 94514059800018, dont le siège social est situé dans le 2ème arrondissement de Lyon.
        </p>
        <p>L’application est disponible sur App Store (Apple) et Google Play (Android).</p>
      </section>

      <section className="mb-4" id="section-2">
        <h2 className="text-xl font-medium">2. Services proposés</h2>
        <p>MADO propose :</p>
        <ul className="list-disc ml-5">
          <li>Un accès gratuit à certaines fonctionnalités pendant la période d’essai.</li>
          <li>Un accès payant via abonnement incluant notamment :</li>
          <ul className="list-disc ml-10">
            <li>Accès à la totalité du coaching des thérapeutes partenaires (coaching, audio, articles).</li>
            <li>Accès aux profils compatibles chaque jour.</li>
            <li>Accès à l’ensemble des fonctionnalités de matching (message, like…).</li>
          </ul>
        </ul>
        <p>Le détail des services est précisé au moment de la souscription dans l’application.</p>
      </section>

      <section className="mb-4" id="section-3">
        <h2 className="text-xl font-medium">3. Conditions d’accès aux services payants</h2>
        <p>Pour accéder aux services payants, l’utilisateur doit :</p>
        <ul className="list-disc ml-5">
          <li>Être majeur (18 ans minimum).</li>
          <li>Disposer d’un compte utilisateur MADO actif.</li>
          <li>Avoir procédé à une vérification d’identité complète.</li>
          <li>Disposer d’un moyen de paiement valide (via App Store ou Google Play).</li>
        </ul>
        <p>L’achat de services payants implique l’acceptation pleine et entière des présentes CGV.</p>
      </section>

      <section className="mb-4" id="section-4">
        <h2 className="text-xl font-medium">4. Prix et durée</h2>
        <p>Les tarifs sont indiqués dans l’application au moment de la souscription, en euros TTC, selon la devise et le pays de résidence de l’utilisateur.</p>
        <p>Les abonnements peuvent être :</p>
        <ul className="list-disc ml-5">
          <li>Mensuels, renouvelés automatiquement sauf résiliation.</li>
          <li>Trimestriels, semestriels ou annuels, avec conditions spécifiques.</li>
        </ul>
        <p>MADO se réserve le droit de modifier ses prix à tout moment. Les prix en vigueur au moment de la commande restent applicables.</p>
      </section>

      <section className="mb-4" id="section-5">
        <h2 className="text-xl font-medium">5. Paiement</h2>
        <p>Les paiements sont gérés par les plateformes de téléchargement :</p>
        <ul className="list-disc ml-5">
          <li>App Store (Apple) pour iOS.</li>
          <li>Google Play (Google) pour Android.</li>
        </ul>
        <p>MADO ne collecte ni ne conserve de données bancaires directement. Les conditions de facturation, moyens de paiement, renouvellement ou remboursement dépendent des politiques d’Apple et Google.</p>
      </section>

      <section className="mb-4" id="section-6">
        <h2 className="text-xl font-medium">6. Droit de rétractation</h2>
        <p>
          Conformément à l’article L221-28 du Code de la consommation, le droit de rétractation ne s’applique pas aux contenus numériques fournis immédiatement après paiement lorsque l’exécution a commencé avec l’accord de l’utilisateur. En souscrivant à un abonnement, l’utilisateur accepte expressément de renoncer à ce droit.
        </p>
      </section>

      <section className="mb-4" id="section-7">
        <h2 className="text-xl font-medium">7. Résiliation & désabonnement</h2>
        <p>L’utilisateur peut résilier son abonnement à tout moment via :</p>
        <ul className="list-disc ml-5">
          <li>Les réglages de son compte Apple (iOS).</li>
          <li>Son compte Google Play (Android).</li>
        </ul>
        <p>La résiliation prend effet à la fin de la période en cours. Aucun remboursement n’est effectué pour une période commencée.</p>
        <p>MADO se réserve le droit de suspendre ou résilier un abonnement sans remboursement en cas de violation des CGU ou comportement inapproprié.</p>
      </section>

      <section className="mb-4" id="section-8">
        <h2 className="text-xl font-medium">8. Réclamations et support</h2>
        <p>Pour toute réclamation relative à un achat ou abonnement, contactez : <a href={`mailto:${contactEmail}`} className="underline">{contactEmail}</a></p>
        <p>Les demandes liées aux paiements doivent être adressées en priorité à Apple ou Google selon la plateforme utilisée.</p>
      </section>

      <section className="mb-4" id="section-9">
        <h2 className="text-xl font-medium">9. Responsabilité</h2>
        <p>MADO met en œuvre tous les moyens raisonnables pour assurer la qualité de ses services. Sa responsabilité ne saurait être engagée en cas de :</p>
        <ul className="list-disc ml-5">
          <li>Dysfonctionnement technique temporaire.</li>
          <li>Contenu partenaire tiers (ex. thérapeutes).</li>
          <li>Inexécution ou mauvaise exécution du contrat imputable à l’utilisateur.</li>
        </ul>
        <p>En tout état de cause, la responsabilité de MADO est limitée au montant effectivement payé pour la période concernée.</p>
      </section>

      <section className="mb-4" id="section-10">
        <h2 className="text-xl font-medium">10. Données personnelles</h2>
        <p>Les données personnelles sont traitées conformément au RGPD. Pour plus de détails, voir notre Politique de confidentialité.</p>
      </section>

      <section className="mb-4" id="section-11">
        <h2 className="text-xl font-medium">11. Droit applicable</h2>
        <p>Les présentes CGV sont soumises au droit français. En cas de litige, les parties chercheront une solution amiable. À défaut, la compétence revient aux tribunaux du ressort du siège de l’éditeur.</p>
      </section>


    </article>
  );
}

