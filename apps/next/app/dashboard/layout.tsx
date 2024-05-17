'use client'

import DashboardNavbar from "./components/navbar"

type Props = {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: Props) {
  return (
    <section >
      <DashboardNavbar />
      {children}
    </section>
  )
}
