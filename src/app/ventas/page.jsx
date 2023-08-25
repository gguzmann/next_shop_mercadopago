'use client'

import { useEffect, useState } from 'react'

export default function FacturaPage () {
  const [a, setA] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/api/products').then(resp => resp.json()).then(res => setA(res.data))
  }, [])
  return (
    <div>{a.map(x => (
      <div key={x.id}>
        {x.name}
        <div>{x.price}</div>
      </div>
    ))}
    </div>
  )
}
