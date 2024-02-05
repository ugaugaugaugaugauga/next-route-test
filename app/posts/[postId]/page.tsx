import { getPostById } from '@/app/actions/post'

const PostIdPage = async ({ params }: { params: { postId: string } }) => {
  const post = await getPostById(params.postId)
  if (!post) return

  return (
    <main className='h-full flex flex-col gap-3 justify-center items-center'>
      <p className='text-2xl'>{post.title}</p>
      <p className='text-sm'>{post.content}</p>
    </main>
  )
}

export default PostIdPage
