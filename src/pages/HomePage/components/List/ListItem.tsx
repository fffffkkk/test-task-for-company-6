import styles from './ListItem.module.scss';

import type { ListItemProps } from './types';

export const ListItem = ({ name, image, bgColor }: ListItemProps) => {
	return (
		<li className={styles.item}>
			<div className={styles.item__header} style={{ backgroundColor: bgColor }}>
				<img src={image} width={144} height={144} />
			</div>

			<div className={styles.item__footer}>{name}</div>
		</li>
	);
};
