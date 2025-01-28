// Import F7 Bundle and React Plugin
// import { useLocation } from '@remix-run/react';
import { useEffect, useState } from "react";
import { useLocation } from "@remix-run/react";
import Framework7 from 'framework7/lite-bundle';
import Framework7React, { App, View } from 'framework7-react';

import routes from '../routes';

// Framework7 module styles
import 'framework7/css/bundle'
import '../styles/tailwind.css'
import '../styles/app.css'

// Initialize Framework7 with the React plugin globally
Framework7.use(Framework7React);

import ToolBar from "~/utils/ToolBar";

interface AppLayoutProps {
	children?: React.ReactNode;
}

export function AppLayout({ children = null, }: AppLayoutProps) {

	const [isClient, setIsClient] = useState(false);
	const path = useLocation();
	// const url = `${process.env.NEXT_PUBLIC_HOST}${path.pathname}`;
	const url = `${import.meta.env.VITE_HOST}${path.pathname}`;

	useEffect(() => {

		setIsClient(true);

		Framework7.use(Framework7React);
		
		console.log('App Layout Mount');
		console.log('url', url);
		console.log('path.pathname', path.pathname);
		
		
	}, []);

	if (!isClient) return null;

	return (
		<App
			name="Remix F7 Ap"
			theme="ios"
			darkMode={false}
			colors={{
				primary: '#222222'
			}}
			routes={routes}
			url={url}
			// clicks={{
			// 	externalLinks: 'Link'
			// }}
			popup={{ closeOnEscape: true }}
			sheet={{ closeOnEscape: true }}
			popover={{ closeOnEscape: true }}
			actions={{ closeOnEscape: true }}
		>
		<View
		  main
		  iosDynamicNavbar={false}
		  browserHistory
		  browserHistorySeparator=""
		  browserHistoryInitialMatch={true}
		  browserHistoryStoreHistory={false}
		  url={path.pathname}
		>
		  {children}
		  <ToolBar />
		</View>
	  </App>
		// <App {...f7params}>
		// 	<View
		// 		className="safe-areas"
		// 		main
		// 		animate={true}
		// 		iosDynamicNavbar={false}
		// 		browserHistory={false}
		// 		// browserHistorySeparator="/"
		// 		// browserHistoryInitialMatch={true}
		// 		// browserHistoryRoot=""
		// 		// browserHistoryStoreHistory={false}
		// 		router={true}
		// 		preloadPreviousPage={true}
		// 		url={path.pathname}
		// 	>
		// 		{children}
		// 		<ToolBar />
		// 	</View>
		// </App>
	)
}
