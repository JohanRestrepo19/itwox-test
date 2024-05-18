'use client'

import { useRouter } from 'next/navigation'
import { Button, Form, H1, YStack } from 'tamagui'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import FormInput from './components/form-input'
import { SignInSchema, type SignInForm } from './validations/sign-in'

export default function SignInPage() {
  const router = useRouter()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInForm>({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: zodResolver(SignInSchema),
  })

  //TODO: Implement Sign In logic
  function handleSubmitForm(data: SignInForm) {
    console.log('Im going to submit')
    console.log('data: ', data)
    router.push('/dashboard')
  }

  return (
    <YStack gap="$4">
      <H1>Sign In</H1>
      <Form
        alignItems="center"
        minWidth={300}
        gap="$2"
        onSubmit={handleSubmit(handleSubmitForm)}
        borderWidth={1}
        borderRadius="$4"
        backgroundColor="$background"
        borderColor="$borderColor"
        padding="$8"
      >
        <Controller
          control={control}
          render={({ field }) => (
            <FormInput {...field} title="Username" error={errors.username?.message} />
          )}
          name="username"
        />

        <Controller
          control={control}
          render={({ field }) => (
            <FormInput
              {...field}
              title="Password"
              error={errors.password?.message}
              secureTextEntry
            />
          )}
          name="password"
        />

        <Form.Trigger asChild>
          <Button>Submit</Button>
        </Form.Trigger>
      </Form>
    </YStack>
  )
}
