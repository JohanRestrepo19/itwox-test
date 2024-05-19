import { type Post } from 'lib/types'

export async function fetchPosts(): Promise<Post[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_JSON_PLACEHOLDER_URL}/posts`)
  const data: Post[] = await res.json()
  return data || []
}
