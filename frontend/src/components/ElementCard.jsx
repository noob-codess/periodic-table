import React, { useState, useEffect } from 'react'

const categoryStyles = {
  metal: { bg: '#dbeafe', bgDark: '#1e3a8a', border: '#3b82f6', text: '#1e3a8a', textDark: '#dbeafe' },
  nonmetal: { bg: '#fef3c7', bgDark: '#713f12', border: '#eab308', text: '#713f12', textDark: '#fef3c7' },
  halogen: { bg: '#fee2e2', bgDark: '#7f1d1d', border: '#ef4444', text: '#7f1d1d', textDark: '#fee2e2' },
  noble: { bg: '#cffafe', bgDark: '#164e63', border: '#06b6d4', text: '#164e63', textDark: '#cffafe' },
  metalloid: { bg: '#dcfce7', bgDark: '#14532d', border: '#22c55e', text: '#14532d', textDark: '#dcfce7' },
  lanthanide: { bg: '#fae8ff', bgDark: '#701a75', border: '#d946ef', text: '#701a75', textDark: '#fae8ff' },
  actinide: { bg: '#f3e8ff', bgDark: '#581c87', border: '#a855f7', text: '#581c87', textDark: '#f3e8ff' },
}

export default function ElementCard({ element, onClick }) {
  const style = categoryStyles[element.category]
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const checkDark = () => setIsDark(document.documentElement.classList.contains('dark'))
    checkDark()
    const observer = new MutationObserver(checkDark)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  const bgColor = isDark ? style.bgDark : style.bg
  const textColor = isDark ? style.textDark : style.text

  return (
    <button
      onClick={onClick}
      className="element-card aspect-square p-1 rounded-md border-2 transition-all duration-200 cursor-pointer hover:scale-110 hover:shadow-xl hover:z-20 relative w-full"
      style={{
        backgroundColor: bgColor,
        borderColor: style.border,
        color: textColor,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = style.border
        e.currentTarget.style.color = 'white'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = bgColor
        e.currentTarget.style.color = textColor
      }}
    >
      <div className="h-full flex flex-col items-center justify-center">
        <div className="text-[8px] sm:text-[10px] opacity-70 leading-none">{element.number}</div>
        <div className="text-sm sm:text-base lg:text-lg font-bold leading-tight" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
          {element.symbol}
        </div>
        <div className="text-[7px] sm:text-[8px] opacity-80 truncate w-full text-center leading-tight">
          {element.name}
        </div>
      </div>
    </button>
  )
}