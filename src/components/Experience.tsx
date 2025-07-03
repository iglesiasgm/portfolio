import { useTranslation } from 'react-i18next'
import { FaLaptopCode, FaChartBar } from 'react-icons/fa' // ✅ Íconos agregados

const Experience = () => {
  const { t } = useTranslation()

  const experiences = t('experience.items', { returnObjects: true }) as {
    title: string
    company: string
    year: string
    description: string
  }[]

  const icons = [FaLaptopCode, FaChartBar] // ✅ Lista de íconos asociada a las experiencias

  return (
    <section className="px-6 py-5 bg-[#f7f7ba] text-[#f7f7ba] h-full flex items-center justify-center">
      <div className="max-w-2xl w-full">
        <h2 className="text-3xl font-bold mb-10 text-center text-[#993399]" style={{ fontFamily: 'Geologica, sans-serif' }}>
          {t('experience.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 justify-items-center">
          {experiences.map((exp, index) => {
            const Icon = icons[index] || <FaLaptopCode/>
            return (
              <div
                key={index}
                className="bg-[#993399] rounded-lg shadow p-6 w-full max-w-[300px] text-center flex flex-col items-center"
                style={{ fontFamily: 'Geologica, sans-serif' }}
              >
                <div className="mb-4">
                  <Icon size={48} color="#f7f7ba" /> {/* ✅ Ícono renderizado */}
                </div>
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-sm font-medium">{exp.company}</p>
                <p className="text-sm italic mb-2">{exp.year}</p>
                <p className="text-sm">{exp.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Experience
