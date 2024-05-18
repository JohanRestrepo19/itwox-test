'use client'

import { Container } from 'components'
import DashboardNavbar from './components/navbar'
import { Section } from 'tamagui'

type Props = {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: Props) {
  return (
    <Section>
      <DashboardNavbar />
      <Container>{children}</Container>
    </Section>
  )
}
