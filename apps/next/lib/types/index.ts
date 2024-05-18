import type { User as FirebaseUser } from "firebase/auth"

export type User = {
  username: string
}

export type UserCredentials = {
  email: string
  password: string
}

export type Post = {
  userId: number
  id: number
  title: string
  body: string
}

export type Comment = {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export type SignInResponse = {
  user?: FirebaseUser
  hasError: boolean
  errorMsg?: string
}

export type SignUpResponse = {
  hasError: boolean
  errorMsg?: string
}
