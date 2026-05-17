import React, { useState, useEffect } from 'react'

const categoryColors = {
  metal: { gradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)', name: 'Metal' },
  nonmetal: { gradient: 'linear-gradient(135deg, #eab308 0%, #ca8a04 100%)', name: 'Nonmetal' },
  halogen: { gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)', name: 'Halogen' },
  noble: { gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)', name: 'Noble Gas' },
  metalloid: { gradient: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)', name: 'Metalloid' },
  lanthanide: { gradient: 'linear-gradient(135deg, #d946ef 0%, #c026d3 100%)', name: 'Lanthanide' },
  actinide: { gradient: 'linear-gradient(135deg, #a855f7 0%, #9333ea 100%)', name: 'Actinide' },
}

export default function ElementModal({ element, onClose }) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const checkDark = () => setIsDark(document.documentElement.classList.contains('dark'))
    checkDark()
    const observer = new MutationObserver(checkDark)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  if (!element) return null

  const category = categoryColors[element.category]
  const bgColor = isDark ? '#1e293b' : '#ffffff'
  const textPrimary = isDark ? '#f1f5f9' : '#18181b'
  const textSecondary = isDark ? '#94a3b8' : '#52525b'
  const bgSecondary = isDark ? '#334155' : '#f1f5f9'


  return (
    <div
      onClick={onClose}
      className="fixed inset-0 flex items-center justify-center p-4 z-50"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(4px)' }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        style={{ backgroundColor: bgColor }}
      >
        {/* Header with gradient */}
        <div 
          className="p-8 text-white relative"
          style={{ background: category.gradient }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="text-sm opacity-80">{element.number}</div>
          <div className="text-7xl font-bold mt-1" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
            {element.symbol}
          </div>
          <div className="text-2xl font-medium mt-2">{element.name}</div>
          <div className="text-sm opacity-80 mt-1">{category.name}</div>
        </div>

        {/* Body */}
        <div className="p-8 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl" style={{ backgroundColor: bgSecondary }}>
              <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: textSecondary }}>
                Atomic Mass
              </p>
              <p className="text-2xl font-bold mt-1" style={{ color: textPrimary }}>
                {element.atomicMass.toFixed(3)}
              </p>
            </div>
            <div className="p-4 rounded-xl" style={{ backgroundColor: bgSecondary }}>
              <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: textSecondary }}>
                Valence Electrons
              </p>
              <p className="text-2xl font-bold mt-1" style={{ color: textPrimary }}>
                {element.valenceElectrons}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: textSecondary }}>
              Electron Configuration
            </h3>
            <p className="font-mono text-lg" style={{ color: textPrimary }}>
              {element.electronConfiguration}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: textSecondary }}>
              About
            </h3>
            <p style={{ color: textPrimary }}>{element.description}</p>
          </div>

          {element.realWorldUses && (
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: textSecondary }}>
                Real-World Uses
              </h3>
              <div className="flex flex-wrap gap-2">
                {element.realWorldUses.map((use, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1.5 rounded-full text-sm"
                    style={{ backgroundColor: bgSecondary, color: textPrimary }}
                  >
                    {use}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}