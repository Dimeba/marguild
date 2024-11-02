'use client'

// styles
import styles from './Header.module.scss'

// components
import Image from 'next/image'
import { Spin as Hamburger } from 'hamburger-react'

// hooks
import { useState, useEffect, use } from 'react'

const Header = () => {
	const menu = [
		{
			text: 'Home',
			url: '/'
		},
		{
			text: 'About',
			url: '/#about'
		},
		{
			text: 'Services',
			url: '/#services'
		}
	]

	const [hoveredItem, setHoveredItem] = useState<number | null>(null)
	const [openMenu, setOpenMenu] = useState<boolean>(false)
	const [logoWidth, setLogoWidth] = useState<number>(321)

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 768) {
				setLogoWidth(234)
			} else {
				setLogoWidth(321)
			}
		}

		window.addEventListener('resize', handleResize)
	}, [])

	return (
		<header className={styles.header}>
			<div className={`container ${styles.headerContainer}`}>
				<a href='/' aria-label='Homepage'>
					<Image
						src='/logo.png'
						width={logoWidth}
						height={logoWidth / 4.6}
						alt='Logo'
						className={styles.logo}
					/>
				</a>

				<div className={styles.hamburger}>
					<Hamburger size={24} toggled={openMenu} toggle={setOpenMenu} />
				</div>

				<nav className={`${styles.navigation} ${!openMenu && styles.hidden}`}>
					{menu.map((item, index) => (
						<a
							onMouseEnter={() => setHoveredItem(index)}
							onMouseLeave={() => setHoveredItem(null)}
							key={index}
							href={item.url}
							onClick={() => setOpenMenu(false)}
							aria-label={item.text}
						>
							<p
								className={
									hoveredItem != index && hoveredItem != null
										? styles.blurredText
										: ''
								}
							>
								{item.text}
							</p>
						</a>
					))}

					<a
						href='/#contact'
						aria-label='Link to contact form'
						className={styles.contactButton}
					>
						Contact
					</a>
				</nav>
			</div>
		</header>
	)
}

export default Header
