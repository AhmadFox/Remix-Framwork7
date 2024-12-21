import type { MetaFunction } from "@remix-run/node";
import { useNavigate , Link } from "@remix-run/react";
import { Navbar, Page } from 'framework7-react';

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export default function Index() {

	const navigate = useNavigate();

	return (
		// Main Framework7 App component where we pass Framework7 params
		<Page>
			<Navbar title="Home" />
			<p>Welcome to the Home Page</p>
			<Link
				to="/about/"
				onClick={(e) => {
					e.preventDefault();
					console.log("Navigating to About Page");
					navigate("/about/");
				}}
			>About Page</Link>
		</Page>
	);
}