'use client'
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
      <h1>Comprar</h1>
      <section className='flex flex-wrap gap-2 h-screen overflow-y-scroll'>
        {
          products.map(item => <Product key={item.id} item={item} />)
        }
      </section>
    </div>
  )
}
