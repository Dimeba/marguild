'use client'

// styles
import styles from './Slider.module.scss'

// components
import Image from 'next/image'

// hooks
import { useState, useEffect, useRef } from 'react'

interface Props {
	images: string[]
}

const Slider: React.FC<Props> = ({ images }) => {
	const [currentImage, setCurrentImage] = useState<number>(0)
	const [size, setSize] = useState<number>(1.2)
	const [transitionDuration, setTransitionDuration] = useState<number>(0)
	const timeoutRef = useRef<NodeJS.Timeout | null>(null)

	const startAnimation = () => {
		// Start scaling from 1.2 to 1 over 5 seconds
		setTransitionDuration(5)
		setSize(1)

		// After 5 seconds, reset size and move to next image
		timeoutRef.current = setTimeout(() => {
			setTransitionDuration(0)
			setSize(1.2)
			setCurrentImage(prevImage => (prevImage + 1) % images.length)

			// Small delay before starting the next animation
			timeoutRef.current = setTimeout(() => {
				startAnimation()
			}, 250)
		}, 5000)
	}

	useEffect(() => {
		startAnimation()

		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current)
			}
		}
	}, [])

	return (
		<div className={styles.slider}>
			<Image
				src={images[currentImage]}
				alt={`Slide ${currentImage + 1}`}
				fill
				sizes='100vw'
				className={styles.image}
				style={{
					transform: `scale(${size})`,
					transition: `transform ${transitionDuration}s`
				}}
			/>
		</div>
	)
}

export default Slider
