import {
  AuthError,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged as onAuthStateChangedFirebase,
  NextOrObserver,
  User,
} from 'firebase/auth'
import { auth } from 'setup/firebase/client-app'
import type { SignInResponse, SignUpResponse, UserCredentials } from 'lib/types'

export function onAuthStateChanged(cb: NextOrObserver<User>) {
  return onAuthStateChangedFirebase(auth, cb)
}

export async function signUpWithEmail({
  email,
  password,
}: UserCredentials): Promise<SignUpResponse> {
  try {
    await createUserWithEmailAndPassword(auth, email, password)
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
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    return { user: userCredential.user, hasError: false }
  } catch (err) {
    const authError = err as AuthError
    return { hasError: true, errorMsg: authError.message }
  }
}

export async function logout(): Promise<void> {
  try {
    await signOut(auth)
  } catch (err) {
    console.error(err)
  }
}
