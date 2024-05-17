'use client'

import { Button, H4, Nav, XStack } from 'tamagui'

export default function DashboardNavbar() {
  return (
    <Nav backgroundColor={'teal'} opacity={0.95}>
      <XStack justifyContent="space-between" alignItems="center" p="$2">
        <H4 fontWeight="$4">ITwox test</H4>
      </XStack>
    </Nav>
  )
}


