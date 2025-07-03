// src/components/Dock.tsx

import { Section } from "../types/sections/sections"


interface DockProps {
  activeSection: Section
  setActiveSection: (section: Section) => void
}

const Dock = ({ activeSection, setActiveSection }: DockProps) => {
  const buttons = [
    { id: Section.Hero, label: '👋' },
    { id: Section.About, label: '💡' },
    { id: Section.Education, label: '🎓' },
    { id: Section.Tools, label: '🛠️' },
    { id: Section.Experience, label: '📂' },
    { id: Section.Contact, label: '📬' },
  ]

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-[#993399] text-white px-4 py-2 rounded-full flex gap-4 shadow-lg z-50">
      {buttons.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => setActiveSection(id)}
          className={`text-2xl transition transform hover:scale-110 ${
            activeSection === id ? 'opacity-100' : 'opacity-50'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}

export default Dock;
