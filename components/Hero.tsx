// styles
import styles from './Hero.module.scss'

// components
import Image from 'next/image'
import Slider from './Slider'
import AnimatedDiv from './AnimatedDiv'

// content
import { hero } from '@/content/hero'

const Hero = () => {
	return (
		<section className={styles.hero}>
			<AnimatedDiv cssClass={`container ${styles.content}`}>
				<h1 className={styles.title}>
					{hero.titleLine1} <br /> {hero.titleLine2}
				</h1>
				<hr />
				<p className={styles.subtitle}>{hero.subtitle}</p>
				<div className={styles.locationBased}>
					<div className={styles.location}>
						<Image src={hero.usFlag} width={22} height={22} alt='US Flag' />
						<p>{hero.location}</p>
						<Image
							src={hero.texasFlag}
							width={22}
							height={22}
							alt='Texas Flag'
						/>
					</div>
				</div>
			</AnimatedDiv>

			<Slider images={hero.images} />
		</section>
	)
}

export default Hero
