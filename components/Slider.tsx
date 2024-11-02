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

	const handleImageLoaded = () => {
		// Reset the size and transition duration
		setSize(1.2)
		setTransitionDuration(0)

		// Start the animation in the next tick
		setTimeout(() => {
			// Start scaling from 1.2 to 1 over 5 seconds
			setTransitionDuration(5)
			setSize(1)

			// After 5 seconds, move to next image
			timeoutRef.current = setTimeout(() => {
				setCurrentImage(prevImage => (prevImage + 1) % images.length)
			}, 5000)
		}, 50) // Small delay to ensure style updates
	}

	useEffect(() => {
		// Clear any existing timeouts when currentImage changes
		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current)
			}
		}
	}, [currentImage])

	return (
		<div className={styles.slider}>
			<Image
				src={images[currentImage]}
				alt={`Slide ${currentImage + 1}`}
				fill
				sizes='100vw'
				className={styles.image}
				onLoadingComplete={handleImageLoaded}
				style={{
					transform: `scale(${size})`,
					transition: `transform ${transitionDuration}s`
				}}
			/>
		</div>
	)
}

export default Slider
