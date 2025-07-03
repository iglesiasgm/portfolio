import { useTranslation } from 'react-i18next'

const Education = () => {
  const { t } = useTranslation()

  const complementary = (t('education.complementary', { returnObjects: true }) as {
    title: string
    institution: string
    details: string
  }[])

  const subjects = (t('education.subjects', { returnObjects: true }) as string[])

  return (
    <section className="px-6 py-12 bg-[#f7f7ba] text-[#f7f7ba] h-full flex items-center justify-center">
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl font-bold mb-10 text-center text-[#993399]" style={{ fontFamily: 'Geologica, sans-serif' }}>
          {t('education.title')}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* UNIVERSIDAD */}
          <div className="md:col-span-2 bg-[#993399] p-6 rounded-lg shadow" style={{ fontFamily: 'Geologica, sans-serif' }}>
            <h3 className="text-2xl font-bold mb-2">{t('education.university.title')}</h3>
            <p className="text-sm font-medium mb-4">{t('education.university.institution')}</p>
            <p className="text-sm italic mb-4">{t('education.university.details')}</p>

            <h4 className="text-lg font-semibold mt-4 mb-2">{t('education.subjectsTitle')}</h4>
            <ul className="list-disc list-inside text-sm space-y-1">
              {subjects.map((subject, index) => (
                <li key={index}>{subject}</li>
              ))}
            </ul>
          </div>

          {/* CURSOS COMPLEMENTARIOS */}
          <div className="flex flex-col gap-4">
            {complementary.map((course, index) => (
              <div key={index} className="bg-[#993399] p-4 rounded-lg shadow">
                <h4 className="text-base font-semibold">{course.title}</h4>
                <p className="text-sm font-medium">{course.institution}</p>
                <p className="text-xs italic">{course.details}</p>
              </div>
              
            ))}
            <img
    src="/study.png"
    alt="Study illustration"
    className="w-50 mt-4 ml-20"
  />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
