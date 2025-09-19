import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Profile() {
  const { t } = useTranslation()
  return (
    <div className="max-w-md mx-auto p-4">
      <div className="card text-center">
        <div className="w-20 h-20 rounded-full bg-gray-700 mx-auto mb-2" />
        <h2 className="text-xl font-bold">Ritesh</h2>
        <p className="text-sm text-gray-400">+91 9064882049</p>
      </div>

      <div className="mt-4 space-y-3">
        <div className="card">Edit Profile</div>
        <div className="card">Become a Merchant</div>
        <div className="card">Help & Support</div>
        <div className="card">Logout</div>
      </div>
    </div>
  )
}
