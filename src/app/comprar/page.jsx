'use client'
import { Carrito } from '@/components/Carrito'
import { Product } from '@/components/Product'
import { fetchAllProducts } from '@/util/data'
import { useEffect, useState } from 'react'

export default function ComprarPage () {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetchAllProducts().then(resp => setProducts(resp))
  }, [])
  return (
    <div>
      <div className='flex justify-between mr-10 mb-2'>
        <h1 className='text-2xl'>Comprar</h1>
        <Carrito />
      </div>
      <section className='flex flex-wrap gap-2 h-screen overflow-y-scroll'>
        {
          products.map((item, i) => <Product key={i} item={item} />)
        }
      </section>
    </div>
  )
}
