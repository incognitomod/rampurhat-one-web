import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Wallet() {
  const { t } = useTranslation()
  return (
    <div className="max-w-md mx-auto p-4">
      <div className="card text-center">
        <div className="text-sm">Wallet</div>
        <div className="text-3xl font-bold my-2">₹500</div>
        <button className="w-full py-2 rounded-md bg-teal-600">Add Money</button>
      </div>

      <div className="mt-6 card">
        <h3 className="font-semibold">Premium Subscription</h3>
        <p className="text-sm text-gray-400">Ad-free experience, free delivery</p>
        <div className="mt-3 text-center">
          <div className="text-xl font-bold">₹99/month</div>
          <button className="mt-3 py-2 px-4 rounded-md bg-teal-600">Subscribe Now</button>
        </div>
      </div>
    </div>
  )
}
