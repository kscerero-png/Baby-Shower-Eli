import React from 'react'

const iconos: Record<string, { bg: string, icon: string }> = {
  ropa:        { bg: 'bg-pink-100',    icon: '👗' },
  decoracion:  { bg: 'bg-amber-100',   icon: '🪄' },
  lactancia:   { bg: 'bg-sky-100',     icon: '🍼' },
  juguetes:    { bg: 'bg-violet-100',  icon: '🧸' },
  higiene:     { bg: 'bg-emerald-100', icon: '🛁' },
}

export default function IconoCategoria({ tipo }: { tipo: string }) {
  const config = iconos[tipo] || { bg: 'bg-gray-100', icon: '🎁' }
  return (
    <div className={`w-12 h-12 rounded-2xl ${config.bg} flex items-center justify-center text-xl shadow-inner shrink-0 border border-white/50`}>
      {config.icon}
    </div>
  )
}
