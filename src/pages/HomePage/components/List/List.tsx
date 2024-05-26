import { useSearch } from '@tanstack/react-router';

import { ListItem } from './ListItem';

import styles from './List.module.scss';

import type { ListProps } from './types';

export const List = ({ courses }: ListProps) => {
	const { tags } = useSearch({ strict: false });

	const filteredCoursesByTags =
		tags === 'all'
			? courses
			: courses.filter((course) => course.tags.includes(tags));

	return (
		<ul className={styles.courses}>
			{filteredCoursesByTags.map((course) => (
				<ListItem {...course} />
			))}
		</ul>
	);
};
