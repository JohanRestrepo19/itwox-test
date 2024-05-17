'use client'

import Link from 'next/link'
import { GestureResponderEvent } from 'react-native'
import { Button, H4, Nav, XStack } from 'tamagui'
import { useUserContext } from 'contexts/user-context'

export default function HomeNavbar() {
  const { user } = useUserContext()

  //TODO: Implement SignOut logic
  function handleSignOut(event: GestureResponderEvent) {}

  return (
    <Nav backgroundColor={'teal'} opacity={0.95}>
      <XStack justifyContent="space-between" alignItems="center" p="$2">
        <H4 fontWeight="$4">ITwox test</H4>

        {user ? (
          <XStack gap="$2">
            <Link href="/dashboard">
              <Button onPress={handleSignOut}>Dashboard</Button>
            </Link>
            <Button>Sign out</Button>
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
