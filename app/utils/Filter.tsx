import { Block, Page, Popup, Range } from 'framework7-react';
import { SetStateAction, useState } from 'react';
import { ArrowPathIcon, XMarkIcon } from '@heroicons/react/24/solid';

const Filter = () => {

	const [priceMin, setPriceMin] = useState(200);
	const [priceMax, setPriceMax] = useState(400);

	const onPriceChange = (values: SetStateAction<number>[]) => {
		setPriceMin(values[0]);
		setPriceMax(values[1]);
	}; 

	return (
		<Popup
			className="demo-popup-swipe-handler"
			swipeToClose="to-bottom"
		// swipeToClose
		// swipeHandler=".swipe-handler"
		>
			<Page bgColor="white">
				<div slot="fixed" className="swipe-handler !bg-white"></div>
				<div className="flex items-center justify-between px-4 py-3">
					<span>
						<ArrowPathIcon className='size-5 opacity-70' />
					</span>
					<span className="font-semibold">Filter</span>
					<span>
						<XMarkIcon className='size-5 opacity-70' />
					</span>
				</div>

				<Block className='flex flex-col gap-3 !py-3 !my-0' outlineIos>
					<div className="flex justify-between items-center">
						<span className="font-semibold">Price Filter</span>
					</div>
					<Range
						min={0}
						max={500}
						step={1}
						value={[priceMin, priceMax]}
						label={true}
						dual={true}
						color="#f2f2f2"
						onRangeChange={onPriceChange}
					/>
					<div className="flex justify-between items-center">
						<small>SAR {priceMin}.00</small>
						<small>SAR {priceMax}.00</small>
					</div>
				</Block>

			</Page>
		</Popup>
	)
}

export default Filter
