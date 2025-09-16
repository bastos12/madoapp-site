export default function PrivacyPolicy() {
    return (
    <section className="mx-auto max-w-3xl px-4 py-12 leading-relaxed">
    {/* Title */}
    <header className="mb-8">
    <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
    <span role="img" aria-label="cadenas" className="mr-2">🔒</span>
    Engagement de MADO contre l’exploitation des mineurs et les abus sexuels
    </h1>
    <p className="mt-3">
    Chez MADO, nous nous engageons pleinement à protéger nos utilisateurs et à lutter contre toute forme d’exploitation, d’abus sexuel ou de mise en danger des mineurs.
    </p>
    </header>
    
    
    {/* Tolérance zéro */}
    <section className="mb-10">
    <h2 className="text-xl md:text-2xl font-semibold">
    <span role="img" aria-label="interdiction" className="mr-2">🚫</span>
    Politique de tolérance zéro
    </h2>
    <ul className="mt-4 list-disc pl-6 space-y-2">
    <li>Toute tentative d’exploitation ou d’abus sexuel, réel ou suggéré</li>
    <li>Toute activité impliquant des mineurs</li>
    <li>Toute publication de contenu inapproprié, explicite ou violent</li>
    </ul>
    </section>
    
    
    {/* Accès réservé aux adultes */}
    <section className="mb-10">
    <h2 className="text-xl md:text-2xl font-semibold">
    <span role="img" aria-label="interdit aux moins de 18" className="mr-2">🔞</span>
    Accès strictement réservé aux adultes
    </h2>
    <p className="mt-3">
    L’application MADO est exclusivement destinée aux personnes majeures (18 ans et plus).
    Tout utilisateur ne respectant pas cette condition verra son compte supprimé sans préavis.
    </p>
    </section>
    
    
    {/* Signalement & coopération */}
    <section className="mb-10">
    <h2 className="text-xl md:text-2xl font-semibold">
    <span role="img" aria-label="alerte" className="mr-2">🚨</span>
    Signalement & coopération
    </h2>
    <ul className="mt-4 list-disc pl-6 space-y-2">
    <li>MADO met à disposition des outils de signalement faciles et accessibles pour toute situation jugée suspecte ou inappropriée.</li>
    <li>Tout signalement est examiné avec attention par notre équipe.</li>
    <li>En cas de comportement illicite ou d’abus, nous coopérons activement avec les autorités compétentes et transmettons les informations nécessaires.</li>
    </ul>
    </section>
    
    
    {/* Signaler un comportement */}
    <section className="mb-10">
    <h2 className="text-xl md:text-2xl font-semibold">
    <span role="img" aria-label="enveloppe" className="mr-2">📩</span>
    Signaler un comportement suspect
    </h2>
    <p className="mt-3">
    Si vous constatez un comportement ou un contenu inapproprié, vous pouvez nous contacter à l’adresse suivante :
    </p>
    <p className="mt-3 text-lg font-medium">
    <span className="mr-2" role="img" aria-label="main">👉</span>
    <a href="mailto:hello@madoapp.fr" className="underline decoration-2 underline-offset-4 hover:no-underline">hello@madoapp.fr</a>
    </p>
    </section>
    </section>
  );
}