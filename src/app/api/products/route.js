import { key } from '@/util/key'
import { google } from 'googleapis'
import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

const SHEET_ID = process.env.SHEET_ID
const client = new google.auth.JWT(key.client_email, null, key.private_key, [
  'https://www.googleapis.com/auth/spreadsheets'
])
const sheets = google.sheets({ version: 'v4', auth: client })
export const revalidate = 3600 // revalidate the data at most every hour

export async function GET (req) {
  console.log('GET asd')
  const { data } = await sheets.spreadsheets.values.get({ spreadsheetId: SHEET_ID, range: 'Data!A:P' })
  const newData = data.values.map(item => ({
    id: item[0],
    title: item[1],
    description: item[2],
    price: item[3],
    discountPercentage: item[4],
    rating: item[5],
    stock: item[6],
    brand: item[7],
    category: item[8],
    thumbnail: item[9],
    images0: item[10] ?? '',
    images1: item[11] ?? '',
    images2: item[12] ?? '',
    images3: item[13] ?? '',
    images4: item[14] ?? '',
    images5: item[15] ?? ''
  }))
  const path = req.nextUrl.searchParams.get('path') || '/'
  revalidatePath(path)

  console.log(newData)
  newData.shift()
  return NextResponse.json({
    message: 'Get products',
    data: newData
  })
}
