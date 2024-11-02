// styles
import styles from './BulletPoint.module.scss'

interface Props {
	text: string
}

const BulletPoint: React.FC<Props> = ({ text }) => {
	return (
		<li className={styles.bulletPoint}>
			<p className={styles.circleIcon}>◎</p>
			<p className={styles.text}>{text}</p>
		</li>
	)
}

export default BulletPoint
