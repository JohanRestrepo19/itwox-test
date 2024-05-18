import { Button, Form, H3, type FormProps } from 'tamagui'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignInSchema, type SignInForm } from '../validations/sign-in'
import FormInput from './form-input'

type Props = Omit<FormProps, 'onSubmit'> & {
  title: string
  onSubmitForm: (data: SignInForm) => Promise<void>
}

export default function AuthForm({ onSubmitForm, title, ...props }: Props) {
  const {
    control,
    handleSubmit,
    formState: { errors, isLoading },
    reset,
  } = useForm<SignInForm>({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: zodResolver(SignInSchema),
  })

  //TODO: Implement Sign In logic
  async function handleSubmitForm(data: SignInForm) {
    console.log('Im going to submit')
    console.log('data: ', data)
    await onSubmitForm(data)
    reset()
  }

  return (
    <Form
      alignItems="center"
      minWidth={300}
      gap="$2"
      onSubmit={handleSubmit(handleSubmitForm)}
      borderWidth={3}
      borderRadius="$4"
      backgroundColor="snow"
      borderColor="$borderColor"
      padding="$8"
      {...props}
    >
      <H3>{title}</H3>
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
          <FormInput {...field} title="Password" error={errors.password?.message} secureTextEntry />
        )}
        name="password"
      />

      <Form.Trigger asChild>
        <Button disabled={isLoading}>Submit</Button>
      </Form.Trigger>
    </Form>
  )
}
