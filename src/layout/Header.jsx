import { useState } from "react";
import { FoodIcon, HomeIcon, MapIcon, PendingIcon, QueueIcon, UserIcon } from "../assets/icon/Icon";
import logo from '../assets/logo/logo.svg'
import { useAuth } from "../hook/useAuthContext";
import { getAccessToken } from "../utils/localStorage";
import { useNavigate } from "react-router-dom";
export default function Header() {
	const { authUser,setUserDetailOpen,userDetailOpen, isShowMap, setIsShowMap, handleShowMap } = useAuth();
	const [selectedItem, setSelectedItem] = useState(null);
	const navigate = useNavigate();

	const handleIsShowMap = () => {
		if (isShowMap) {
			setSelectedItem('map')
		}
	}

	if (getAccessToken()) {
		if (authUser.role == "vendor") {
			return (
				<header className="section shadow-md z-50  bg-white fixed py-2 bottom-0 top-auto desktop:bottom-auto desktop:top-0 desktop:flex desktop:flex-col-reverse  ">
					
					<div className="container flex justify-between items-center">
						<img src={logo} alt="logo" />
						<nav>
							<ul className='flex'>
								<li
									className={`cursor-pointer text-sm px-4 flex flex-col justify-center items-center desktop:flex-row desktop:text-lg desktop:gap-1 desktop:py-2 hover:bg-primary-50 hover:rounded-md ${selectedItem === 'home' ? 'text-primary-500' : ''}`}
									onClick={() => {
										setSelectedItem('home')
										navigate('/vendor/home')
									}}>
									<HomeIcon className={`${selectedItem === 'home' ? 'primary-500 fill-current' : ''}`} />
									Home
								</li>
								<li
									className={`cursor-pointer text-sm px-4 flex flex-col justify-center items-center desktop:flex-row desktop:text-lg desktop:gap-1 desktop:py-2 hover:bg-primary-50 hover:rounded-md ${selectedItem === 'queue' ? 'text-primary-500' : ''}`}
									onClick={() => {
										setSelectedItem('queue')
										navigate('/vendor/book')
									}}>
									<QueueIcon className={`${selectedItem === 'queue' ? 'primary-500 fill-current' : ''}`} />
									Queue
								</li>
								<li
									className={`cursor-pointer text-sm px-4 flex flex-col justify-center items-center desktop:flex-row desktop:text-lg desktop:gap-1 desktop:py-2 hover:bg-primary-50 hover:rounded-md ${selectedItem === 'user' ? 'text-primary-500' : ''}`}
									onClick={() => {
										setSelectedItem('user')
										setUserDetailOpen(!userDetailOpen)
										}}>
									<UserIcon className={`${selectedItem === 'user' ? 'primary-500 fill-current' : ''}`} />
									User
								</li>
							</ul>
						</nav>
					</div>
				</header>
			);
		}

		if (authUser.role == "user") {
			return (
				<header className="section shadow-md z-50  bg-white fixed py-2 bottom-0 top-auto desktop:bottom-auto desktop:top-0 desktop:flex desktop:flex-col-reverse">
					<div className=" bg-white"></div>
		
					<div className="container flex justify-between items-center">
						<img src={logo} alt="logo" />
						<nav>
							<ul className='flex'>
								<li
									className={`cursor-pointer text-sm px-4 flex flex-col justify-center items-center desktop:flex-row desktop:text-lg desktop:gap-1 desktop:py-2 hover:bg-primary-50 hover:rounded-md ${!isShowMap ? 'text-primary-500' : ''}`}
									onClick={() => {
										setSelectedItem('home')
										setIsShowMap(false)
										navigate('/user/shopList')
									}}>
									<FoodIcon className={`${selectedItem === 'home' ? 'primary-500 fill-current' : ''}`} />Home
								</li>
								<li
									className={`cursor-pointer text-sm px-4 flex flex-col justify-center items-center desktop:flex-row desktop:text-lg desktop:gap-1 desktop:py-2 hover:bg-primary-50 hover:rounded-md ${isShowMap ? 'text-primary-500' : ''}`}
									onClick={() => {
										setSelectedItem('map')
										handleShowMap()
										navigate('/user/shopList')
									}}>
									<MapIcon className={`${selectedItem === 'map' ? 'primary-500 fill-current' : ''}`} />
									Map
								</li>
								<li
									className={`cursor-pointer text-sm px-4 flex flex-col justify-center items-center desktop:flex-row desktop:text-lg desktop:gap-1 desktop:py-2 hover:bg-primary-50 hover:rounded-md ${selectedItem === 'user' ? 'text-primary-500' : ''}`}
									onClick={() => {
										setUserDetailOpen(!userDetailOpen)
										setSelectedItem('user')}}>
									<UserIcon className={`${selectedItem === 'user' ? 'primary-500 fill-current' : ''}`} />
									User
								</li>
							</ul>
						</nav>
					</div>
					
				</header>
			);

		}
		if (authUser.role == "admin") {
			return (
				<header className="section shadow-md z-50 bg-white fixed py-2 bottom-0 top-auto desktop:bottom-auto desktop:top-0 desktop:flex desktop:flex-col-reverse">
				
					<div className="container flex justify-between items-center">
						<img src={logo} alt="logo" />
						<nav>
							<ul className='flex'>
								<li
									className={`cursor-pointer text-sm px-4 flex flex-col justify-center items-center desktop:flex-row desktop:text-lg desktop:gap-1 desktop:py-2 hover:bg-primary-50 hover:rounded-md ${selectedItem === 'home' ? 'text-primary-500' : ''}`}
									onClick={() => {
										setSelectedItem('pending')
										navigate('/admin/pending')
									}}>
									<PendingIcon className={`${selectedItem === 'pending' ? 'primary-500 fill-current' : ''}`} />
									Status
								</li>
								<li
									className={`cursor-pointer text-sm px-4 flex flex-col justify-center items-center desktop:flex-row desktop:text-lg desktop:gap-1 desktop:py-2 hover:bg-primary-50 hover:rounded-md ${selectedItem === 'map' ? 'text-primary-500' : ''}`}
									onClick={() => {
										setSelectedItem('vendor')
										navigate('/admin/vendor')
									}}>
									<FoodIcon className={`${selectedItem === 'vendor' ? 'primary-500 fill-current' : ''}`} />
									Vendor
								</li>
								<li
									className={`cursor-pointer text-sm px-4 flex flex-col justify-center items-center desktop:flex-row desktop:text-lg desktop:gap-1 desktop:py-2 hover:bg-primary-50 hover:rounded-md ${selectedItem === 'user' ? 'text-primary-500' : ''}`}
									onClick={() => {
										setUserDetailOpen(!userDetailOpen)
										setSelectedItem('user')}}>
									<UserIcon className={`${selectedItem === 'user' ? 'primary-500 fill-current' : ''}`} />
									User
								</li>
							</ul>
						</nav>
					</div>
				</header>
			);
		}

	}
	return (
		<header className="section shadow-md z-50 bg-white fixed py-2 bottom-0 top-auto desktop:bottom-auto desktop:top-0">
			<div className="container flex justify-center items-center">
				<img src={logo} alt="logo" />
			</div>
		</header>
	);
}
