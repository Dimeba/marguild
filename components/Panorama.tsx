// styles
import styles from './Panorama.module.scss'

// componets
import Image from 'next/image'

const Panorama = () => {
	return (
		<section className={styles.panorama}>
			<Image src='/panorama.jpg' alt='Panorama' fill />
		</section>
	)
}

export default Panorama
