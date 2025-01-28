import type { MetaFunction } from "@remix-run/node";
import { BlockTitle, Navbar, Page } from 'framework7-react';
import Filter from "~/utils/Filter";
import PostCard from "~/utils/PostCard";

export const meta: MetaFunction = () => {
	return [
		{ title: "Home Page" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export default function Index() {

	return (
		// Main Framework7 App component where we pass Framework7 params
		<Page>
			<Navbar title="Home" />
			<BlockTitle>Post Cards</BlockTitle>
			<PostCard />
			<Filter />
		</Page>
	);
}