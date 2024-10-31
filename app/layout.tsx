import type { Metadata } from 'next'
import './globals.scss'

// fonts
import { Lato } from 'next/font/google'
const lato = Lato({
	subsets: ['latin'],
	weight: '400'
})

export const metadata: Metadata = {
	title: 'Marguild',
	description: 'Marine and energy consultants',
	icons: {
		icon: '/favicon.jpg'
	}
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={lato.className}>{children}</body>
		</html>
	)
}
