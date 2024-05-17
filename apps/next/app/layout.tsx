'use client'

import UserContextProvider from 'contexts/user-context'
import { TamaguiProvider } from './TamaguiProvider'
import HomeNavbar from './components/navbar'
import { Container } from 'components'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <TamaguiProvider>
          <UserContextProvider>
            <HomeNavbar />
            <Container>{children}</Container>
          </UserContextProvider>
        </TamaguiProvider>
      </body>
    </html>
  )
}
