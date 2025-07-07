

export const Section = {
  Hero: 'hero',
  About: 'about',
  Education: 'education',
  Tools: 'tools',
  Experience: 'experience',
  Contact: 'contact',
  Approach: 'approach'
} as const

export type Section = typeof Section[keyof typeof Section]
