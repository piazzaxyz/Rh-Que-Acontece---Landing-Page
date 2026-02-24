import type { Metadata, Viewport } from 'next'
import { Montserrat, Great_Vibes } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-great-vibes',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'RH que Acontece | Consultoria Estratégica de RH + IA',
  description:
    'Estruturamos seu RH, fortalecemos suas contratações e ensinamos sua equipe a trabalhar com Inteligência Artificial de forma estratégica.',
  generator: 'Rh que Acontece',
  icons: {
    icon: '/Cópia de dourado 1 sem fundo-1.svg',
  },
}

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${montserrat.variable} ${greatVibes.variable} font-sans antialiased bg-black-deep text-white-ice`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
