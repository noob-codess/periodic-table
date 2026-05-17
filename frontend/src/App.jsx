import React, { useState, useEffect } from 'react'
import PeriodicTable from './components/PeriodicTable'
import SearchBar from './components/SearchBar'
import Legend from './components/Legend'
import ThemeToggle from './components/ThemeToggle'
import FilterBar from './components/FilterBar'
import FilterInfo from './components/FilterInfo'
import './styles/globals.css'

export default function App() {
    const [activeFilter, setActiveFilter] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
const [isDark, setIsDark] = useState(() => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('theme') !== 'light'
  }
  return true
})

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  return (
    <div 
      className="min-h-screen transition-colors"
      style={{ 
        background: isDark 
          ? 'linear-gradient(135deg, #1e1b4b 0%, #0f172a 50%, #1e293b 100%)' 
          : 'linear-gradient(135deg, #f1f5f9 0%, #ffffff 50%, #e0e7ff 100%)' 
      }}
    >
      <header 
        className="border-b transition-colors backdrop-blur-sm"
        style={{ 
          borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)',
          backgroundColor: isDark ? 'rgba(15, 23, 42, 0.5)' : 'rgba(255, 255, 255, 0.5)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex items-center justify-between">
          <div>
            <h1 
              className="text-3xl font-bold font-display"
              style={{ color: isDark ? '#ffffff' : '#18181b' }}
            >
              Periodic Table
            </h1>
            <p 
              className="mt-1 text-sm"
              style={{ color: isDark ? '#a1a1aa' : '#52525b' }}
            >
              Interactive exploration of the chemical elements
            </p>
          </div>
          <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-8 overflow-visible">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        
        <div className="mt-6">
        <Legend />
        </div>

        <div className="mt-6">
        <FilterBar 
            activeFilter={activeFilter} 
            onFilterChange={setActiveFilter}
            isDark={isDark}
        />
        </div>

        <FilterInfo activeFilter={activeFilter} isDark={isDark} />

        <div className="mt-8 py-6 px-4">
        <PeriodicTable searchQuery={searchQuery} activeFilter={activeFilter} />
        </div>
      </main>

      <footer 
        className="border-t mt-16 transition-colors backdrop-blur-sm"
        style={{ 
          borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)',
          backgroundColor: isDark ? 'rgba(15, 23, 42, 0.5)' : 'rgba(255, 255, 255, 0.5)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <p 
            className="text-sm"
            style={{ color: isDark ? '#a1a1aa' : '#52525b' }}
          >
            Open source.{' '}
            <a 
              href="https://github.com/noob-codess/periodic-table" 
              className="hover:underline"
              style={{ color: isDark ? '#818cf8' : '#4f46e5' }}
            >
              View on GitHub →
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}