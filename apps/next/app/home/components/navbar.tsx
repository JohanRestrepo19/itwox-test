'use client'

import Link from 'next/link'
import { Button, H4, Nav, XStack } from 'tamagui'
import { useUserContext } from 'contexts/user-context'
import { logout } from 'services/auth'

export default function HomeNavbar() {
  const { user } = useUserContext()

  async function handleSignOut() {
    console.log('Voy a hacer logout')
    await logout()
  }

  return (
    <Nav backgroundColor={'teal'} opacity={0.95}>
      <XStack justifyContent="space-between" alignItems="center" p="$2">
        <H4 fontWeight="$4">ITwox test</H4>

        {user ? (
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
