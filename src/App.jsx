import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Landing from './pages/Landing'
import Feed from './pages/Feed'
import Orders from './pages/Orders'
import Wallet from './pages/Wallet'
import Profile from './pages/Profile'
import Merchant from './pages/Merchant'
import CreateProfile from './pages/CreateProfile'

function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t border-gray-800 bottom-nav py-2 z-40">
      <div className="max-w-md mx-auto flex justify-between px-4">
        <Link to="/feed" className="text-center text-sm">Home</Link>
        <Link to="/search" className="text-center text-sm">Search</Link>
        <Link to="/orders" className="text-center text-sm">Orders</Link>
        <Link to="/wallet" className="text-center text-sm">Wallet</Link>
        <Link to="/profile" className="text-center text-sm">Profile</Link>
      </div>
    </nav>
  )
}

export default function App() {
  return (
    <div className="min-h-screen pb-20 bg-gray-900">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/merchant" element={<Merchant />} />
        <Route path="/create-profile" element={<CreateProfile />} />
      </Routes>

      <BottomNav />
    </div>
  )
}
