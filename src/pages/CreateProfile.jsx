import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { db } from '../firebase'
import { doc, setDoc } from 'firebase/firestore'

export default function CreateProfile() {
  const nav = useNavigate()
  const location = useLocation()
  const { uid, email } = location.state || {}
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    if (!name || !phone) return alert('Name & Phone required')

    await setDoc(doc(db, 'users', uid), {
      uid,
      email,
      name,
      phone,
      address,
      role: 'customer'
    })

    nav('/feed')
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Create Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          className="w-full p-2 border rounded"
          placeholder="Full Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          className="w-full p-2 border rounded"
          placeholder="Phone Number"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
        <input
          className="w-full p-2 border rounded"
          placeholder="Address"
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
        <button className="w-full py-2 bg-teal-600 text-white rounded">Save Profile</button>
      </form>
    </div>
  )
}
