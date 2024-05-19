import type { Comment } from "lib/types"

export async function fetchCommentsPerPost(postId: number): Promise<number> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_JSON_PLACEHOLDER_URL}/posts/${postId}/comments`)
  const data: Comment[] = await res.json()
  return data.length || 0
}
