import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Feed() {
  const { t } = useTranslation()

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm text-gray-300">Rampurhat, Birbhum</div>
        <div className="flex items-center gap-2">
          <button className="px-2 py-1 rounded-md border text-xs">EN/BN</button>
          <button className="px-2 py-1 rounded-md border text-xs">🔔</button>
        </div>
      </div>

      <div className="mb-4">
        <input className="w-full search-input" placeholder={t('searchPlaceholder')} />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="card">Food & Grocery</div>
        <div className="card">Healthcare</div>
        <div className="card">Home Services</div>
        <div className="card">Education</div>
      </div>

      <h3 className="mt-6 mb-2 text-lg font-semibold">Transport</h3>
      <div className="grid grid-cols-3 gap-2">
        <div className="card text-center">Bike</div>
        <div className="card text-center">Auto</div>
        <div className="card text-center">Car</div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold">Merchants near you</h3>
        <div className="mt-3 space-y-3">
          <div className="card">Atithi Family Restaurant — 4.2 ★ — 1.2km</div>
          <div className="card">Local Grocery Mart — 3.9 ★ — 0.8km</div>
        </div>
      </div>
    </div>
  )
}
