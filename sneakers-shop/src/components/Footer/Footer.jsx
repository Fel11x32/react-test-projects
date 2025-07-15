import React from 'react'
import styles from './Footer.module.scss'
import facebookIcon from '../../assets/Vector(16).svg'
import twitterIcon from '../../assets/Vector(17).svg'
import instagramIcon from '../../assets/Vector(18).svg'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.left}>
					<h4>Контакты</h4>
					<div className={styles.content}>
						<a href='#'>8 800 000 00 00</a>
						<a href='#'>emailexample@email.com</a>
						<a href='#'>2024 Сникер-магазин. Все права защищены</a>
					</div>
				</div>

				<div className={styles.right}>
					<div className={styles.socials}>
						<img src={facebookIcon} alt='Facebook' />
						<img src={twitterIcon} alt='Twitter' />
						<img src={instagramIcon} alt='Instagram' />
					</div>
					<div className={styles.subscribe}>
						<input type='email' id='email' placeholder='Введите свой email:' />
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
