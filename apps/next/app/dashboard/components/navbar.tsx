'use client'

import { Button, H4, Nav, XStack } from 'tamagui'
import { LogIn } from '@tamagui/lucide-icons'
import { logout } from 'services/auth'

export default function DashboardNavbar() {

  async function handleSignOut() {
    await logout()
  }

  return (
    <Nav backgroundColor={'lightblue'} opacity={0.95}>
      <XStack justifyContent="space-between" alignItems="center" p="$2">
        <H4 fontWeight="$4">Dashboard</H4>
        <Button iconAfter={LogIn} onPress={handleSignOut}>
          Sign Out
        </Button>
      </XStack>
    </Nav>
  )
}
