import {
	Card,
	CardHeader,
	CardContent,
	CardFooter,
	Button,
} from 'framework7-react';
import { Image } from '@shopify/hydrogen';

import { HeartIcon, ShareIcon } from '@heroicons/react/24/solid'

const PostCard = () => {
	return (
		<Card outlineMd className="demo-card-header-pic">
			<CardHeader className='!p-0 relative overflow-hidden'>
				<Image
					src="https://cdn.framework7.io/placeholder/nature-1000x600-4.jpg"
					alt='Image title'
					aspectRatio="4/2"
					// data={collection.image}
					loading='eager'
					className="object-cover"
				/>
			</CardHeader>
			<CardContent>
				<p className="">Posted on January 21, 2015</p>
				<p>
					Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non
					felis. Phasellus quis nibh hendrerit...
				</p>
			</CardContent>
			<CardFooter>
				<Button popupOpen=".demo-popup-swipe-handler" className='flex items-center gap-1'>
					<HeartIcon className='size-6' />
					Likes
				</Button>
				<Button popupOpen=".demo-popup-swipe-handler" className='flex items-center gap-1'>
					<ShareIcon className='size-6' />
					Share
				</Button>
			</CardFooter>
		</Card>

	)
}

export default PostCard
