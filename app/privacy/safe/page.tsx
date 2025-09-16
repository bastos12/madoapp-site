export default function ChildProtectionMADO({ lastUpdated = "16 septembre 2025", contactEmail = "hello@madoapp.fr" }) {
  return (
    <article className="prose prose-lg mx-auto p-6 rounded-2xl shadow-sm mt-20 md:px-20">
      <header className="mb-4">
        <h1 className="text-2xl font-semibold">🔒 Engagement de MADO contre l’exploitation des mineurs et les abus sexuels</h1>
        <p className="text-sm">Dernière mise à jour : <strong>{lastUpdated}</strong></p>
      </header>

      <section className="mb-4">
        <h2 className="text-xl font-medium">Notre engagement</h2>
        <p>MADO s’engage pleinement à protéger ses utilisateurs et à lutter contre toute forme d’exploitation, d’abus sexuel ou de mise en danger des mineurs.</p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-medium">🚫 Politique de tolérance zéro</h2>
        <ul className="list-disc ml-5">
          <li>Toute tentative d’exploitation ou d’abus sexuel, réel ou suggéré.</li>
          <li>Toute activité impliquant des mineurs.</li>
          <li>Toute publication de contenu inapproprié, explicite ou violent.</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-medium">🔞 Accès réservé aux adultes</h2>
        <p>L’application MADO est exclusivement destinée aux personnes majeures (18 ans et plus). Tout utilisateur ne respectant pas cette condition verra son compte supprimé sans préavis.</p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-medium">🚨 Signalement & coopération</h2>
        <p>MADO met à disposition des outils de signalement faciles et accessibles. Tout signalement est examiné par notre équipe. En cas de comportement illicite ou d’abus, nous coopérons activement avec les autorités compétentes et transmettons les informations nécessaires.</p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-medium">📩 Signaler un comportement suspect</h2>
        <p>Si vous constatez un comportement ou un contenu inapproprié, vous pouvez nous contacter à : <a href={`mailto:${contactEmail}`} className="underline">{contactEmail}</a></p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-medium">Notre mission</h2>
        <p>Construire un espace bienveillant, respectueux et sécurisé, où les relations humaines peuvent s’épanouir en toute confiance.</p>
      </section>

    </article>
  );
}
