import { FaBrain, FaHandshake, FaSearch, FaClock, FaUserTie, FaSmile } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const blocks = [
  {
    icon: <FaBrain size={28} />,
    titleKey: 'approach.understanding.title',
    descKey: 'approach.understanding.desc',
  },
  {
    icon: <FaHandshake size={28} />,
    titleKey: 'approach.communication.title',
    descKey: 'approach.communication.desc',
  },
  {
    icon: <FaSearch size={28} />,
    titleKey: 'approach.research.title',
    descKey: 'approach.research.desc',
  },
  {
    icon: <FaClock size={28} />,
    titleKey: 'approach.now.title',
    descKey: 'approach.now.desc',
  },
  {
    icon: <FaUserTie size={28} />,
    titleKey: 'approach.professionalism.title',
    descKey: 'approach.professionalism.desc',
  },
  {
    icon: <FaSmile size={28} />,
    titleKey: 'approach.user.title',
    descKey: 'approach.user.desc',
  },
]

const Approach = () => {
  const { t } = useTranslation()

  return (
    <section className="px-6 pt-10 pb-24 bg-[#f7f7ba] text-[#f7f7ba] min-h-[calc(100vh-64px)] overflow-y-auto">

      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-[#993399]" style={{ fontFamily: 'Geologica, sans-serif' }}>
          {t('approach.title')}
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          {blocks.map((block, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-[#993399] rounded-lg shadow">
              <div className="mb-3 text-[#f7f7ba]">{block.icon}</div>
              <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Geologica, sans-serif' }}>
                {t(block.titleKey)}
              </h3>
              <p className="text-sm" style={{ fontFamily: 'Geologica, sans-serif' }}>
                {t(block.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Approach
