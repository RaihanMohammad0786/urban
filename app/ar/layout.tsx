import type {Metadata} from 'next'
import '../globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import {NextIntlClientProvider} from 'next-intl'
import {getMessages} from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Urban Tobacco Machinery',
  description: 'Turnkey machinery & plant solutions for the global tobacco industry.'
}

export default async function LocaleLayout({children}: {children: React.ReactNode}) {
  const messages = await getMessages('ar' as any)
  return (
    <html lang='ar' dir='rtl'>
      <body>
       <NextIntlClientProvider locale='ar' messages={messages}>
          <Nav/>
          {children}
          <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
