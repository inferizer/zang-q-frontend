import { ChevronRightIcon } from '../../assets/icon/Icon';
import maps from '../../assets/image/maps.png'


export default function HomePage() {

	// const [selectedItem, setSelectedItem] = useState(null);

	return (
		<>
			<section className='section bg-gray-50 desktop:pt-16'>
				<div className='container flex justify-center gap-4 items-center py-10 desktop:gap-20'>
					<img src={maps} alt='hero-image' className='h-40 desktop:h-72 ' />
					<div className='flex flex-col gap-6 items-start'>
						<p className="text-md desktop:text-xl text-gray-500">
							ซังคิว เว็บให้บริการจองคิวร้านอาหารแบบเรียลไทม์
							<br />ใช้งานง่าย ไม่ต้องติดตั้งแอป
						</p>
						<button className='flex justify-center items-center gap-2 text-md desktop:text-xl bg-primary-400 rounded-3xl text-white px-5 py-1.5'>
							ร้านใกล้คุณ
							<ChevronRightIcon />
						</button>
					</div>
				</div>
			</section>
		</>
	);

}
