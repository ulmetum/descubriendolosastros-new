import { MY_SECRET_TOKEN } from '@/config'
import { revalidatePath } from 'next/cache'
import type { NextRequest } from 'next/server'

import { NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')

  if (secret !== MY_SECRET_TOKEN) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 })
  }

  const body = await request.json()

  const model = body.model
  const slug = body.entry.slug
  const paths = ['/blog']

  let pathToRevalidate = ''

  if (model === 'article') {
    pathToRevalidate = `/${slug}`
    paths.push(pathToRevalidate)
  }

  try {
    paths.map((path) => revalidatePath(path))

    return NextResponse.json({ revalidated: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({
      revalidated: false,
      message: 'Missing path to revalidate',
    })
  }
}
