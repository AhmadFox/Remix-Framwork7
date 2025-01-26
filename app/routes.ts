import HomePage from './routes/_index'
import AboutPage from './routes/about'
import CollectionsPage from './routes/collections'
const routes = [
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
];

export default routes;