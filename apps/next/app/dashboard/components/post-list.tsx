'use client'

import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Spinner, Text, XStack } from 'tamagui'
import PostCard from './post-card'
import { fetchPosts } from 'services'

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
