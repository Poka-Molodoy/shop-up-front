import styles from './Footer.module.scss'

export function Footer() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.footer}>
				&copy; 2024 ХРОМ company.  Все права защищены
			</div>
		</div>
	)
}
