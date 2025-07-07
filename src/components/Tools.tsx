import { useTranslation } from 'react-i18next'
import { techTools, softTools } from '../data/tools'

const Tools = () => {
  const { t } = useTranslation()

  const allTools = [...techTools, ...softTools]

  return (
    <section className="px-6 pt-20 sm:pt-50 md:pt-50 lg:pt-50 xl:pt-50 pb-12 bg-[#f7f7ba] text-[#993399] min-h-[calc(100vh-64px)] overflow-y-auto">
      <div className="max-w-2xl mx-auto text-center">
        <h2
          className="text-3xl font-bold mb-8"
          style={{ fontFamily: 'Geologica, sans-serif' }}
        >
          {t('tools.title')}
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {allTools.map(({ name, icon }) => (
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
    </section>
  )
}

export default Tools
