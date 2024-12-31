import { NextResponse, NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  //  const { title } = await req.json();

  return NextResponse.json({ message: 'ok' }, { status: 201 })
}
