// Import F7 Bundle and React Plugin
// import { useLocation } from '@remix-run/react';
import { useLocation } from "@remix-run/react";
import Framework7 from 'framework7/lite-bundle';
import Framework7React, { App, View } from 'framework7-react';

// import routes from '../routes';

import HomePage from '../routes/_index'
import AboutPage from '../routes/about'
import CollectionsPage from '../routes/collections'

// Framework7 module styles
import '../../node_modules/framework7/framework7-bundle.css'


// Initialize Framework7 with the React plugin globally
Framework7.use(Framework7React);

interface AppLayoutProps {
	children?: React.ReactNode;
}

export function AppLayout({ children = null, }: AppLayoutProps) {

	const path = useLocation();
	// console.log('routes==>', path.pathname);

	const f7params = {
		name: 'Remix F7 App', // App name
		theme: 'ios', // Automatic theme detection
		colors: {
			primary: '#6054ff',
		},
		//   darkMode: true,


		// App store
		// store: store,
		// App routes
		routes: [
			{
				path: '/',
				component: HomePage,
			},
			{
				path: '/about/',
				component: AboutPage,
			},
			{
				path: '/collections/',
				component: CollectionsPage,
			},
		],
		// clicks: {
		// 	externalLinks: 'a',
		// }
		// url: `http://localhost:5173${path.pathname}`,

		// Register service worker (only on production build)
		// serviceWorker: process.env.NODE_ENV === 'production' ? {
		// 	path: '/service-worker.js',
		// } : {},
	};

	return (
		<App {...f7params}>
			<View
				main
				// animate={true}
				iosDynamicNavbar={false}
				// browserHistory={true}
				browserHistorySeparator=""
				browserHistoryInitialMatch={true}
				browserHistoryRoot="/"
				// browserHistoryStoreHistory={false}
				router={true}
				url={path.pathname}
				// url="/"
			>
				{children}
			</View>
		</App>
	)
}
