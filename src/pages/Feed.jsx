import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'

export default function Feed() {
  const [items, setItems] = useState([])

  useEffect(() => {
    async function fetchFeed() {
      const snapshot = await getDocs(collection(db, 'feedItems'))
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      setItems(data)
    }
    fetchFeed()
  }, [])

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-semibold mb-3">Feed</h2>
      <div className="space-y-3">
        {items.map(item => (
          <div key={item.id} className="card flex justify-between items-center">
            <div>
              <div className="font-semibold">{item.title}</div>
              <div className="text-sm text-gray-400">{item.category}</div>
              <div className="text-teal-400 font-semibold">₹{item.price}</div>
            </div>
            {item.imageUrl && (
              <img src={item.imageUrl} className="w-16 h-16 rounded" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
