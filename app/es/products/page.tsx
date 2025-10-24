import dynamic from 'next/dynamic'
const Catalog = dynamic(()=>import('@/components/Catalog'), {ssr:false})
export default function Page(){ return (<main className='container py-10'><h1 className='text-3xl font-extrabold mb-6'>Products & Machinery</h1><p className='text-[#cbd5e1] mb-4'>We supply, install, and support complete tobacco manufacturing solutions.</p><Catalog/></main>) }