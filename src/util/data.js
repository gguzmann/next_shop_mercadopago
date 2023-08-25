export const enviroment = () => {
  return 'https://next-shop-mercadopago.vercel.app/'
}

export const fetchAllProducts = async () => {
  const response = await fetch(enviroment() + 'api/products')
  const { data } = await response.json()
  return data
}

// export const fetchOneProduct = async (id) => {
//   const response = await fetch(url + '/products/' + id)
//   const data = await response.json()
//   return data
// }
