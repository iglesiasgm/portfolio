import { useTranslation } from 'react-i18next'
import avatar from '../assets/avatar.png'


export const Hero = () => {
  const { t } = useTranslation()

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 px-6 py-20 md:py-40 lg:py-40 xl:py-50  bg-[#f7f7ba] text-[#993399]">
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight" style={{ fontFamily: 'Geologica, sans-serif' }}>
          {t('hero.title')}
        </h1>

        <p className="mt-6 text-2xl font-medium" style={{ fontFamily: 'Geologica, sans-serif' }} >{t('hero.subtitle')}</p>

        
      </div>

      <img
        src={avatar}
        alt="Gabriel Iglesias Avatar"
        style={{border: "5px solid #993399", borderRadius: "20px"}}
        className="w-48 h-48 md:w-60 md:h-60 object-contain"
      />
    </section>
  )
}
