import { useTranslation } from 'react-i18next'
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
  const { t } = useTranslation()

  return (
    <section className="px-6 py-12 bg-[#f7f7ba] text-[#993399] h-full flex items-center justify-center">
      <div className="max-w-xl w-full text-center space-y-6">
        <h2 className="text-4xl font-bold" style={{ fontFamily: 'Geologica, sans-serif' }}>
          {t('contact.title')}
        </h2>

        <p style={{ fontFamily: 'Geologica, sans-serif' }}>
          {t('contact.description')}
        </p>

        <div className="space-y-8 text-lg/md:text-xl" style={{ fontFamily: 'Geologica, sans-serif' }}>
          <a href="mailto:giglesias035@gmail.com" className="flex items-center justify-center gap-2 hover:underline">
            <FaEnvelope /> giglesias035@gmail.com
          </a>

          <a href="https://www.linkedin.com/in/gabriel-mariano-iglesias-834767239/" target="_blank" className="flex items-center justify-center gap-2 hover:underline">
            <FaLinkedin /> LinkedIn
          </a>

          <a href="https://github.com/iglesiasgm" target="_blank" className="flex items-center justify-center gap-2 hover:underline">
            <FaGithub /> GitHub
          </a>

          <a href="https://wa.me/5492614175537" target="_blank" className="flex items-center justify-center gap-2 hover:underline">
            <FaWhatsapp /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
