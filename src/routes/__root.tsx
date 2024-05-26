import { createRootRoute } from '@tanstack/react-router';

import { HomePage } from '@/pages';

export const Route = createRootRoute({
	component: () => <HomePage />,
});
