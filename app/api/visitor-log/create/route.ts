// app/api/visitor/create/route.ts
import { createVisitorLog } from '@/app/api/visitor-log'
import { NextResponse } from 'next/server'
import { headers } from 'next/headers'

export async function POST() {
  const headersList = await headers()
  const ipAddress = headersList.get('x-forwarded-for') || '0.0.0.0'
  const userAgent = headersList.get('user-agent')

  const visitorId = await createVisitorLog({ ipAddress, userAgent })
  return NextResponse.json({ id: visitorId })
}
