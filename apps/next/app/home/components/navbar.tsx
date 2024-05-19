'use client'

import Link from 'next/link'
import { Button, H4, Nav, Spinner, XStack } from 'tamagui'
import { useUserContext } from 'contexts/user-context'
import { logout } from 'services/auth'

export default function HomeNavbar() {
  const { user, isLoadingUser } = useUserContext()

  async function handleSignOut() {
    await logout()
  }

  return (
    <Nav backgroundColor={'lightblue'} opacity={0.95}>
      <XStack justifyContent="space-between" alignItems="center" p="$2">
        <H4 fontWeight="$4">ITwox test</H4>

        {
          isLoadingUser ? 
          (<Spinner size='large' />)
          : user ? (
          <XStack gap="$2">
            <Link href="/dashboard">
              <Button>Dashboard</Button>
            </Link>
            <Button
              onPress={handleSignOut}
            >Sign out</Button>
          </XStack>
        ) : (
          <Link href="/sign-in">
            <Button>Sign In</Button>
          </Link>
        )}
      </XStack>
    </Nav>
  )
}
