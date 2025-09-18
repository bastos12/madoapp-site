"use client"

import { Mail } from "lucide-react"
import { Button } from "@/components/button"

export default function ContactUs() {
  return (
    <section className="flex justify-center items-center py-12 px-4 mt-12">
      <div className="max-w-6xl w-full shadow-lg rounded-lg border border-white/80 p-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Support MADO</h2>
          <p className="mt-2">
            Bienvenue sur la page d’assistance de MADO.<br />
            Nous sommes là pour répondre à vos questions et vous aider à profiter pleinement de votre expérience sur l’application.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Questions fréquentes (FAQ)</h3>
          </div>

          <div>
            <h4 className="text-lg font-medium">Problèmes de connexion</h4>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Vérifiez que vous utilisez la dernière version de l’application.</li>
              <li>Si le problème persiste, déconnectez-vous puis reconnectez-vous.</li>
              <li>Vous pouvez aussi utiliser l’option “Se connecter avec Apple” pour plus de simplicité et de sécurité.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium">Vérification d’identité</h4>
            <p className="mt-2">
              La vérification d’identité est obligatoire pour garantir des profils fiables.
            </p>
            <p className="mt-1">
              En cas de difficulté, assurez-vous que votre photo de pièce d’identité est bien lisible.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-medium">Abonnements et paiements</h4>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Vous pouvez gérer ou annuler votre abonnement directement via l’App Store ou Google Play.</li>
              <li>
                Les conditions d’utilisation sont disponibles ici :{" "}
                <a href="/privacy/cgu" className=" underline">Lien vers vos Conditions d’utilisation</a>.
              </li>
              <li>
                La politique de confidentialité est disponible ici :{" "}
                <a
                  href="https://www.madoapp.fr/privacy/politique"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Lien vers la politique de confidentialité
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium">Sécurité et signalements</h4>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Vous pouvez signaler tout comportement inapproprié directement depuis le profil d’un utilisateur.</li>
              <li>Notre équipe de modération vérifie et agit rapidement.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium">Contactez-nous</h4>
            <p className="mt-2">
              Si vous n’avez pas trouvé la réponse à votre question, notre équipe est disponible pour vous aider :
            </p>
            <div className="mt-4">
              <Button
                className="flex items-center gap-2 w-fit"
                onClick={() => window.open("mailto:hello@madoapp.fr", "_blank")}
              >
                <Mail size={18} />
                hello@madoapp.fr
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
