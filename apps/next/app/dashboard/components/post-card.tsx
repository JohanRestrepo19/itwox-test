'use client'

import { Card, type CardProps, Text, Heading, Paragraph, Spinner } from 'tamagui'
import { useQuery } from '@tanstack/react-query'
import type { Comment, Post } from 'lib/types'

// TODO: Move to services folder
async function fetchCommentsPerPost(postId: number): Promise<number> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
  const data: Comment[] = await res.json()
  return data.length || 0
}

type Props = CardProps & { post: Post }
export default function PostCard({ post, ...props }: Props) {
  const commentsQuery = useQuery({
    queryKey: ['comments', post.id],
    queryFn: () => fetchCommentsPerPost(post.id),
  })

  return (
    <Card width="$19" {...props}>
      <Card.Header padded>
        <Heading>{post.title}</Heading>
        <Paragraph>{post.body}</Paragraph>
        <Paragraph>{post.body}</Paragraph>
      </Card.Header>
      <Card.Footer padded>
        {commentsQuery.isPending ? <Spinner /> : <Text>Post comments: {commentsQuery.data}</Text>}
      </Card.Footer>
    </Card>
  )
}
