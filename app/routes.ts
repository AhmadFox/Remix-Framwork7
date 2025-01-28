import HomePage from './routes/_index'
import AboutPage from './routes/about'
import PopupPage from './routes/popup'
import CollectionsPage from './routes/collections'

const routes = [
	{
		path: '/',
		component: HomePage,
	},
	{
		path: '/about',
		component: AboutPage,
	},
	{
		path: '/collections',
		component: CollectionsPage,
	},
	{
		path: '/popup',
		component: PopupPage,
	},
];

export default routes;

// const routes = [
// 	{
// 		path: '/',
// 		asyncComponent: () => import("./routes/_index"),
// 	},
// 	{
// 		path: '/about',
// 		asyncComponent: () => import("./routes/about"),
// 	},
// 	{
// 		path: '/collections',
// 		asyncComponent: () => import("./routes/collections"),
// 	},
// 	{
// 	path: '/popup',
// 	asyncComponent: () => import("./routes/popup"),
// },
// ];

// export default routes;