import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export const ThemeToggle = () => {
  const [dark, setDark] = useState(() => {
    return document.documentElement.classList.contains('dark')
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <button
      onClick={() => setDark(!dark)}
      className="p-2 rounded text-[#993399] dark:text-[#FFFF99] hover:opacity-80 transition"
      title="Cambiar modo oscuro"
    >
      {dark ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  )
}
