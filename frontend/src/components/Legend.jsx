import React from 'react'

const categories = [
  { name: 'Metals', color: '#3b82f6' },
  { name: 'Nonmetals', color: '#eab308' },
  { name: 'Halogens', color: '#ef4444' },
  { name: 'Noble Gases', color: '#06b6d4' },
  { name: 'Metalloids', color: '#22c55e' },
  { name: 'Lanthanides', color: '#d946ef' },
  { name: 'Actinides', color: '#a855f7' },
]

export default function Legend() {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {categories.map((cat) => (
        <div key={cat.name} className="flex items-center gap-2 px-3 py-1.5 bg-zinc-50 dark:bg-zinc-900 rounded-full border border-zinc-200 dark:border-zinc-800">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }}></div>
          <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">{cat.name}</span>
        </div>
      ))}
    </div>
  )
}