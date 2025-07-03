export const Section = {
  Hero: 'hero',
  About: 'about',
  Education: 'education',
  Tools: 'tools',
  Experience: 'experience',
  Contact: 'contact',
} as const

export type Section = typeof Section[keyof typeof Section]
