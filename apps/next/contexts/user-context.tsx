'use client'

import { createContext, useContext, useState } from 'react'
import { type User } from 'lib/types'

type UserContextType = {
  user: User | undefined
}

//TODO: Remove after implementing Sign In logic
const testUser: User | undefined = {
  username: 'johan@mail.com',
}

export const UserContext = createContext<UserContextType | null>(null)

type Props = { children: React.ReactNode }

export default function UserContextProvider({ children }: Props) {
  const [user, _] = useState<User | undefined>(undefined)

  return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
}

export function useUserContext() {
  const user = useContext(UserContext)

  if (!user) {
    throw new Error('Trying to access User Context out of a valid UserContextProvider')
  }

  return user
}
