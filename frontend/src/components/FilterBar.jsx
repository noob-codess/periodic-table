import React from 'react'

const filters = [
  { id: 'phone', label: '📱 In Your Phone', color: '#3b82f6' },
  { id: 'ev', label: '🚗 In an EV', color: '#10b981' },
  { id: 'body', label: '🧬 In Your Body', color: '#ec4899' },
  { id: 'solar', label: '☀️ In Solar Panels', color: '#f59e0b' },
  { id: 'precious', label: '💎 Precious Metals', color: '#eab308' },
  { id: 'radioactive', label: '☢️ Radioactive', color: '#ef4444' },
  { id: 'daily', label: '🏠 Daily Life', color: '#8b5cf6' },
]

export default function FilterBar({ activeFilter, onFilterChange, isDark }) {
  return (
    <div className="space-y-3">
      <p className="text-sm text-center" style={{ color: isDark ? '#94a3b8' : '#52525b' }}>
        Filter by real-world use
      </p>
      <div className="flex flex-wrap gap-2 justify-center">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => onFilterChange(activeFilter === filter.id ? null : filter.id)}
            className="px-4 py-2 rounded-full text-sm font-medium transition-all"
            style={{
              backgroundColor: activeFilter === filter.id ? filter.color : (isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'),
              color: activeFilter === filter.id ? '#ffffff' : (isDark ? '#e2e8f0' : '#18181b'),
              border: `1px solid ${activeFilter === filter.id ? filter.color : (isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)')}`,
            }}
          >
            {filter.label}
          </button>
        ))}
        {activeFilter && (
          <button
            onClick={() => onFilterChange(null)}
            className="px-4 py-2 rounded-full text-sm font-medium transition-all"
            style={{
              backgroundColor: 'transparent',
              color: isDark ? '#94a3b8' : '#52525b',
              border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
            }}
          >
            ✕ Clear
          </button>
        )}
      </div>
    </div>
  )
}