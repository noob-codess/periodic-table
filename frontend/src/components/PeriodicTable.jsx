import React, { useState, useMemo } from 'react'
import ElementCard from './ElementCard'
import ElementModal from './ElementModal'
import elements from '../data/elements.json'

// Periodic table positions: { period, group } for each atomic number
const positions = {
  1: { period: 1, group: 1 },
  2: { period: 1, group: 18 },
  3: { period: 2, group: 1 },
  4: { period: 2, group: 2 },
  5: { period: 2, group: 13 },
  6: { period: 2, group: 14 },
  7: { period: 2, group: 15 },
  8: { period: 2, group: 16 },
  9: { period: 2, group: 17 },
  10: { period: 2, group: 18 },
  11: { period: 3, group: 1 },
  12: { period: 3, group: 2 },
  13: { period: 3, group: 13 },
  14: { period: 3, group: 14 },
  15: { period: 3, group: 15 },
  16: { period: 3, group: 16 },
  17: { period: 3, group: 17 },
  18: { period: 3, group: 18 },
  19: { period: 4, group: 1 },
  20: { period: 4, group: 2 },
  21: { period: 4, group: 3 },
  22: { period: 4, group: 4 },
  23: { period: 4, group: 5 },
  24: { period: 4, group: 6 },
  25: { period: 4, group: 7 },
  26: { period: 4, group: 8 },
  27: { period: 4, group: 9 },
  28: { period: 4, group: 10 },
  29: { period: 4, group: 11 },
  30: { period: 4, group: 12 },
  31: { period: 4, group: 13 },
  32: { period: 4, group: 14 },
  33: { period: 4, group: 15 },
  34: { period: 4, group: 16 },
  35: { period: 4, group: 17 },
  36: { period: 4, group: 18 },
  37: { period: 5, group: 1 },
  38: { period: 5, group: 2 },
  39: { period: 5, group: 3 },
  40: { period: 5, group: 4 },
  41: { period: 5, group: 5 },
  42: { period: 5, group: 6 },
  43: { period: 5, group: 7 },
  44: { period: 5, group: 8 },
  45: { period: 5, group: 9 },
  46: { period: 5, group: 10 },
  47: { period: 5, group: 11 },
  48: { period: 5, group: 12 },
  49: { period: 5, group: 13 },
  50: { period: 5, group: 14 },
  51: { period: 5, group: 15 },
  52: { period: 5, group: 16 },
  53: { period: 5, group: 17 },
  54: { period: 5, group: 18 },
  55: { period: 6, group: 1 },
  56: { period: 6, group: 2 },
  72: { period: 6, group: 4 },
  73: { period: 6, group: 5 },
  74: { period: 6, group: 6 },
  75: { period: 6, group: 7 },
  76: { period: 6, group: 8 },
  77: { period: 6, group: 9 },
  78: { period: 6, group: 10 },
  79: { period: 6, group: 11 },
  80: { period: 6, group: 12 },
  81: { period: 6, group: 13 },
  82: { period: 6, group: 14 },
  83: { period: 6, group: 15 },
  84: { period: 6, group: 16 },
  85: { period: 6, group: 17 },
  86: { period: 6, group: 18 },
  87: { period: 7, group: 1 },
  88: { period: 7, group: 2 },
  104: { period: 7, group: 4 },
  105: { period: 7, group: 5 },
  106: { period: 7, group: 6 },
  107: { period: 7, group: 7 },
  108: { period: 7, group: 8 },
  109: { period: 7, group: 9 },
  110: { period: 7, group: 10 },
  111: { period: 7, group: 11 },
  112: { period: 7, group: 12 },
  113: { period: 7, group: 13 },
  114: { period: 7, group: 14 },
  115: { period: 7, group: 15 },
  116: { period: 7, group: 16 },
  117: { period: 7, group: 17 },
  118: { period: 7, group: 18 },
}

const lanthanidePositions = {
  57: 1, 58: 2, 59: 3, 60: 4, 61: 5, 62: 6, 63: 7, 64: 8,
  65: 9, 66: 10, 67: 11, 68: 12, 69: 13, 70: 14, 71: 15,
}

const actinidePositions = {
  89: 1, 90: 2, 91: 3, 92: 4, 93: 5, 94: 6, 95: 7, 96: 8,
  97: 9, 98: 10, 99: 11, 100: 12, 101: 13, 102: 14, 103: 15,
}

export default function PeriodicTable({ searchQuery, activeFilter }) {
  const [selectedElement, setSelectedElement] = useState(null)

  const filteredNumbers = useMemo(() => {
    if (!searchQuery) return null
    const query = searchQuery.toLowerCase()
    return new Set(
      elements
        .filter(el =>
          el.name.toLowerCase().includes(query) ||
          el.symbol.toLowerCase().includes(query) ||
          el.number.toString() === query
        )
        .map(el => el.number)
    )
  }, [searchQuery])

  const isMatched = (number) => {
  // Check search filter
  if (filteredNumbers && !filteredNumbers.has(number)) return false
  
  // Check tag filter
  if (activeFilter) {
    const element = elements.find(el => el.number === number)
    if (!element?.tags?.includes(activeFilter)) return false
  }
  
  return true
 }

  const mainElements = elements.filter(el => !lanthanidePositions[el.number] && !actinidePositions[el.number])
  const lanthanides = elements.filter(el => lanthanidePositions[el.number])
  const actinides = elements.filter(el => actinidePositions[el.number])

  return (
    <>
      {/* Desktop/Tablet: True periodic table layout */}
      <div className="hidden md:block">
        <div className="periodic-grid">
          {mainElements.map((element) => {
            const pos = positions[element.number]
            if (!pos) return null
            return (
              <div
                key={element.number}
                style={{
                  gridRow: pos.period,
                  gridColumn: pos.group,
                  opacity: isMatched(element.number) ? 1 : 0.2,
                  transition: 'opacity 0.3s',
                }}
              >
                <ElementCard
                  element={element}
                  onClick={() => setSelectedElement(element)}
                />
              </div>
            )
          })}
        </div>

        {/* Lanthanides row */}
        <div className="mt-6 flex gap-1" style={{ marginLeft: 'calc(100% / 18 * 3)' }}>
        {lanthanides.map((element) => (
            <div
            key={element.number}
            style={{
                flex: '0 0 calc((100% - 7rem) / 15)',
                opacity: isMatched(element.number) ? 1 : 0.2,
                transition: 'opacity 0.3s',
            }}
            >
            <ElementCard
                element={element}
                onClick={() => setSelectedElement(element)}
            />
            </div>
        ))}
        </div>

        {/* Actinides row */}
                <div className="mt-1 flex gap-1" style={{ marginLeft: 'calc(100% / 18 * 3)' }}>
                {actinides.map((element) => (
                    <div
                    key={element.number}
                    style={{
                        flex: '0 0 calc((100% - 7rem) / 15)',
                        opacity: isMatched(element.number) ? 1 : 0.2,
                        transition: 'opacity 0.3s',
                    }}
                    >
                    <ElementCard
                        element={element}
                        onClick={() => setSelectedElement(element)}
                    />
                    </div>
                ))}
                </div>
            </div>

            {/* Mobile: Stacked grid */}
            <div className="md:hidden grid grid-cols-4 gap-2">
                {elements
                .filter(el => isMatched(el.number))
                .map((element) => (
                    <ElementCard
                    key={element.number}
                    element={element}
                    onClick={() => setSelectedElement(element)}
                    />
                ))}
            </div>

            <ElementModal
                element={selectedElement}
                onClose={() => setSelectedElement(null)}
            />
            </>
        )
        }
