// src/components/Dock.tsx
import { FaUser, FaLightbulb, FaBookOpen, FaTools, FaSuitcase    } from "react-icons/fa";
import { Section } from "../types/sections/sections"
import { FaMessage } from "react-icons/fa6";


interface DockProps {
  activeSection: Section
  setActiveSection: (section: Section) => void
}

const Dock = ({ activeSection, setActiveSection }: DockProps) => {
  const buttons = [
    { id: Section.Hero, label: <FaUser style={{color: "#f7f7ba"}}/> },
    { id: Section.About, label: <FaLightbulb style={{color: "#f7f7ba"}}/> },
    { id: Section.Education, label: <FaBookOpen style={{color: "#f7f7ba"}}/> },
    { id: Section.Tools, label: <FaTools style={{color: "#f7f7ba"}}/> },
    { id: Section.Experience, label: <FaSuitcase style={{color: "#f7f7ba"}}/> },
    { id: Section.Contact, label: <FaMessage style={{color: "#f7f7ba"}}/> },
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
