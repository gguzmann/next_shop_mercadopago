'use client'

import { fetchAllProducts } from '@/util/data'
import { useEffect, useState } from 'react'

export default function FacturaPage () {
  const [a, setA] = useState([])
  useEffect(() => {
    fetchAllProducts().then(resp => setA(resp))
  }, [])
  return (
    <div>{a.map((x, i) => (
      <div key={i}>
        {x.name}
        <div>{x.price}</div>
      </div>
    ))}
    </div>
  )
}
