import type { Metadata } from 'next'
import Sidenav from './ui/sidenav'

import { ttNormsPro } from './fonts/fonts'
import './globals.scss'


export const metadata: Metadata = {
  title: 'Фильмы, сериалы и мультфильмы смотреть онлайн в хорошем качестве. Онлайн-кинотеатр TVОЁ',
  description: 'Смотреть фильмы онлайн в хорошем качестве. Фильмов, которые собраны у нас, вам хватит надолго. Коллекция постоянно пополняется как новыми фильмами, сериалами так и мультфильмами.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${ttNormsPro.className} antialiased bg-background overflow-x-hidden`}>
        <div className='flex'>
          <Sidenav />
          <div className='w-full pl-[5.1rem]'>{children}</div>
        </div>
      </body>
    </html>
  )
}
