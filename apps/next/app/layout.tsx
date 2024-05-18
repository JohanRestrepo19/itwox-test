'use client'

import UserContextProvider from 'contexts/user-context'
import { TamaguiProvider } from './TamaguiProvider'
import ReactQueryClientProvider from './react-query-client-provider'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <TamaguiProvider>
          <ReactQueryClientProvider>
            <UserContextProvider>{children}</UserContextProvider>
          </ReactQueryClientProvider>
        </TamaguiProvider>
      </body>
    </html>
  )
}
