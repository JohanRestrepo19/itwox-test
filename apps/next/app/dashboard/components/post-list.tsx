'use client'

import { Button, Group, H1, Spinner, Text, XStack, YStack } from 'tamagui'
import PostCard from './post-card'
import { usePosts } from '../hooks/usePosts'

export default function PostList() {
  const { posts, isPending, isError, currentPage, goPrevPage, goNextPage } = usePosts()

  if (isPending) return <Spinner size="large" color="$green10" />

  if (isError) return <Text color="red">Hubo un error</Text>

  return (
    <YStack alignItems="center" gap="$4">
      <H1>Dashboard</H1>
      <Group orientation="horizontal">
        <Group.Item>
          <Button onPress={goPrevPage}>Prev</Button>
        </Group.Item>
        <Group.Item>
          <Button disabled>{currentPage}</Button>
        </Group.Item>
        <Group.Item>
          <Button onPress={goNextPage}>Next</Button>
        </Group.Item>
      </Group>
      <XStack flex={1} flexWrap="wrap" justifyContent={'center'} gap="$4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </XStack>
    </YStack>
  )
}
