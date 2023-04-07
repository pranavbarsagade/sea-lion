import { Nunito } from "next/font/google"

import './globals.css'

export const metadata = {
  title: 'Get Your Own Room',
  description: 'Clone of Airbnb',
}
const font = Nunito({
  subsets:["latin"]
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
