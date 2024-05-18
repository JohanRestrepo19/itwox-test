'use client'

import { useRouter } from 'next/navigation'
import { H1, XStack, YStack } from 'tamagui'
import { type SignInForm } from './validations/sign-in'
import AuthForm from './components/form'
import { signInWithEmail, signUpWithEmail } from 'services/auth'

export default function SignInPage() {
  const router = useRouter()

  async function handleSignUp(data: SignInForm) {
    const res = await signUpWithEmail({ email: data.username, password: data.password })

    if (res.hasError) {
      console.error(res.errorMsg)
      return
    }

    // Después de que se crea el usuario existosamente se incicia la sesión automaticamente?
  }

  async function handleSignIn(data: SignInForm) {
    const res = await signInWithEmail({ email: data.username, password: data.password })

    if (res.hasError) {
      console.error(res.errorMsg)
      return
    }

    router.push('/dashboard')
  }

  return (
    <YStack gap="$4" alignItems='center'>
      <H1>Auth</H1>
      <XStack gap="$4" flexWrap='wrap' alignItems='center' justifyContent='center'>
        <AuthForm title={'Sign Up'} onSubmitForm={handleSignUp} backgroundColor={'lightblue'} />
        <AuthForm title={'Sign In'} onSubmitForm={handleSignIn} />
      </XStack>
    </YStack>
  )
}
