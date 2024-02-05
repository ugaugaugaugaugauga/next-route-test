import db from '@/lib/db'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  const { title, content } = body

  const post = await db.post.create({
    data: {
      title,
      content,
    },
  })

  return NextResponse.json(post)
}
