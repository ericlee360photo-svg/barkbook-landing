'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitted(true)
    setIsLoading(false)
    setEmail('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-coral-50 to-coral-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <img 
                src="/favicon.svg" 
                alt="BarkBook logo" 
                className="w-8 h-8 mr-2"
              />
              <span className="text-2xl font-bold text-primary">BarkBook</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/privacy" className="text-gray-600 hover:text-primary transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-primary transition-colors">
                Terms
              </Link>
              <Link href="/refund" className="text-gray-600 hover:text-primary transition-colors">
                Refund Policy
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-8">
        <div className="max-w-2xl text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src="/favicon.svg" 
              alt="BarkBook logo" 
              className="w-64 h-64 md:w-96 md:h-96"
            />
          </div>
          
          {/* Main Content */}
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            The Complete CRM for
            <span className="text-accent block">Professional Pet Groomers</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Smart CRM software designed for pet groomers. Manage bookings, track
            vaccines, send reminders, and simplify your grooming business.
          </p>

          {/* Email Signup Form */}
          {!isSubmitted ? (
            <div className="max-w-md mx-auto">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-6 py-3 bg-accent text-white rounded-lg shadow hover:bg-accent-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isLoading ? 'Signing up...' : 'Request Early Access'}
                </button>
              </form>
              <p className="text-sm text-gray-500 mt-4">
                Be the first to know when we launch. No spam, ever.
              </p>
            </div>
          ) : (
            <div className="max-w-md mx-auto">
              <div className="bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-lg">
                <h3 className="font-semibold mb-2">Thank you for signing up!</h3>
                <p className="text-sm">
                  We&apos;ll notify you as soon as BarkBook is ready for early access.
                </p>
              </div>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-4 text-accent hover:underline"
              >
                Sign up another email
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-coral-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 flex items-center">
              <img 
                src="/favicon.svg" 
                alt="BarkBook logo" 
                className="w-6 h-6 mr-2 filter brightness-0 invert"
              />
              <span className="text-xl font-bold text-white">BarkBook</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-coral-100">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/refund" className="hover:text-white transition-colors">
                Refund Policy
              </Link>
            </div>
          </div>
          <div className="border-t border-coral-500 mt-6 pt-6 text-center text-coral-100">
            <p>&copy; {new Date().getFullYear()} BarkBook. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
// Updated Wed Aug 20 11:20:04 EDT 2025
