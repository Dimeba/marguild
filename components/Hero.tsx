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
			<div className={`container ${styles.content}`}>
				<h1 className={`${styles.title} ${styles.anim1}`}>{hero.titleLine1}</h1>
				<h1 className={`${styles.title} ${styles.anim2}`}>{hero.titleLine2}</h1>
				<hr />
				<p className={`${styles.subtitle} ${styles.anim3}`}>
					{hero.subtitle}{' '}
					<span>
						<Image src={hero.usFlag} width={22} height={22} alt='US Flag' />{' '}
						{hero.location}{' '}
						<Image
							src={hero.texasFlag}
							width={22}
							height={22}
							alt='Texas Flag'
						/>
					</span>
				</p>
				{/* <div className={styles.locationBased}>
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
				</div> */}
			</div>

			<Slider images={hero.images} />
		</section>
	)
}

export default Hero
