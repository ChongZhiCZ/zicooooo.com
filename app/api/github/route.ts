import { NextResponse } from 'next/server'
import { getGitHubContributions } from './service'

export async function GET() {
  try {
    const data = await getGitHubContributions()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching GitHub data:', error)
    return NextResponse.json({ error: 'Failed to fetch GitHub data' }, { status: 500 })
  }
}
