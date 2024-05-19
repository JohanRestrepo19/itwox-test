import { useQuery } from '@tanstack/react-query'
import { Post } from 'lib/types'
import { useEffect, useState } from 'react'
import { fetchPosts } from 'services'

export function usePosts(pageSize = 10) {
  const postsQuery = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  })

  const [posts, setPosts] = useState<Post[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [maxPage, setMaxPage] = useState<number>(0)

  function goNextPage() {
    if (currentPage + 1 <= maxPage) {
      setCurrentPage(currentPage + 1)
    }
  }

  function goPrevPage() {
    if (currentPage - 1 > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  useEffect(() => {
    if (!postsQuery.data) return

    setMaxPage(Math.ceil(postsQuery.data.length / pageSize))
  }, [postsQuery.data])

  useEffect(() => {
    // Cuando cambie la página tengo que recalcular los items que muestro
    if (!postsQuery.data) return

    let hi = pageSize * currentPage
    const lo = hi - pageSize

    if (hi > postsQuery.data.length) hi = postsQuery.data.length

    const newPosts = postsQuery.data.slice(lo, hi)

    setPosts(newPosts)
  }, [postsQuery.data, currentPage])

  return {
    posts,
    isPending: postsQuery.isPending,
    isError: postsQuery.isError,
    currentPage,
    goPrevPage,
    goNextPage,
  }
}
