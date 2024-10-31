import type { Metadata } from 'next'
import './globals.scss'

// componments
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
