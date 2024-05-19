import { Metadata } from 'next'
import PostList from './components/post-list'

export const metadata: Metadata = {
  title: 'Dashboard',
}

export default function DashboardPage() {
  return <PostList />
}
