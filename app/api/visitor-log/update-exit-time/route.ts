import { updateExitTime } from '..'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { id } = await request.json()
  await updateExitTime(id)
  return NextResponse.json({ success: true })
}
