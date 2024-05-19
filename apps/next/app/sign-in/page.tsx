'use client'

import { useRouter } from 'next/navigation'
import { H1, XStack, YStack } from 'tamagui'
import { type SignInForm } from './validations/sign-in'
import AuthForm from './components/form'
import { signInWithEmail, signUpWithEmail } from 'services/auth'
import { useToastController } from '@tamagui/toast'
import { CustomToast } from 'components'

export default function SignInPage() {
  const router = useRouter()
  const toast = useToastController()

  async function handleSignUp(data: SignInForm) {
    const res = await signUpWithEmail({ email: data.username, password: data.password })

    if (res.hasError) {
      console.error(res.errorMsg)
      toast.show('Error', { message: res.errorMsg })
      return
    }
  }

  async function handleSignIn(data: SignInForm) {
    const res = await signInWithEmail({ email: data.username, password: data.password })

    if (res.hasError) {
      console.error(res.errorMsg)
      toast.show('Error', { message: res.errorMsg })
      return
    }

    router.push('/dashboard')
  }

  return (
    <YStack gap="$4" alignItems="center">
      <CustomToast />
      <H1>Auth</H1>
      <XStack gap="$4" flexWrap="wrap" alignItems="center" justifyContent="center">
        <AuthForm title={'Sign Up'} onSubmitForm={handleSignUp} backgroundColor={'lightblue'} />
        <AuthForm title={'Sign In'} onSubmitForm={handleSignIn} />
      </XStack>
    </YStack>
  )
}
