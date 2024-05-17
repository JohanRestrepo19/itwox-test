'use client'

import { createContext, useContext, useState } from 'react'

type User = {
  username: string
  password: string
}

type UserContextType = {
  user: User | undefined
}

//TODO: Remove after implementing Sign In logic
const testUser: User | undefined = {
  username: 'johan@mail.com',
  password: 'password',
}

export const UserContext = createContext<UserContextType | null>(null)

type Props = { children: React.ReactNode }

export default function UserContextProvider({ children }: Props) {
  const [user, _] = useState<User | undefined>(testUser)

  return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
}

export function useUserContext() {
  const user = useContext(UserContext)

  if (!user) {
    throw new Error('Trying to access User Context out of a valid UserContextProvider')
  }

  return user
}
