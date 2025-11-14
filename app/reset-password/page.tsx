'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Composant de réinitialisation de mot de passe pour le site web madoapp.fr
 *
 * À utiliser sur votre site web Next.js/React
 *
 * Installation requise :
 * npm install axios
 *
 * Usage dans votre page /reset-password :
 * - Récupérer le token depuis l'URL (query params)
 * - Passer le token à ce composant
 * - Ou laisser le composant récupérer automatiquement le token de l'URL
 */

// Configuration de l'API - MODIFIER SELON VOTRE ENVIRONNEMENT
const API_URL = 'https://production-mado-9623f3b9c678.herokuapp.com/'; // Remplacez par votre URL d'API en production

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    // Récupérer le token de l'URL
    const urlParams = new URLSearchParams(window.location.search);
    const urlToken = urlParams.get('token');
    if (urlToken) {
      setToken(urlToken);
    } else {
      setMessage({
        type: 'error',
        text: 'Aucun token de réinitialisation trouvé. Veuillez vérifier le lien dans votre email.'
      });
    }
  }, []);

  const validatePassword = (pwd: string): string | null => {
    if (pwd.length < 8) {
      return 'Le mot de passe doit contenir au moins 8 caractères';
    }
    if (!/(?=.*[a-z])/.test(pwd)) {
      return 'Le mot de passe doit contenir au moins une lettre minuscule';
    }
    if (!/(?=.*[A-Z])/.test(pwd)) {
      return 'Le mot de passe doit contenir au moins une lettre majuscule';
    }
    if (!/(?=.*\d)/.test(pwd)) {
      return 'Le mot de passe doit contenir au moins un chiffre';
    }
    if (!/(?=.*[!@#$%^&*()\-_=+{};:,<.>])/.test(pwd)) {
      return 'Le mot de passe doit contenir au moins un caractère spécial (!@#$%^&*()-_=+{};:,<.>)';
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    // Validation des champs
    if (!password || !confirmPassword) {
      setMessage({
        type: 'error',
        text: 'Veuillez remplir tous les champs'
      });
      return;
    }

    if (password !== confirmPassword) {
      setMessage({
        type: 'error',
        text: 'Les mots de passe ne correspondent pas'
      });
      return;
    }

    // Validation du format du mot de passe
    const passwordError = validatePassword(password);
    if (passwordError) {
      setMessage({
        type: 'error',
        text: passwordError
      });
      return;
    }

    if (!token) {
      setMessage({
        type: 'error',
        text: 'Token manquant. Veuillez utiliser le lien dans votre email.'
      });
      return;
    }

    setIsLoading(true);

    try {
      // Appel à l'API Djoser pour confirmer la réinitialisation
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': '',
          'Accept': 'application/json'
        }
      };
      const body = JSON.stringify({
          token,
          new_password: password,
          re_new_password: confirmPassword
      });
      const response = await axios.post(
        `${API_URL}users/reset_password_confirm/`, body, config
      );

      if (response.status === 204) {
        setMessage({
          type: 'success',
          text: 'Votre mot de passe a été réinitialisé avec succès ! Vous pouvez maintenant vous connecter avec votre nouveau mot de passe dans l\'application Mado.'
        });

        // Réinitialiser le formulaire
        setPassword('');
        setConfirmPassword('');

        // Optionnel : rediriger vers une page de succès après 3 secondes
        setTimeout(() => {
          window.location.href = '/'; // ou vers votre page d'accueil
        }, 3000);
      }
    } catch (error: any) {
      console.error('Erreur lors de la réinitialisation:', error);

      let errorMessage = 'Une erreur est survenue lors de la réinitialisation du mot de passe.';

      if (error.response) {
        if (error.response.status === 400) {
          errorMessage = 'Le lien de réinitialisation est invalide ou a expiré. Veuillez demander un nouveau lien.';
        } else if (error.response.data) {
          // Extraire les messages d'erreur de l'API
          const errors = error.response.data;
          if (errors.token) {
            errorMessage = 'Le lien de réinitialisation est invalide ou a expiré.';
          } else if (errors.new_password) {
            errorMessage = Array.isArray(errors.new_password)
              ? errors.new_password.join(' ')
              : errors.new_password;
          }
        }
      }

      setMessage({
        type: 'error',
        text: errorMessage
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#016145] px-4 py-20">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-[#036147] text-center mb-3">
          Nouveau mot de passe
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Veuillez entrer votre nouveau mot de passe
        </p>

        {message && (
          <div className={`p-4 rounded-lg mb-6 text-sm leading-relaxed ${
            message.type === 'success' 
              ? 'bg-green-50 text-green-800 border border-green-200' 
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-semibold text-[#036147]">
              Nouveau mot de passe
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Votre nouveau mot de passe"
              className="w-full px-4 py-3 text-base border-2 border-gray-200 rounded-lg outline-none transition-colors focus:border-[#036147] disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="confirmPassword" className="block text-sm font-semibold text-[#036147]">
              Confirmer le mot de passe
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirmez votre nouveau mot de passe"
              className="w-full px-4 py-3 text-base border-2 border-gray-200 rounded-lg outline-none transition-colors focus:border-[#036147] disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading}
              required
            />
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm font-semibold text-[#036147] mb-2">
              Le mot de passe doit contenir :
            </p>
            <ul className="text-sm text-gray-600 space-y-1 pl-5 list-disc">
              <li>Au moins 8 caractères</li>
              <li>Une lettre minuscule</li>
              <li>Une lettre majuscule</li>
              <li>Un chiffre</li>
              <li>Un caractère spécial (!@#$%^&*()-_=+{'{'}{'}'};:,&lt;.&gt;)</li>
            </ul>
          </div>

          <button
            type="submit"
            className={`w-full py-4 px-6 text-lg font-bold rounded-lg transition-all duration-200 ${
              isLoading 
                ? 'bg-[#F3CDE7] text-[#036147] opacity-60 cursor-not-allowed' 
                : 'bg-[#F3CDE7] text-[#036147] hover:bg-[#f0c4e1] hover:shadow-md'
            }`}
            disabled={isLoading}
          >
            {isLoading ? 'Réinitialisation en cours...' : 'Réinitialiser mon mot de passe'}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            Vous rencontrez des problèmes ? Contactez notre support à{' '}
            <a href="mailto:support@madoapp.fr" className="text-[#036147] font-semibold hover:underline">
              support@madoapp.fr
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

