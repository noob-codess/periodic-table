import React from 'react'
import elements from '../data/elements.json'

const filterInfo = {
  phone: {
    title: 'Elements in Your Smartphone',
    description: 'Your phone contains over 30 different elements. These are the most critical ones that make modern smartphones possible.',
    fact: 'A single iPhone contains rare earth elements from over 6 different countries.',
  },
  ev: {
    title: 'Elements in Electric Vehicles',
    description: 'EVs require specific elements for their batteries, motors, and electronics. The transition to EVs is reshaping global mining.',
    fact: 'A Tesla Model S battery contains about 12 kg of lithium and 15 kg of cobalt.',
  },
  body: {
    title: 'Elements in Your Body',
    description: 'The human body is made of about 60% water, but contains over 20 different elements essential for life.',
    fact: 'Just 4 elements (Oxygen, Carbon, Hydrogen, Nitrogen) make up 96% of your body weight.',
  },
  solar: {
    title: 'Elements in Solar Panels',
    description: 'Modern solar technology depends on specific elements that can convert sunlight into electricity.',
    fact: 'Silicon makes up 95% of all solar panels worldwide.',
  },
  precious: {
    title: 'Precious Metals',
    description: 'These elements are rare, valuable, and have been used for currency, jewelry, and technology throughout history.',
    fact: 'All the gold ever mined could fit into a cube about 21 meters on each side.',
  },
  radioactive: {
    title: 'Radioactive Elements',
    description: 'These elements have unstable nuclei that decay over time, releasing energy. Some are used for power, others are dangerous.',
    fact: 'Uranium-235 is the only naturally occurring isotope capable of sustaining nuclear fission.',
  },
  daily: {
    title: 'Elements in Daily Life',
    description: 'You interact with these elements every day — from the food you eat to the materials around you.',
    fact: 'The salt on your food (NaCl) contains two of the most reactive elements: sodium and chlorine.',
  },
}

export default function FilterInfo({ activeFilter, isDark }) {
  if (!activeFilter) return null

  const info = filterInfo[activeFilter]
  const count = elements.filter(el => el.tags?.includes(activeFilter)).length

  return (
    <div
      className="mt-6 p-6 rounded-xl"
      style={{
        backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)',
        border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'}`,
      }}
    >
      <h3
        className="text-xl font-bold mb-2"
        style={{ color: isDark ? '#ffffff' : '#18181b', fontFamily: '"Space Grotesk", sans-serif' }}
      >
        {info.title}
      </h3>
      <p className="text-sm mb-3" style={{ color: isDark ? '#cbd5e1' : '#475569' }}>
        {info.description}
      </p>
      <div className="flex items-center gap-4 mt-4">
        <div
          className="px-3 py-1.5 rounded-full text-sm font-medium"
          style={{
            backgroundColor: isDark ? 'rgba(99, 102, 241, 0.2)' : 'rgba(99, 102, 241, 0.1)',
            color: isDark ? '#818cf8' : '#4f46e5',
          }}
        >
          {count} elements
        </div>
        <p className="text-xs italic" style={{ color: isDark ? '#94a3b8' : '#64748b' }}>
          💡 {info.fact}
        </p>
      </div>
    </div>
  )
}