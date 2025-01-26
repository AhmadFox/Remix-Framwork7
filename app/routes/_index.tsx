import type { MetaFunction } from "@remix-run/node";
// import { useNavigate , Link } from "@remix-run/react";
import { Block, Navbar, Page, Link } from 'framework7-react';

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export default function Index() {

	// const navigate = useNavigate();

	return (
		// Main Framework7 App component where we pass Framework7 params
		<Page>
			<Navbar title="Home" />
			<Block>
			<p>Welcome to the Home Page</p>
				{/* <Link
					to="/about/"
					onClick={(e) => {
						e.preventDefault();
						console.log("Navigating to About Page");
						navigate("/about/");
					}}
				>About Page</Link>
				<Link
					to="/collections/"
					onClick={(e) => {
						e.preventDefault();
						console.log("Navigating to About Page");
						navigate("/collections/");
					}}
				>Collections</Link> */}
				<Link href="/about/">About</Link>
			</Block>
			<Block>
				<Link href="/collections">Collections</Link>
			</Block>
		</Page>
	);
}