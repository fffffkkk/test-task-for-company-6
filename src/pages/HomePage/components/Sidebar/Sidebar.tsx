import { Link } from '@tanstack/react-router';

import styles from './Sidebar.module.scss';

import type { SidebarProps } from './types';

export const Sidebar = ({ tags }: SidebarProps) => {
	return (
		<div className={styles.wrapper}>
			<nav className={styles.sidebar}>
				<ul className={styles.nav}>
					<li className={styles.nav__item}>
						<Link
							activeProps={{
								className: styles.nav__item_active,
							}}
							search={{
								tags: 'all',
							}}
						>
							Все темы
						</Link>
					</li>

					{tags.map((tag) => (
						<li className={styles.nav__item}>
							<Link
								activeProps={{
									className: styles.nav__item_active,
								}}
								search={{
									tags: tag,
								}}
							>
								{tag}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};
