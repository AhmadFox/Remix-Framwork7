import HomePage from './routes/_index'
import AboutPage from './routes/about'
const routes = [
	{
		path: '/',
		component: HomePage,
	},
	{
		path: '/about/',
		component: AboutPage,
	},
];

export default routes;