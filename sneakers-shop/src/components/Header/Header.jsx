import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<h1 className={styles.logo}>Сникер-магазин</h1>
				<nav className={styles.nav}>
					<NavLink
						to='/'
						className={({ isActive }) =>
							`${styles.link} ${isActive ? styles.active : ''}`
						}
					>
						Главная
					</NavLink>
					<NavLink
						to='/cart'
						className={({ isActive }) =>
							`${styles.link} ${isActive ? styles.active : ''}`
						}
					>
						Корзина
					</NavLink>
					<NavLink
						to='/contacts'
						className={({ isActive }) =>
							`${styles.link} ${isActive ? styles.active : ''}`
						}
					>
						Контакты
					</NavLink>
				</nav>
			</div>
		</header>
	)
}

export default Header
