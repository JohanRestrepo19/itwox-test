'use client'

import { useUserContext } from 'contexts/user-context'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button, H4, Nav, XStack } from 'tamagui'

export default function HomeNavbar() {
  const { user } = useUserContext()
  const pathname = usePathname()

  // If I'm in other page different from home, then I no longer need to render this navbar
  // Because each page has its own layout which renders the respective navbar
  if (pathname !== '/') return null;

  return (
    <Nav backgroundColor={'teal'} opacity={0.95}>
      <XStack justifyContent="space-between" alignItems="center" p="$2">
        <H4 fontWeight="$4">ITwox test</H4>

        {user ? (
          <XStack gap="$2">
            <Link href="/dashboard">
              <Button>Dashboard</Button>
            </Link>
            <Button>Sign out</Button>
          </XStack>
        ) : (
          <Button>Sign In</Button>
        )}
      </XStack>
    </Nav>
  )
}
