import './globals.css'

export const metadata = {
  title: 'Cruisebound Assessment',
  description: 'Cruisebound assesment Luis Machillanda',
}

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
