'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { type User } from 'firebase/auth'
import { onAuthStateChanged } from 'services/auth'

type UserContextType = {
  user: User | undefined
  isLoadingUser: boolean
}

export const UserContext = createContext<UserContextType | null>(null)

type Props = { children: React.ReactNode }

export default function UserContextProvider({ children }: Props) {
  const [user, setUser] = useState<User | undefined>(undefined)
  const [isLoadingUser, setIsLoadingUser] = useState<boolean>(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((user) => {
      setIsLoadingUser(true)

      if (user) setUser(user)
      else setUser(undefined)

      setIsLoadingUser(false)

      return () => unsubscribe()
    })
  }, [])

  return <UserContext.Provider value={{ user, isLoadingUser }}>{children}</UserContext.Provider>
}

export function useUserContext() {
  const user = useContext(UserContext)

  if (!user) {
    throw new Error('Trying to access User Context out of a valid UserContextProvider')
  }

  return user
}
