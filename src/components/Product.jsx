'use client'

import { useCarrito } from '@/store/storeCarrito'

export const Product = ({ item }) => {
  const { setItems, items, total, setTotal } = useCarrito()

  const addToCart = () => {
    const newItems = [...items, item]
    console.log(newItems)
    setItems(newItems)
    setTotal(total + Number(item.price))
  }

  return (
    <div className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow'>
      <div className='w-full flex justify-center h-[200px] '>
        <div className='w-[200px]'>
          <img className='p-8 rounded-t-lg' width='500' src={item.images1} alt='product image' />
        </div>
      </div>
      <div className='px-5 pb-5'>
        <div>
          <h5 className='text-xl font-semibold tracking-tight text-gray-900 truncate'>{item.title}</h5>
        </div>
        <div className=''>
          <div className='flex items-center mt-2.5 mb-5'>
            {
              item.rating > 0 &&
              new Array(Math.floor(Number(item.rating))).fill('').map((x, i) =>
                <svg key={i} className='w-4 h-4 text-yellow-300 mr-1' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 22 20'>
                  <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                </svg>
              )
            }

            {
              item.rating > 0 &&
              new Array(5 - Math.floor(item.rating)).fill('').map((x, i) =>
                <svg key={i} className='w-4 h-4 text-gray-300 mr-1' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 22 20'>
                  <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                </svg>
              )
            }

            <span className='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  ml-3'>{item.rating}</span>
          </div>
          <div className='flex items-center justify-between'>
            <span className='text-3xl font-bold text-gray-900 '>${item.price}</span>
            <button onClick={addToCart} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center '>Add to cart</button>
          </div>
        </div>
      </div>
    </div>

  )
}
