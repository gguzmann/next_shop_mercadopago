'use client'
import { fetchAllProducts } from '@/util/data'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function LibroPage () {
  const [libros, setLibros] = useState([])
  useEffect(() => {
    fetchAllProducts().then(resp => setLibros(resp))
  }, [])
  return (
    <div className='bg-white m-5 p-5 rounded-xl shadow-lg'>
      <div className='p-3 flex justify-center'>
        <h1>Productos</h1>
      </div>

      <div className='relative overflow-y-scroll max-h-[500px]'>
        <table className='w-full text-sm text-left text-gray-500'>
          <thead className='text-xs text-gray-700 uppercase bg-blue-200 sticky top-0'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Product name
              </th>
              <th scope='col' className='px-6 py-3'>
                Color
              </th>
              <th scope='col' className='px-6 py-3'>
                Category
              </th>
              <th scope='col' className='px-6 py-3'>
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {
                libros.map((libro, i) => (
                  <tr key={i} className='bg-white border-b hover:bg-gray-50'>
                    <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap '>
                      <Link href={'/productos/' + libro.id}> {libro.title} </Link>
                    </th>
                    <td className='px-6 py-4'>
                      {libro.brand}
                    </td>
                    <td className='px-6 py-4'>
                      {libro.category}
                    </td>
                    <td className='px-6 py-4'>
                      ${libro.price}
                    </td>
                  </tr>

                ))
            }
          </tbody>
        </table>
      </div>

    </div>
  )
}
