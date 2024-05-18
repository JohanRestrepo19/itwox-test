import {
  AuthError,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { firebaseAuth } from 'setup/firebase'
import type { SignInResponse, SignUpResponse, UserCredentials } from 'lib/types'

export async function signUpWithEmail({
  email,
  password,
}: UserCredentials): Promise<SignUpResponse> {
  try {
    const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password)
    console.log('User credentails after creation: ', userCredential) //TODO: remove after testing
    return { hasError: false }
  } catch (err) {
    const authError = err as AuthError
    return { hasError: true, errorMsg: authError.message }
  }
}

export async function signInWithEmail({
  email,
  password,
}: UserCredentials): Promise<SignInResponse> {
  try {
    const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password)
    console.log('User credentials after login: ', userCredential) //TODO: Remove after testing
    return { user: userCredential.user, hasError: false }
  } catch (err) {
    const authError = err as AuthError
    return { hasError: true, errorMsg: authError.message }
  }
}

export async function logout(): Promise<void> {
  await signOut(firebaseAuth)
}
