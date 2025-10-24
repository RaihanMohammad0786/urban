'use client'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {useLocale, useTranslations} from 'next-intl'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import Logo from '@/components/Logo'
export default function Nav(){
  const t = useTranslations(); const pathname = usePathname(); const locale = useLocale(); const seg = (s:string)=>`/${locale}${s}`
  const Active = ({href,label}:{href:string,label:string})=>(<Link href={href} className={`navlink ${pathname===href?'bg-white/10 text-white':''}`}>{label}</Link>)
  return (<header className='sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-[#0b1020cc]'><div className='container flex items-center justify-between h-16'><Link href={seg('/')}><Logo/></Link><nav className='hidden md:flex items-center gap-2'><Active href={seg('/')} label={t('nav.home')}/><Active href={seg('/products')} label={t('nav.products')}/><Active href={seg('/services')} label={t('nav.services')}/><Active href={seg('/divisions')} label={t('nav.divisions')}/><Active href={seg('/contact')} label={t('nav.contact')}/></nav><div className='flex items-center gap-2'><LanguageSwitcher/><a href='https://wa.me/27786552242' className='btn btn-primary hidden sm:inline-flex'>WhatsApp</a></div></div></header>)
}
