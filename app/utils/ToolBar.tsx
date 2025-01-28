import { Link, NavLink } from "@remix-run/react"
import { Toolbar } from "framework7-react"

import { FireIcon, HomeIcon, RectangleStackIcon, QueueListIcon } from '@heroicons/react/24/outline'


const ToolBar = () => {

  return (
	<Toolbar position="bottom">
		<Link to="/about" className='flex flex-col items-center text-xs font-semibold'>
			<FireIcon className="size-6" />
			<span className="sr-only">About</span>
		</Link>
		<NavLink to="/" className='flex flex-col items-center text-xs font-semibold'>
			<HomeIcon className="size-6" />
			<span className="sr-only">home</span>
		</NavLink>
		<NavLink to="/collections" className='flex flex-col items-center text-xs font-semibold'>
			<QueueListIcon className="size-6" />
			<span className="sr-only">collections</span>
		</NavLink>
		<NavLink to="/popup" className='flex flex-col items-center text-xs font-semibold'>
			<RectangleStackIcon className="size-6" />
			<span className="sr-only">popup</span>
		</NavLink>
	</Toolbar>
  )
}

export default ToolBar
