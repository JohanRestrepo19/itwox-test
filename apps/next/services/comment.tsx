import type { Comment } from "lib/types"

export async function fetchCommentsPerPost(postId: number): Promise<number> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
  const data: Comment[] = await res.json()
  return data.length || 0
}
