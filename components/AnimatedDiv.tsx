'use client'

// styles
import styles from './AnimatedDiv.module.scss'

// hooks
import { useRef, useEffect } from 'react'

interface Props {
	children: React.ReactNode
	cssClass?: string | undefined
	style?: object | undefined
}

const AnimatedDiv: React.FC<Props> = ({ children, cssClass, style }) => {
	const ref = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		const node = ref.current

		if (node) {
			const observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) {
						node.classList.add(styles.animated)
						observer.unobserve(node) // Stop observing after animation starts
					}
				},
				{ threshold: 0.1 }
			)

			observer.observe(node)

			return () => {
				observer.disconnect()
			}
		}
	}, [])

	return (
		<div ref={ref} className={cssClass} style={style}>
			{children}
		</div>
	)
}

export default AnimatedDiv
