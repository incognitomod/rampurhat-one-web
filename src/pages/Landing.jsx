import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../firebase'

export default function Landing() {
  const nav = useNavigate()
  const { t, i18n } = useTranslation()

  async function handleGoogleCustomer() {
    try {
      await signInWithPopup(auth, provider)
      // after auth, go to profile creation or feed
      nav('/feed')
    } catch (err) {
      alert('Sign-in failed: ' + err.message)
    }
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <header className="flex items-center justify-between py-4">
        <div>
          <h1 className="text-2xl font-bold">{t('appTitle')}</h1>
          <p className="text-sm text-gray-400">{t('tagline')}</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'bn' : 'en')}
            className="px-3 py-1 rounded-md border border-gray-700 text-sm">
            {i18n.language === 'en' ? 'BN' : 'EN'}
          </button>
        </div>
      </header>

      <div className="mt-8 space-y-4">
        <button onClick={handleGoogleCustomer}
          className="w-full py-3 rounded-xl bg-teal-600 text-white font-semibold">
          {t('createCustomer')}
        </button>

        <button onClick={() => nav('/merchant')}
          className="w-full py-3 rounded-xl border border-gray-700 text-white font-semibold">
          {t('createMerchant')}
        </button>

        <button onClick={() => nav('/profile')}
          className="w-full py-2 rounded-xl text-sm text-gray-300">
          {t('alreadyUser')}
        </button>
      </div>
    </div>
  )
}
