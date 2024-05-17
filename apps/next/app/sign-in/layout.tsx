'use client'

import { Container } from 'components'
import { Section } from 'tamagui'

type Props = {
  children: React.ReactNode
}

export default function SignInLayout({ children }: Props) {
  return (
    <Section>
      <Container>{children}</Container>
    </Section>
  )
}
