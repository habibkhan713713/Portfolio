import { Inter, Montserrat, Roboto_Mono, Sansita_Swashed } from 'next/font/google'
 
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable:'--font-inter'
})
 
export const roboto = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable:'--font-roboto'
})

export const sanSwah = Sansita_Swashed({
  subsets: ['latin'],
  display: 'swap',
  variable:'--font-sansita'
})
export const fontMont = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable:'--font-mont'
})
