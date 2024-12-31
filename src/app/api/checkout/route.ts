import { NextResponse, NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()

  console.log({ body })

  return NextResponse.json({ message: 'ok' }, { status: 201 })
}
