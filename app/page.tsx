// components
import Hero from '@/components/Hero'
import Highlights from '@/components/Highlights'
import Panorama from '@/components/Panorama'
import Bio from '@/components/Bio'
import Services from '@/components/Services'
import Contact from '@/components/Contact'

export default function Home() {
	return (
		<main>
			<Hero />
			<Highlights />
			<Panorama />
			<Bio />
			<Services />
			<Contact />
		</main>
	)
}
