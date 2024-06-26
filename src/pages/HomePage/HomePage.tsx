import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
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

	const tagsSet = useMemo(() => {
		return new Set(courses?.flatMap(({ tags }) => tags));
	}, [courses]);

	return (
		<div className={styles.wrapper}>
			<Sidebar tags={Array.from(tagsSet)} />

			{courses && <List courses={courses} />}
		</div>
	);
};
