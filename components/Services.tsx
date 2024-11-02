// styles
import styles from './Services.module.scss'

// components
import AnimatedDiv from './AnimatedDiv'
import Image from 'next/image'
import BulletPoint from './BulletPoint'

// content
import { services } from '@/content/services'

const Services = () => {
	return (
		<section id='services' className={styles.servicesSection}>
			<div className='content'>
				<AnimatedDiv cssClass={styles.titleSection}>
					<h2>Our Services</h2>
					<hr />
				</AnimatedDiv>

				<div className={styles.services}>
					{services.map((service, index) => (
						<div
							key={index}
							className={`${styles.service} ${
								index % 2 === 0 ? styles.even : styles.odd
							}`}
						>
							<AnimatedDiv
								cssClass={styles.imageContainer}
								style={{ gridArea: 'item1' }}
							>
								<div className={styles.border}></div>
								<div className={styles.image}>
									<Image
										src={service.img}
										layout='fill'
										objectFit='cover'
										alt={service.title[0]}
									/>
								</div>
							</AnimatedDiv>
							<AnimatedDiv
								cssClass={styles.content}
								style={{ gridArea: 'item2' }}
							>
								<div>
									<h3>{service.title[0]}</h3>
									<ul>
										{service.list.map((item, index) => (
											<BulletPoint key={index} text={item} />
										))}
									</ul>
								</div>
							</AnimatedDiv>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Services
