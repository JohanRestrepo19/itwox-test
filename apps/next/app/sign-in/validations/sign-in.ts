import { z } from 'zod'

export const SignInSchema = z.object({
  username: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(8, { message: 'Pasword must be at least 8 characters' }),
})

export type SignInForm = z.infer<typeof SignInSchema>
