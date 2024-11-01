// styles
import styles from './Bio.module.scss'

// components
import Image from 'next/image'
import AnimatedDiv from './AnimatedDiv'

// content
import { nick } from '@/content/about'

const Bio = () => {
	return (
		<section>
			<div className={`${styles.bio} container`}>
				<AnimatedDiv cssClass={styles.imageContainer}>
					<div className={styles.image}></div>
				</AnimatedDiv>

				<div className={styles.info}>
					<AnimatedDiv cssClass={styles.titleContainer}>
						<h2>Capt. Nick Bratos</h2>

						<hr />

						<p>{nick.bio}</p>
					</AnimatedDiv>

					<AnimatedDiv cssClass={styles.qualifications}>
						<h3>Education and Qualifications</h3>
					</AnimatedDiv>
				</div>
			</div>
		</section>
	)
}

export default Bio
