'use client'

import { createContext, useContext, useState } from 'react'

type User = {
  username: string
  password: string
}

//TODO: Remove after implementing Sign In logic
const testUser: User = {
  username: 'johan@mail.com',
  password: 'password',
}

type UserContextType = {
  user: User | undefined
}

export const UserContext = createContext<UserContextType | null>(null)

type Props = { children: React.ReactNode }

export default function UserContextProvider({ children }: Props) {
  const [user, _] = useState<UserContextType | null>(null)

  return <UserContext.Provider value={{ user: testUser }}>{children}</UserContext.Provider>
}

export function useUserContext() {
  const user = useContext(UserContext)

  if (!user) {
    throw new Error('Trying to access User Context out of a valid UserContextProvider')
  }

  return user
}
