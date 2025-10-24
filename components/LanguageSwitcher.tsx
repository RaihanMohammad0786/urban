'use client'
import {useLocale} from 'next-intl'
import {usePathname, useRouter} from 'next/navigation'
import {locales} from '@/lib/i18n'
export default function LanguageSwitcher(){
  const locale = useLocale(); const router = useRouter(); const pathname = usePathname();
  return (<select className='bg-[#0d1228] border border-white/15 rounded-xl px-2 py-2 text-sm' value={locale} onChange={(e)=>{ const segs = pathname?.split('/').slice(2).join('/') || ''; router.push('/'+e.target.value+(segs?'/'+segs:'')); document.documentElement.dir = e.target.value==='ar' ? 'rtl' : 'ltr'; }} aria-label='Language'>{locales.map(l=><option key={l} value={l}>{l.toUpperCase()}</option>)}</select>)
}
