import axios from 'axios';
import { useEffect, useState } from 'react';
import { List, Sidebar } from './components';

import styles from './HomePage.module.scss';

import type { Course } from './types';

export const HomePage = () => {
	const [courses, setCourses] = useState<Course[] | undefined>(undefined);

	useEffect(() => {
		axios
			.get('http://localhost:3000/courses')
			.then((data) => setCourses(data.data));
	}, []);

	const tagsSet = new Set(courses?.flatMap(({ tags }) => tags));

	return (
		<div className={styles.wrapper}>
			<Sidebar tags={Array.from(tagsSet)} />

			{courses && <List courses={courses} />}
		</div>
	);
};
