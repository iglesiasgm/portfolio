import { useTranslation } from 'react-i18next'

import { techTools, softTools } from '../data/tools'

const Tools = () => {
    const { t } = useTranslation()

  return (
    <section className="px-6 py-12 bg-[#f7f7ba] text-[#993399] h-full flex items-center justify-center">
      <div className="max-w-5xl w-full text-center">
        <h2
          className="text-3xl font-bold mb-10"
          style={{ fontFamily: 'Geologica, sans-serif' }}
        >
          {t('tools.title')}
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Tecnologías */}
          <div>
            <div className="flex flex-wrap justify-center gap-5">
              {techTools.map(({ name, icon }) => (
                <div
                  key={name}
                  className="w-12 h-12 bg-[#993399] rounded-full shadow flex items-center justify-center hover:scale-110 transition"
                  title={name}
                >
                  <img
                    src={icon}
                    alt={name}
                    className="w-6 h-6 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Software */}
          <div>
            <div className="flex flex-wrap justify-center gap-5">
              {softTools.map(({ name, icon }) => (
                <div
                  key={name}
                  className="w-12 h-12 bg-[#993399] rounded-full shadow flex items-center justify-center hover:scale-110 transition"
                  title={name}
                >
                  <img
                    src={icon}
                    alt={name}
                    className="w-6 h-6 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tools
