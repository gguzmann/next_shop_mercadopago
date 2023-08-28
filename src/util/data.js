export const enviroment = () => {
  // return 'http://localhost:3000/'
  return 'https://next-shop-mercadopago.vercel.app/'
}
export const dynamic = 'force-dynamic' // If you want no caching at all

export const fetchAllProducts = async () => {
  const response = await fetch(enviroment() + 'api/products', { next: { revalidate: 1 } })
  const { data } = await response.json()
  return data
}

// export const fetchOneProduct = async (id) => {
//   const response = await fetch(url + '/products/' + id)
//   const data = await response.json()
//   return data
// }
