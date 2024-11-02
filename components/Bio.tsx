// styles
import styles from './Bio.module.scss'

// components
import Image from 'next/image'
import AnimatedDiv from './AnimatedDiv'
import BulletPoint from './BulletPoint'

// content
import { nick } from '@/content/about'

const Bio = () => {
	return (
		<section id='about' className={styles.bioSection}>
			<div className={`${styles.bio} container`}>
				<AnimatedDiv cssClass={styles.imageContainer}>
					<div className={styles.border}></div>
					<div className={styles.image}>
						<Image
							src='/nick.jpg'
							alt='Nick Bratos'
							fill
							style={{ objectFit: 'cover' }}
						/>
					</div>
				</AnimatedDiv>

				<div className={styles.info}>
					<div className={styles.content}>
						<AnimatedDiv cssClass={styles.titleContainer}>
							<h2>Capt. Nick Bratos</h2>

							<hr />

							<p>{nick.bio}</p>
						</AnimatedDiv>

						<AnimatedDiv cssClass={styles.qualifications}>
							<h3>Education and Qualifications</h3>

							<ul>
								{nick.qualifications.map((qualification, index) => (
									<BulletPoint key={index} text={qualification} />
								))}
							</ul>
						</AnimatedDiv>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Bio
