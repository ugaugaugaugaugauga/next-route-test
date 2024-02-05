import db from '@/lib/db'

export async function getAllPosts() {
  return db.post.findMany()
}

export async function getPostById(id: string) {
  return db.post.findUnique({
    where: {
      id,
    },
  })
}
