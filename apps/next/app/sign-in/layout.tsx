'use client'

import { Section } from 'tamagui'

type Props = {
  children: React.ReactNode
}

export default function SignInLayout({ children }: Props) {
  return <Section>{children}</Section>
}
