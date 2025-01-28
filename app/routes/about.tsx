import type { MetaFunction } from "@remix-run/node";
import { NavLink } from "@remix-run/react";
import { Page, Navbar, BlockTitle, Block, BlockFooter, BlockHeader, NavLeft, NavTitle } from 'framework7-react';

export const meta: MetaFunction = () => {
	return [
		{ title: "Remix App - About" },
		{ name: "description", content: "About Page" },
	];
};

export default function About() {

	return (
		<Page
			name="About"
			// hideBarsOnScroll={true}
			// noSwipeback={false}
			// hideNavbarOnScroll={true}
			// ptr={true}
		>
			{/* Top Navbar */}
			<Navbar>
				<NavLeft>
					<NavLink to="/" className="w-6">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
						</svg>
					</NavLink>
				</NavLeft>
				<NavTitle>About</NavTitle>
			</Navbar>
			{/* Page Content */}
			<BlockTitle>Block Title</BlockTitle>
			<Block>
				<p className="!text-red-500">
					Here comes paragraph within content block. Donec et nulla auctor massa pharetra adipiscing
					ut sit amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam mollis,
					vulputate turpis vel, sagittis felis.{' '}
				</p>
			</Block>

			<BlockTitle>Strong Block</BlockTitle>
			<Block strong>
				<p>
					Here comes another text block with additional class. Praesent nec imperdiet
					diam. Maecenas vel lectus porttitor, consectetur magna nec, viverra sem. Aliquam sed risus
					dolor. Morbi tincidunt ut libero id sodales. Integer blandit varius nisi quis consectetur.{' '}
				</p>
			</Block>

			<BlockTitle>Strong Outline Block</BlockTitle>
			<Block strong outline>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates itaque autem qui quaerat
					vero ducimus praesentium quibusdam veniam error ut alias, numquam iste ea quos maxime
					consequatur ullam at a.
				</p>
			</Block>

			<BlockTitle>Strong Inset Block</BlockTitle>
			<Block strong inset>
				<p>
					Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit
					vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis.{' '}
				</p>
			</Block>

			<BlockTitle>Strong Inset Outline Block</BlockTitle>
			<Block strong outline inset>
				<p>
					Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit
					vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis.{' '}
				</p>
			</Block>

			<BlockTitle>Tablet Inset</BlockTitle>
			<Block strong mediumInset>
				<p>
					Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit
					vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis.{' '}
				</p>
			</Block>

			<BlockTitle>With Header & Footer</BlockTitle>
			<Block>
				<BlockHeader>Block Header</BlockHeader>
				<p>
					Here comes paragraph within content block. Donec et nulla auctor massa pharetra adipiscing
					ut sit amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam mollis,
					vulputate turpis vel, sagittis felis.{' '}
				</p>
				<BlockFooter>Block Footer</BlockFooter>
			</Block>

			<BlockHeader>Block Header</BlockHeader>
			<Block>
				<p>
					Here comes paragraph within content block. Donec et nulla auctor massa pharetra adipiscing
					ut sit amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam mollis,
					vulputate turpis vel, sagittis felis.{' '}
				</p>
			</Block>
			<BlockFooter>Block Footer</BlockFooter>

			<Block strong>
				<BlockHeader>Block Header</BlockHeader>
				<p>
					Here comes paragraph within content block. Donec et nulla auctor massa pharetra adipiscing
					ut sit amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam mollis,
					vulputate turpis vel, sagittis felis.{' '}
				</p>
				<BlockFooter>Block Footer</BlockFooter>
			</Block>

			<BlockHeader>Block Header</BlockHeader>
			<Block strong>
				<p>
					Here comes paragraph within content block. Donec et nulla auctor massa pharetra adipiscing
					ut sit amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam mollis,
					vulputate turpis vel, sagittis felis.{' '}
				</p>
			</Block>
			<BlockFooter>Block Footer</BlockFooter>

			<BlockTitle large>Block Title Large</BlockTitle>
			<Block strong>
				<p>
					Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit
					vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis.{' '}
				</p>
			</Block>

			<BlockTitle medium>Block Title Medium</BlockTitle>
			<Block strong>
				<p>
					Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit
					vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis.{' '}
				</p>
			</Block>
		</Page>
	)
}
