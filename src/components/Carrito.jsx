'use client'
import { useCarrito } from '@/store/storeCarrito'
import { enviroment } from '@/util/data'
import { useEffect, useState } from 'react'

export const Carrito = () => {
  const { items, total, setItems, setTotal } = useCarrito()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    console.log('a')
  }, [items])

  const clickPay = async () => {
    if (items.length < 1) return false
    const response = await fetch(enviroment() + 'api/create', {
      method: 'POST',
      body: JSON.stringify({
        items: [{
          title: 'producto',
          unit_price: total,
          currency_id: 'CLP',
          quantity: 1
        }]
      })
    })
    const data = await response.json()
    window.location.href = data.url
  }

  const limpiarCarro = () => {
    setItems([])
    setTotal(0)
  }

  return (
    <>
      <button onClick={() => setOpen(true)} className='hover:text-slate-500 text-lg flex items-center gap-1'>
        <i className='fa-solid fa-cart-shopping' />
        {items.length}
      </button>
      {/* <button onClick={() => setOpen(true)} className='top-3 hover:text-slate-500 right-20 fixed h-[50px] w-[50px] flex items-center justify-center gap-1  bg-green-200  '>
        <i class='fa-solid fa-cart-shopping' />
        {items.length}
      </button> */}
      <div className={`fixed top-0 left-0 w-full min-h-screen flex ${!open && 'hidden'}`}>
        <div onClick={() => setOpen(false)} className='bg-black bg-opacity-40 w-full' />
        <div className='bg-white w-[500px] shadow-2xl'>
          <div className='p-4 flex justify-between items-center'>
            <h3 className='sticky top-0'>Carro</h3>
            <button onClick={limpiarCarro} className='no-underline text-slate-300 mx-20 hover:text-slate-800 hover:underline'>Limpiar carrito ({items.length})</button>

            <button onClick={() => setOpen(false)}>
              X
            </button>
          </div>
          <hr />
          <div className='h-screen overflow-y-scroll'>
            {
            items.map((item, i) => (
              <div key={i} className='hover:bg-gray-100'>
                <div className='p-6 flex justify-between'>
                  <div className='flex gap-3'>
                    <img src={item.images1} className='h-10' alt='' />
                    {i} {item.title}
                  </div>
                  <div>
                    ${item.price}
                  </div>
                </div>
                <hr />
              </div>
            ))
          }
          </div>
          <div className='h-28 p-4 bg-white bottom-0 sticky border-t flex flex-col justify-between '>
            <div className='flex justify-between font-bold mb-1'>
              <h2>Total</h2>
              <h2>${total}</h2>
            </div>
            <button onClick={clickPay} className='w-full bg-sky-700 h-10 rounded-xl text-white py-2 hover:bg-opacity-40'>Pagar</button>

          </div>
        </div>
      </div>
    </>
  )
}
