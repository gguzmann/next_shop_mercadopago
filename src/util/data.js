export const fetchAllProducts = async () => {
  const response = await fetch('http://localhost:3000/api/products')
  const { data } = await response.json()
  return data
}

export const fetchOneProduct = async (id) => {
  const url = 'https://dummyjson.com/products/' + id
  const response = await fetch(url)
  const data = await response.json()
  console.log(data)

  return data
}
