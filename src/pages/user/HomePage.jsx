import { useNavigate } from 'react-router-dom';
import { ChevronRightIcon, MapIcon, PendingIcon, QueueIcon } from '../../assets/icon/Icon';
import homeImage from '../../assets/image/homeImage.svg'


export default function HomePage() {

	const navigate = useNavigate();

	return (
		<>
			<section className='section bg-gray-50 desktop:pt-16'>
				<div className='container flex flex-col gap-4 items-center py-9 desktop:py-16 desktop:gap-20 desktop:flex-row'>
					<img src={homeImage} alt='hero-image' className='h-60 desktop:h-72 ' />
					<div className='flex flex-col items-center gap-4  text-center desktop:text-left desktop:gap-6 desktop:items-start'>
						<div className='flex flex-col items-center gap-1.5 desktop:items-start desktop:gap-3'>
							<h3 className='text-3xl font-bold text-primary-500 desktop:text-5xl'>รอคิวอย่างมีความหวัง</h3>
							<p className="text-sm text-gray-500 desktop:text-xl ">
								ซังคิว เว็บให้บริการจองคิวร้านอาหารแบบเรียลไทม์
								<br />ใช้งานง่าย ไม่ต้องติดตั้งแอป
							</p>
						</div>
						<button
							className='flex justify-center items-center gap-2 text-md desktop:text-xl bg-black hover:opacity-60 rounded-3xl text-white px-5 py-2'
							onClick={() => navigate('/login/user')}
						>
							จองคิวตอนนี้
							<div><ChevronRightIcon className="w-6 h-6" /></div>
						</button>
					</div>
				</div>
			</section>
			<section className='section'>
				<div className='container py-20 flex justify-center gap-1 desktop:px-24'>
					<div className='self-stretch flex flex-col gap-4 items-center justify-center flex-grow'>
						<MapIcon className='text-gray-400 h-10 w-10 desktop:h-20 desktop:w-20' />
						<p className='text-xs text-gray-500  desktop:text-lg'>แนะนำร้านใกล้คุณ</p>
					</div>
					<div className='self-stretch flex flex-col gap-4 items-center justify-center flex-grow'>
						<QueueIcon className='text-gray-400 h-10 w-10 desktop:h-20 desktop:w-20' />
						<p className='text-xs text-gray-500  desktop:text-lg'>จองคิวร้านอาหาร</p>
					</div>
					<div className='self-stretch flex flex-col gap-4 items-center justify-center flex-grow'>
						<PendingIcon className='text-gray-400 h-10 w-10 desktop:h-20 desktop:w-20' />
						<p className='text-xs text-gray-500  desktop:text-lg'>แสดงคิวแบบเรียลไทม์</p>
					</div>

				</div>
			</section>

			<section className='section bg-gray-900 pb-16 desktop:pb-0'>
				<div className='container flex flex-col gap-4 items-center text-center py-16 desktop:py-18'>
					<h4 className='text-2xl font-bold text-white desktop:text-4xl'>เป็นผู้ให้บริการร้านอาหาร ?</h4>
					<p className="text-sm  text-gray-300 desktop:text-xl">
						ลงทะเบียนกับเรา เพื่อให้ลูกค้าของคุณสามารถจองคิวได้
					</p>

					<button
						className='flex justify-center items-center gap-2 text-md desktop:text-lg bg-primary-500 hover:opacity-60 rounded-3xl text-white px-5 py-2'
						onClick={() => navigate('/login/vendor')}
					>
						ลงทะเบียนร้าน
						<div><ChevronRightIcon className="w-6 h-6" /></div>
					</button>
				</div>
			</section>

		</>
	);

}
