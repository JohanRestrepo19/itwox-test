'use client'

import { Card, type CardProps, Text, Heading, Paragraph, Spinner } from 'tamagui'
import { useQuery } from '@tanstack/react-query'
import { fetchCommentsPerPost } from 'services'
import type { Post } from 'lib/types'

// TODO: Move to services folder

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
