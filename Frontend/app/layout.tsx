import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Rajdhani } from 'next/font/google'
import { Providers } from '@/components/providers'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
})

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Mr. Peimbert Barbershop · Haircuts & Spa | Tijuana, B.C.',
  description: 'La barbería premium de Tijuana desde 2016. Cortes, barba, rasurado con navaja y spa. Keep Calm and Be Cool.',
  keywords: 'barbería Tijuana, Mr Peimbert, barbershop, haircuts, spa, barba, rasurado',
  openGraph: {
    title: 'Mr. Peimbert Barbershop · Haircuts & Spa',
    description: 'El estándar más alto de Tijuana desde 2016.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${rajdhani.variable} bg-background`}>
      <body className="font-sans antialiased bg-background text-foreground overflow-x-hidden">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
