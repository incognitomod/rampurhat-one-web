import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Orders() {
  const { t } = useTranslation()
  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-3">{t('orders')}</h2>
      <div className="card">
        <div className="flex justify-between items-start">
          <div>
            <div className="font-semibold">Order #718388</div>
            <div className="text-sm text-gray-400">Atithi Family Restaurant</div>
            <div className="text-sm">Chicken Biriyani</div>
            <div className="mt-2 text-teal-400 font-semibold">Total: ₹180</div>
          </div>
          <div className="text-xs rounded-md px-2 py-1 border">COMPLETED</div>
        </div>
      </div>
    </div>
  )
}
