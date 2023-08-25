import { key } from '@/util/key'
import { google } from 'googleapis'
import { NextResponse } from 'next/server'

const SHEET_ID = '1SFcbu3MbNXhx9KB_LuYXQP1gscrKMcFNGKru--hX2Ak'
const client = new google.auth.JWT(key.client_email, null, key.private_key, [
  'https://www.googleapis.com/auth/spreadsheets'
])
const sheets = google.sheets({ version: 'v4', auth: client })

export async function GET () {
  const item = {
    id: 'a',
    title: 'a',
    description: 'a',
    price: 'a',
    discountPercentage: 'a',
    rating: 'a',
    stock: 'a',
    brand: 'a',
    category: 'a',
    thumbnail: 'a',
    images0: 'a',
    images1: 'a',
    images2: 'a',
    images3: 'a',
    images4: 'a',
    images5: 'a'
  }

  await sheets.spreadsheets.values.append({
    spreadsheetId: SHEET_ID,
    range: 'Pedidos!A:P',
    insertDataOption: 'INSERT_ROWS',
    valueInputOption: 'RAW',
    requestBody: {
      values: [Object.values(item)]
    }
  })
  return NextResponse.json({
    message: 'Create products'
  })
}
