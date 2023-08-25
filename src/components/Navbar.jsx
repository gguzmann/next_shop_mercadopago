'use client'
import Link from 'next/link'
import { useState } from 'react'

const navs = [
  {
    id: 0,
    title: 'Inicio',
    path: '/'
  },
  {
    id: 1,
    title: 'Comprar',
    path: '/comprar'
  },
  {
    id: 2,
    title: 'Productos',
    path: '/productos'
  },
  {
    id: 3,
    title: 'Ventas',
    path: '/ventas'
  }
]

export const Navbar = () => {
  const [page, setPage] = useState(0)
  return (
    <div className='min-h-screen bg-white px-5 shadow-xl p-2'>
      <div className='py-3 text-center'>
        <h1>TIENDA</h1>
      </div>
      <hr />
      <ul className='w-[200px] text-slate-600  mt-5'>
        {
            navs.map(link => (
              <Link onClick={() => setPage(link.id)} key={link.id} href={link.path}><div className={`p-2 hover:bg-slate-300 rounded-md ${page === link.id && 'bg-blue-600 text-white'}`}>{link.title}</div></Link>
            ))
        }
        {/* <Link href='/librerias'><div className='p-2 hover:bg-blue-600 hover:text-white rounded-md'>Librerias</div></Link>
        <Link href='/libros'><div className='p-2 hover:bg-blue-600 hover:text-white rounded-md'>Libros</div></Link> */}
      </ul>
    </div>
  )
}
