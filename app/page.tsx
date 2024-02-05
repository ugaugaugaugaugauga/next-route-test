'use client'

import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Home() {
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const router = useRouter()

  const onClick = async () => {
    try {
      await axios.post('/api/post', { title, content })
      console.log('success')
      setTitle('')
      setContent('')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <main className='h-full flex flex-col justify-center items-center gap-3'>
      <input
        type='text'
        value={title}
        onChange={(e) => {
          setTitle(e.target.value)
        }}
        className='bg-slate-100 border-2'
      />
      <input
        type='text'
        value={content}
        onChange={(e) => {
          setContent(e.target.value)
        }}
        className='bg-slate-100 border-2'
      />
      <button
        onClick={onClick}
        className='p-2 bg-blue-600 text-white rounded-md'
      >
        button
      </button>
      <button
        onClick={() => {
          router.push('/posts')
        }}
        className='p-2 bg-blue-600 text-white rounded-md'
      >
        posts
      </button>
    </main>
  )
}
