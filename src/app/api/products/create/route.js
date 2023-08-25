import { key } from '@/util/key'
import { google } from 'googleapis'
import { NextResponse } from 'next/server'

const SHEET_ID = '1SFcbu3MbNXhx9KB_LuYXQP1gscrKMcFNGKru--hX2Ak'
const client = new google.auth.JWT(key.client_email, null, key.private_key, [
  'https://www.googleapis.com/auth/spreadsheets'
])
const sheets = google.sheets({ version: 'v4', auth: client })

export async function GET () {
  await sheets.spreadsheets.values.append({
    spreadsheetId: SHEET_ID,
    range: 'Data!A:C',
    insertDataOption: 'INSERT_ROWS',
    valueInputOption: 'RAW',
    requestBody: {
      values: [['1', '2', '3'], ['1', '2', '3'], ['1', '2', '3']]
    }
  })
  return NextResponse.json({
    message: 'Create products'
  })
}
