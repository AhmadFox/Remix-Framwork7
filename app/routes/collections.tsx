import { MetaFunction } from '@remix-run/node';
import { Page, Navbar, List, ListItem, Searchbar, BlockTitle } from 'framework7-react';

export const meta: MetaFunction = () => {
	return [
		{ title: "Remix App - Collections" },
		{ name: "description", content: "Collections Page" },
	];
};

export default function Collections() {
  return (
    <Page>
      <Navbar title="Collections" backLink=" " />
      <Searchbar
        placeholder="Search collections"
        clearButton={true}
      />
      <BlockTitle>Browse Collections</BlockTitle>
      <List>
        <ListItem
          link="/collections/summer"
          title="Summer Fragrances"
          after="24 items"
        />
        <ListItem
          link="/collections/luxury"
          title="Luxury Collection"
          after="18 items"
        />
        <ListItem
          link="/collections/new"
          title="New Arrivals"
          after="12 items"
        />
      </List>
    </Page>
  );
}