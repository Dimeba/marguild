'use client'

// styles
import styles from './Contact.module.scss'

// components
import AnimatedDiv from './AnimatedDiv'
import Image from 'next/image'

// hooks
import { useState } from 'react'

// content
import { contact } from '@/content/contact'

const Contact = () => {
	const [status, setStatus] = useState<string | null>(null)
	const [error, setError] = useState<string | null>(null)

	interface FormEvent extends React.FormEvent<HTMLFormElement> {}

	interface FormData {
		[key: string]: string
	}

	const handleFormSubmit = async (event: FormEvent): Promise<void> => {
		event.preventDefault()
		try {
			setStatus('pending')
			setError(null)
			const myForm = event.target as HTMLFormElement
			const formData = new FormData(myForm)
			const formObject: FormData = {}
			formData.forEach((value, key) => {
				formObject[key] = value as string
			})
			const res = await fetch('/__forms.html', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: new URLSearchParams(formObject).toString()
			})
			if (res.status === 200) {
				setStatus('ok')
			} else {
				setStatus('error')
				setError(`${res.status} ${res.statusText}`)
			}
		} catch (e) {
			setStatus('error')
			setError(`${e}`)
		}
	}

	return (
		<section id='contact' className={styles.contactSection}>
			<div className='content'>
				<AnimatedDiv cssClass={styles.titleSection}>
					<h2>Contact Us</h2>
					<hr />
				</AnimatedDiv>

				<div className={styles.contact}>
					<AnimatedDiv cssClass={styles.image}>
						<Image
							src='/slider/p04.jpg'
							fill
							style={{ objectFit: 'cover' }}
							alt='Contact Us Image'
						/>
					</AnimatedDiv>
					<AnimatedDiv cssClass={styles.content}>
						<form name='contact' onSubmit={handleFormSubmit}>
							<input type='hidden' name='form-name' value='contact' />
							<input
								type='text'
								name='firstName'
								placeholder='First Name'
								required
								value='Filip'
							/>
							<input
								type='text'
								name='lastName'
								placeholder='Last Name'
								required
							/>
							<input type='email' name='email' placeholder='Email' required />
							<input type='text' name='phone' placeholder='Phone' required />
							<textarea
								name='message'
								placeholder='Message'
								required
							></textarea>

							<label htmlFor='terms' className={styles.terms}>
								<input type='checkbox' name='terms' id='terms' required />I have
								read the Terms and Conditions
							</label>
							<button type='submit' disabled={status === 'pending'}>
								Send
							</button>
							{status === 'ok' && (
								<p className={styles.success}>Form submitted successfully</p>
							)}
						</form>
					</AnimatedDiv>
				</div>
			</div>

			<div className={`container ${styles.contactColumns}`}>
				<AnimatedDiv cssClass={styles.contactColumn}>
					<div className={styles.columnTitle}>
						<Image src='/email.svg' alt='Email Icon' width={20} height={20} />
						<h3>Email</h3>
					</div>
					{contact.email.map((email, index) => (
						<p key={index}>{email}</p>
					))}
				</AnimatedDiv>

				<AnimatedDiv cssClass={styles.contactColumn}>
					<div className={styles.columnTitle}>
						<Image src='/phone.svg' alt='Phone Icon' width={20} height={20} />
						<h3>Phone</h3>
					</div>
					{contact.phone.map((phone, index) => (
						<p key={index}>{phone}</p>
					))}
				</AnimatedDiv>

				<AnimatedDiv cssClass={styles.contactColumn}>
					<div className={styles.columnTitle}>
						<Image
							src='/address.svg'
							alt='Address Icon'
							width={20}
							height={20}
						/>
						<h3>Address</h3>
					</div>
					{contact.address.map((address, index) => (
						<p key={index}>{address}</p>
					))}
				</AnimatedDiv>
			</div>
		</section>
	)
}

export default Contact
