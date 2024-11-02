// styles
import styles from './Highlights.module.scss'

// components
import AnimatedDiv from './AnimatedDiv'

// content
import { highlights } from '@/content/about'

const Highlights = () => {
	return (
		<section id='about' className={styles.highlightsSection}>
			<div className='content'>
				<AnimatedDiv cssClass={styles.titleSection}>
					<h2>{highlights.title}</h2>
					<hr />
					<p className='largeText'>{highlights.description}</p>
				</AnimatedDiv>

				<div className={styles.highlights}>
					{highlights.items.map((item, index) => (
						<AnimatedDiv key={index} cssClass={styles.highlight}>
							<div>
								<div className={styles.numberContainer}>
									<h3 className={styles.number}>{item.number}</h3>
								</div>
							</div>
							<div className={styles.highlightContent}>
								<h3>{item.title}</h3>

								<p>{item.description}</p>
							</div>
						</AnimatedDiv>
					))}
				</div>
			</div>
		</section>
	)
}

export default Highlights
