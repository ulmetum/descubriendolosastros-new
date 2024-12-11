import { revalidatePath } from 'next/cache'
import type { NextRequest } from 'next/server'

import { NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')

  if (secret !== process.env.MY_SECRET_TOKEN) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 })
  }

  // console.log({ request })

  const body = await request.json()
  // console.log({ body })

  const model = body.model
  const slug = body.entry.slug
  const paths = ['/blog']

  let pathToRevalidate = ''

  if (model === 'article') {
    pathToRevalidate = `/${slug}`
    paths.push(pathToRevalidate)

    // console.log('Revalidating article', pathToRevalidate)
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

  // if (path) {
  //   revalidatePath(path)
  //   return Response.json({ revalidated: true, now: Date.now() })
  // }

  // return Response.json({
  //   revalidated: false,
  //   now: Date.now(),
  //   message: "Missing path to revalidate",
  // })
}
