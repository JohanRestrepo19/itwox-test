'use client'

import { Section } from 'tamagui'
import { Container } from 'components'
import HomeNavbar from './components/navbar'

type Props = { children: React.ReactNode }

export default function HomeLayout({ children }: Props) {
  return (
    <Section>
      <HomeNavbar />
      <Container>{children}</Container>
    </Section>
  )
}
