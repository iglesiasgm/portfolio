import { useTranslation } from 'react-i18next'

import gbFlag from '../assets/flags/gb.svg'
import esFlag from '../assets/flags/ar.svg'
import itFlag from '../assets/flags/it.svg'
import brFlag from '../assets/flags/pt.svg'
import frFlag from '../assets/flags/fr.svg'

const languages = [
  { code: 'en', label: 'English', icon: gbFlag },
  { code: 'es', label: 'Español', icon: esFlag },
  { code: 'it', label: 'Italiano', icon: itFlag },
  { code: 'pt', label: 'Português', icon: brFlag },
  { code: 'fr', label: 'Français', icon: frFlag }
]

export const LanguageSelector = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code)
  }

  return (
    <div className="flex justify-between items-center w-full">
      {/* Leyenda a la izquierda */}
      <span
        className="text-sm md:text-base font-medium text-[#f7f7ba]"
        style={{ fontFamily: 'Geologica, sans-serif' }}
      >
        {t('header.welcome')}
      </span>

      {/* Selector de idiomas a la derecha */}
      <div className="flex gap-2">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`w-7 h-7 p-0.5 rounded-full border-2 hover:scale-105 transition ${
              i18n.language === lang.code
                ? 'border-[#480648]'
                : 'border-transparent'
            }`}
            title={lang.label}
          >
            <img
              src={lang.icon}
              alt={lang.label}
              className="w-full h-full rounded-full"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
