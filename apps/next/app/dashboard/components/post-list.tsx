'use client'

import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Spinner, Text, XStack } from 'tamagui'
import { type Post } from 'lib/types'
import PostCard from './post-card'

// TODO: Move to services folder
async function fetchPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data: Post[] = await res.json()
  return data.slice(0, 10) || []
}

export default function PostList() {
  const postsQuery = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  })

  // Remove after testing
  useEffect(() => {
    console.log('Data de los posts')
    console.log(postsQuery.data)
  }, [postsQuery])

  if (postsQuery.isPending) return <Spinner size="large" color="$green10" />

  if (postsQuery.isError) return <Text color="red">Hubo un error</Text>

  return (
    <XStack bg="$gray7" flex={1} flexWrap='wrap' justifyContent={'center'} gap="$4">
      {postsQuery.data.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </XStack>
  )
}
