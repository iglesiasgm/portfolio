import { useTranslation } from 'react-i18next'

export const AboutMe = () => {
  const { t } = useTranslation()

  return (
    <section className="px-6 py-12 bg-[#f7f7ba] text-[#993399] h-full md:h-full overflow-y-auto md:overflow-visible flex items-center justify-center">

      <div className="max-w-3xl text-center space-y-6">
        <h2 className="text-3xl font-bold" style={{ fontFamily: 'Geologica, sans-serif' }}>
          {t('about.title')}
        </h2>

        <p className="text-lg" style={{ fontFamily: 'Geologica, sans-serif' }}>
          {t('about.description')}
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-4">
          {(t('about.strengths', { returnObjects: true }) as string[]).map((trait, index) => (
            <span
              key={index}
              className="bg-[#993399] text-[#f7f7ba] px-4 py-2 rounded-full text-sm font-medium shadow"
              style={{ fontFamily: 'Geologica, sans-serif' }}
            >
              {trait}
            </span>
          ))}
        </div>

        <div className="mt-8 text-lg/md:text-xl text-[#993399] font-medium" style={{ fontFamily: 'Geologica, sans-serif' }}>
          📍 Mendoza, Argentina · 🎂 21 y · 🗣️ {t('about.languages')}
        </div>
      </div>
    </section>
  )
}

/*flex items-center justify-center*/ 