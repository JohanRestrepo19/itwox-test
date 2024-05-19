'use client'

import UserContextProvider from 'contexts/user-context'
import { TamaguiProvider } from './TamaguiProvider'
import ReactQueryClientProvider from './react-query-client-provider'
import { ToastProvider } from '@tamagui/toast'
import { ToastViewport } from 'app/provider/ToastViewport'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <TamaguiProvider>
          <ToastProvider>
            <ReactQueryClientProvider>
              <UserContextProvider>
                <ToastViewport />
                {children}
              </UserContextProvider>
            </ReactQueryClientProvider>
          </ToastProvider>
        </TamaguiProvider>
      </body>
    </html>
  )
}
