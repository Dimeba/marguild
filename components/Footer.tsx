// styles
import styles from './Footer.module.scss'

// components
import Link from 'next/link'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={`${styles.basicInfo} container`}>
				<p>© 2024 | All rights reserved by MARGUILD LLC</p>
				<Link
					href='/terms-and-conditions'
					aria-label='Link to Terms & Conditions page.'
				>
					<p>Terms & Conditions</p>
				</Link>
			</div>
		</footer>
	)
}

export default Footer
