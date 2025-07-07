import { useTranslation } from 'react-i18next'

const Education = () => {
  const { t } = useTranslation()

  const university = t('education.university', { returnObjects: true }) as {
    title: string
    institution: string
    details: string
  }

  const subjects = t('education.subjects', { returnObjects: true }) as string[]
  const complementary = t('education.complementary', { returnObjects: true }) as {
    title: string
    institution: string
    details: string
  }[]

  return (
    <section className="px-6 pt-15 pb-12 bg-[#f7f7ba] text-[#993399] min-h-[calc(100vh-64px)] overflow-y-auto">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center" style={{ fontFamily: 'Geologica, sans-serif' }}>
          {t('education.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Universidad (ocupa 2 columnas) */}
          <div className="md:col-span-2 bg-[#993399] text-[#f7f7ba] p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">{university.title}</h3>
            <p className="text-sm mb-1">{university.institution}</p>
            <p className="text-sm italic mb-4">{university.details}</p>

            <h4 className="text-base font-semibold mb-2">{t('education.subjectsTitle')}</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              {subjects.map((subject, index) => (
                <li key={index}>{subject}</li>
              ))}
            </ul>
          </div>

          {/* Complementarios */}
          <div className="flex flex-col gap-4 items-center">
            {complementary.map((course, index) => (
              <div
                key={index}
                className="bg-[#993399] text-[#f7f7ba] p-4 rounded-lg shadow w-full max-w-sm"
              >
                <h4 className="text-base font-semibold">{course.title}</h4>
                <p className="text-sm">{course.institution}</p>
                <p className="text-sm italic">{course.details}</p>
              </div>
            ))}

            <img
              src="/study.png"
              alt="Study"
              className="w-35 mt-4 invisible md:visible md:w-30"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
