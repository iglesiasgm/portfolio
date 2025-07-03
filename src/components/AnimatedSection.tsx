import { motion } from 'framer-motion'
import type { ReactNode } from 'react'


type Props = {
  children: ReactNode
}

const AnimatedSection = ({ children }: Props) => {
  return (
    <motion.div
      key={Math.random()} // fuerza la animación al cambiar sección
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  )
}

export default AnimatedSection
