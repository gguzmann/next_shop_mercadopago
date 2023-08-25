import mercadopago from 'mercadopago'
import { NextResponse } from 'next/server'

export async function POST (req) {
  const { items } = await req.json()

  mercadopago.configure({
    access_token: process.env.MERCADOPAGO_ACCESS_TOKEN
  })
  const result = await mercadopago.preferences.create({
    items
  })
  console.log('result', result)

  return NextResponse.json({
    message: 'create order',
    url: result.body.init_point
  })
}
