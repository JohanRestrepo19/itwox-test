import { type Post } from 'lib/types'

export async function fetchPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data: Post[] = await res.json()
  return data.slice(0, 10) || []
}
