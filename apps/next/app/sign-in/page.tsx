'use client'

import { Button, Form, H1, Text, YStack } from 'tamagui'
import { Controller, useForm } from 'react-hook-form'
import FormInput from './components/form-input'

type SignInForm = {
  username: string
  password: string
}

export default function SignInPage() {
  function handleSubmitForm(data: SignInForm) {
    console.log('Im going to submit')
    console.log('data: ', data)
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInForm>({
    defaultValues: {
      username: '',
      password: '',
    },
  })

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
          render={({ field }) => <FormInput {...field} title="Username" />}
          name="username"
        />
        {errors.username?.message && <Text color="$red1">{errors.username.message}</Text>}

        <Controller
          control={control}
          render={({ field }) => <FormInput {...field} title="Password" secureTextEntry />}
          name="password"
        />
        {errors.password?.message && <Text color="$red1">{errors.password.message}</Text>}

        <Form.Trigger asChild>
          <Button>Submit</Button>
        </Form.Trigger>
      </Form>
    </YStack>
  )
}
