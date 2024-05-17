'use client'

import UserContextProvider from 'contexts/user-context'
import { TamaguiProvider } from './TamaguiProvider'
import HomeNavbar from './components/navbar'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <TamaguiProvider>
          <UserContextProvider>
            <HomeNavbar />
            {children}
          </UserContextProvider>
        </TamaguiProvider>
      </body>
    </html>
  )
}
