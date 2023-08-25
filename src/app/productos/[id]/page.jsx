import { fetchOneProduct } from '@/util/data'

export default async function LibroDetallePage ({ params }) {
  const libro = await fetchOneProduct(params.id)
  return (
    <>
      <h1>Detalle producto name: {libro.title}</h1>
    </>
  )
}
