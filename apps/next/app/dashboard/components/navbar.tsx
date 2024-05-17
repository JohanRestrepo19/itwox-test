'use client'

import { Button, H4, Nav, XStack } from 'tamagui'
import { LogIn } from '@tamagui/lucide-icons'
import { GestureResponderEvent } from 'react-native'

export default function DashboardNavbar() {
  function handleSignOut(event: GestureResponderEvent) {
    console.log('This is my event: ', event)
  }

  return (
    <Nav backgroundColor={'teal'} opacity={0.95}>
      <XStack justifyContent="space-between" alignItems="center" p="$2">
        <H4 fontWeight="$4">Dashboard</H4>
        <Button iconAfter={LogIn} onPress={handleSignOut}>
          Sign Out
        </Button>
      </XStack>
    </Nav>
  )
}
