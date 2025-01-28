import { useRef, useState } from 'react';
import {
	Navbar,
	Page,
	Popup,
	BlockTitle,
	Block,
	NavRight,
	Link,
	Button,
	View,
	f7,
	NavLeft,
	NavTitle,
} from 'framework7-react';
import { MetaFunction } from '@remix-run/node';
import { NavLink } from '@remix-run/react';

export const meta: MetaFunction = () => {
	return [
		{ title: "Remix App - Popup" },
		{ name: "description", content: "Popup Page" },
	];
};

const PopupPage = () => {
	const [popupOpened, setPopupOpened] = useState<boolean>(false);
	const popup = useRef(null);

	const createPopup = () => {
		// Create popup
		if (!popup.current) {
			popup.current = f7.popup.create({
				content: `
					<div class="popup">
						<div class="page">
						<div class="navbar">
							<div class="navbar-inner">
							<div class="navbar-bg"></div>
							<div class="title">Dynamic Popup</div>
							<div class="right"><a  class="link popup-close">Close</a></div>
							</div>
						</div>
						<div class="page-content">
							<div class="block">
							<p>This popup was created dynamically</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus mauris leo, eu bibendum neque congue non. Ut leo mauris, eleifend eu commodo a, egestas ac urna. Maecenas in lacus faucibus, viverra ipsum pulvinar, molestie arcu. Etiam lacinia venenatis dignissim. Suspendisse non nisl semper tellus malesuada suscipit eu et eros. Nulla eu enim quis quam elementum vulputate. Mauris ornare consequat nunc viverra pellentesque. Aenean semper eu massa sit amet aliquam. Integer et neque sed libero mollis elementum at vitae ligula. Vestibulum pharetra sed libero sed porttitor. Suspendisse a faucibus lectus.</p>
							</div>
						</div>
						</div>
					</div>
        		`.trim(),
			});
		}
		// Open it
		popup.current.open();
	};

	const onPageBeforeRemove = () => {
		// Destroy popup when page removed
		if (popup.current) popup.current.destroy();
	};
	return (
		<Page onPageBeforeRemove={onPageBeforeRemove}>
			<Navbar>
				<NavLeft>
					<NavLink to="/" className="w-6">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
						</svg>
					</NavLink>
				</NavLeft>
				<NavTitle>Popups</NavTitle>
			</Navbar>
			<Block strongIos outlineIos>
				<p>
					<Button fill popupOpen=".demo-popup">
						Open Popup
					</Button>
				</p>
				<p>
					<Button fill onClick={() => setPopupOpened(true)}>
						Open Via Prop Change
					</Button>
				</p>
				<p>
					<Button fill onClick={createPopup}>
						Create Dynamic Popup
					</Button>
				</p>
			</Block>

			<BlockTitle>Swipe To Close</BlockTitle>
			<Block strongIos outlineIos>
				<p>Popup can be closed with swipe to top or bottom:</p>
				<p>
					<Button fill popupOpen=".demo-popup-swipe">
						Swipe To Close
					</Button>
				</p>
				<p>
					Or it can be closed with swipe on special swipe handler and, for example, only to bottom:
				</p>
				<p>
					<Button fill popupOpen=".demo-popup-swipe-handler">
						With Swipe Handler
					</Button>
				</p>
			</Block>

			<BlockTitle>Push View</BlockTitle>
			<Block strongIos outlineIos>
				<p>
					Popup can push view behind. By default has effect only when `safe-area-inset-top` is more
					than zero (iOS fullscreen webapp or iOS cordova app)
				</p>
				<p>
					<Button fill popupOpen=".demo-popup-push">
						Popup Push
					</Button>
				</p>
			</Block>

			<Popup
				className="demo-popup"
				opened={popupOpened}
				onPopupClosed={() => setPopupOpened(false)}
			>
				<Page>
					<Navbar title="Popup Title">
						<NavRight>
							<Link popupClose>Close</Link>
						</NavRight>
					</Navbar>
					<Block>
						<p>
							Here comes popup. You can put here anything, even independent view with its own
							navigation. Also not, that by default popup looks a bit different on iPhone/iPod and
							iPad, on iPhone it is fullscreen.
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus mauris
							leo, eu bibendum neque congue non. Ut leo mauris, eleifend eu commodo a, egestas ac
							urna. Maecenas in lacus faucibus, viverra ipsum pulvinar, molestie arcu. Etiam lacinia
							venenatis dignissim. Suspendisse non nisl semper tellus malesuada suscipit eu et eros.
							Nulla eu enim quis quam elementum vulputate. Mauris ornare consequat nunc viverra
							pellentesque. Aenean semper eu massa sit amet aliquam. Integer et neque sed libero
							mollis elementum at vitae ligula. Vestibulum pharetra sed libero sed porttitor.
							Suspendisse a faucibus lectus.
						</p>
						<p>
							Duis ut mauris sollicitudin, venenatis nisi sed, luctus ligula. Phasellus blandit nisl
							ut lorem semper pharetra. Nullam tortor nibh, suscipit in consequat vel, feugiat sed
							quam. Nam risus libero, auctor vel tristique ac, malesuada ut ante. Sed molestie, est
							in eleifend sagittis, leo tortor ullamcorper erat, at vulputate eros sapien nec
							libero. Mauris dapibus laoreet nibh quis bibendum. Fusce dolor sem, suscipit in
							iaculis id, pharetra at urna. Pellentesque tempor congue massa quis faucibus.
							Vestibulum nunc eros, convallis blandit dui sit amet, gravida adipiscing libero.
						</p>
					</Block>
				</Page>
			</Popup>

			<Popup push className="demo-popup-push">
				<View>
					<Page>
						<Navbar title="Push Popup s" large transparent>
							<NavRight>
								<Link popupClose>Close</Link>
							</NavRight>
						</Navbar>
						<Block>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus mauris
								leo, eu bibendum neque congue non. Ut leo mauris, eleifend eu commodo a, egestas ac
								urna. Maecenas in lacus faucibus, viverra ipsum pulvinar, molestie arcu. Etiam
								lacinia venenatis dignissim. Suspendisse non nisl semper tellus malesuada suscipit
								eu et eros. Nulla eu enim quis quam elementum vulputate. Mauris ornare consequat
								nunc viverra pellentesque. Aenean semper eu massa sit amet aliquam. Integer et neque
								sed libero mollis elementum at vitae ligula. Vestibulum pharetra sed libero sed
								porttitor. Suspendisse a faucibus lectus.
							</p>
							<p>
								Duis ut mauris sollicitudin, venenatis nisi sed, luctus ligula. Phasellus blandit
								nisl ut lorem semper pharetra. Nullam tortor nibh, suscipit in consequat vel,
								feugiat sed quam. Nam risus libero, auctor vel tristique ac, malesuada ut ante. Sed
								molestie, est in eleifend sagittis, leo tortor ullamcorper erat, at vulputate eros
								sapien nec libero. Mauris dapibus laoreet nibh quis bibendum. Fusce dolor sem,
								suscipit in iaculis id, pharetra at urna. Pellentesque tempor congue massa quis
								faucibus. Vestibulum nunc eros, convallis blandit dui sit amet, gravida adipiscing
								libero.
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus mauris
								leo, eu bibendum neque congue non. Ut leo mauris, eleifend eu commodo a, egestas ac
								urna. Maecenas in lacus faucibus, viverra ipsum pulvinar, molestie arcu. Etiam
								lacinia venenatis dignissim. Suspendisse non nisl semper tellus malesuada suscipit
								eu et eros. Nulla eu enim quis quam elementum vulputate. Mauris ornare consequat
								nunc viverra pellentesque. Aenean semper eu massa sit amet aliquam. Integer et neque
								sed libero mollis elementum at vitae ligula. Vestibulum pharetra sed libero sed
								porttitor. Suspendisse a faucibus lectus.
							</p>
						</Block>
					</Page>
				</View>
			</Popup>

			<Popup className="demo-popup-swipe" swipeToClose>
				<Page>
					<Navbar title="Swipe To Close ss4">
						<NavRight>
							<Link popupClose>Close</Link>
						</NavRight>
					</Navbar>

					<div
						style={{ height: '100%' }}
						className="display-flex justify-content-center align-items-center"
					>
						<p>Swipe me up or down</p>
					</div>
				</Page>
			</Popup>

			<Popup
				className="demo-popup-swipe-handler"
				swipeToClose="to-bottom"
				swipeHandler=".swipe-handler"
			>
				<Page>
					<div slot="fixed" className="swipe-handler"></div>
					<BlockTitle large>Hello! sss</BlockTitle>
					<Block strongIos outlineIos>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus mauris
							leo, eu bibendum neque congue non. Ut leo mauris, eleifend eu commodo a, egestas ac
							urna. Maecenas in lacus faucibus, viverra ipsum pulvinar, molestie arcu. Etiam lacinia
							venenatis dignissim. Suspendisse non nisl semper tellus malesuada suscipit eu et eros.
							Nulla eu enim quis quam elementum vulputate. Mauris ornare consequat nunc viverra
							pellentesque. Aenean semper eu massa sit amet aliquam. Integer et neque sed libero
							mollis elementum at vitae ligula. Vestibulum pharetra sed libero sed porttitor.
							Suspendisse a faucibus lectus.
						</p>
						<p>
							Duis ut mauris sollicitudin, venenatis nisi sed, luctus ligula. Phasellus blandit nisl
							ut lorem semper pharetra. Nullam tortor nibh, suscipit in consequat vel, feugiat sed
							quam. Nam risus libero, auctor vel tristique ac, malesuada ut ante. Sed molestie, est
							in eleifend sagittis, leo tortor ullamcorper erat, at vulputate eros sapien nec
							libero. Mauris dapibus laoreet nibh quis bibendum. Fusce dolor sem, suscipit in
							iaculis id, pharetra at urna. Pellentesque tempor congue massa quis faucibus.
							Vestibulum nunc eros, convallis blandit dui sit amet, gravida adipiscing libero.
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus mauris
							leo, eu bibendum neque congue non. Ut leo mauris, eleifend eu commodo a, egestas ac
							urna. Maecenas in lacus faucibus, viverra ipsum pulvinar, molestie arcu. Etiam lacinia
							venenatis dignissim. Suspendisse non nisl semper tellus malesuada suscipit eu et eros.
							Nulla eu enim quis quam elementum vulputate. Mauris ornare consequat nunc viverra
							pellentesque. Aenean semper eu massa sit amet aliquam. Integer et neque sed libero
							mollis elementum at vitae ligula. Vestibulum pharetra sed libero sed porttitor.
							Suspendisse a faucibus lectus.
						</p>
						<p>
							Duis ut mauris sollicitudin, venenatis nisi sed, luctus ligula. Phasellus blandit nisl
							ut lorem semper pharetra. Nullam tortor nibh, suscipit in consequat vel, feugiat sed
							quam. Nam risus libero, auctor vel tristique ac, malesuada ut ante. Sed molestie, est
							in eleifend sagittis, leo tortor ullamcorper erat, at vulputate eros sapien nec
							libero. Mauris dapibus laoreet nibh quis bibendum. Fusce dolor sem, suscipit in
							iaculis id, pharetra at urna. Pellentesque tempor congue massa quis faucibus.
							Vestibulum nunc eros, convallis blandit dui sit amet, gravida adipiscing libero.
						</p>
					</Block>
				</Page>
			</Popup>
		</Page>
	);
};

export default PopupPage

