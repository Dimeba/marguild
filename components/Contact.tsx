// styles
import styles from './Contact.module.scss'

// components
import AnimatedDiv from './AnimatedDiv'
import Image from 'next/image'
import { TfiEmail } from 'react-icons/tfi'
import { FiPhoneCall } from 'react-icons/fi'
import { FiMapPin } from 'react-icons/fi'

// content
import { contact } from '@/content/contact'

const Contact = () => {
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
							layout='fill'
							objectFit='cover'
							alt='Contact Us Image'
						/>
					</AnimatedDiv>
					<AnimatedDiv cssClass={styles.content}>
						<form>
							<input type='text' placeholder='First Name' required />
							<input type='text' placeholder='Last Name' required />
							<input type='email' placeholder='Email' required />
							<input type='text' placeholder='Phone' required />
							<textarea placeholder='Message' required></textarea>

							<label htmlFor='terms' className={styles.terms}>
								<input type='checkbox' name='terms' id='terms' required />I have
								read the Terms and Conditions
							</label>
							<button type='submit'>Send</button>
						</form>
					</AnimatedDiv>
				</div>
			</div>

			<div className={`container ${styles.contactColumns}`}>
				<AnimatedDiv cssClass={styles.contactColumn}>
					<div className={styles.columnTitle}>
						<TfiEmail size={20} />
						<h3>Email</h3>
					</div>
					{contact.email.map((email, index) => (
						<p key={index}>{email}</p>
					))}
				</AnimatedDiv>

				<AnimatedDiv cssClass={styles.contactColumn}>
					<div className={styles.columnTitle}>
						<FiPhoneCall size={20} />
						<h3>Phone</h3>
					</div>
					{contact.phone.map((phone, index) => (
						<p key={index}>{phone}</p>
					))}
				</AnimatedDiv>

				<AnimatedDiv cssClass={styles.contactColumn}>
					<div className={styles.columnTitle}>
						<FiMapPin size={20} />
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
