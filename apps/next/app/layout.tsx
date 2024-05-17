'use client'

import UserContextProvider from 'contexts/user-context'
import { TamaguiProvider } from './TamaguiProvider'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <TamaguiProvider>
          <UserContextProvider>
            {children}
          </UserContextProvider>
        </TamaguiProvider>
      </body>
    </html>
  )
}
