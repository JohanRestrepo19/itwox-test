'use client'

import { useLayoutEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Section } from 'tamagui'
import { Container } from 'components'
import DashboardNavbar from './components/navbar'
import { useUserContext } from 'contexts/user-context'

type Props = { children: React.ReactNode }

export default function DashboardLayout({ children }: Props) {
  const {user, isLoadingUser} = useUserContext()
  const router = useRouter()

  // I'm using useLayoutEffect because I want to run this validation for protected routes
  // Before the user can see anything.
  // And the isLoadingUser is just to make sure that if I refresh the protected route
  // It doesn't immediately navigate to the home page
  useLayoutEffect(() => {
    if (!isLoadingUser && !user) {
      router.replace('/')
    }
  }, [user, isLoadingUser])

  return (
    <Section>
      <DashboardNavbar />
      <Container>{children}</Container>
    </Section>
  )
}
