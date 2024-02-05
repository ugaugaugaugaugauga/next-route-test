import Link from 'next/link'
import { getAllPosts } from '../actions/post'

const PostPage = async () => {
  const posts = await getAllPosts()

  return (
    <main className='h-full flex justify-center items-center'>
      <ul className='space-y-4 text-center'>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`} key={post.id}>
              <span className='bg-slate-200 text-2xl'>{post.id}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default PostPage
