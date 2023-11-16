import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { hdlAddSeat, hdlRmvSeat } from "../../utils/seat";
import TableType from "./TableType";
import { useQueue } from "../../hook/useQueue";
export default function UserBookTableForm() {
	const { seat, setSeat, maxSeat, setTableType } = useQueue();

	const hdlAddSeat1 = () => {
		hdlAddSeat(seat, setSeat, maxSeat);
	};

	const hdlRmvSeat1 = () => {
		hdlRmvSeat(seat, setSeat);
	};

	const hdlTableType = (selectTableType) => {
		setTableType(selectTableType);
	};

	return (
		<form className='flex flex-col self-stretch'>
			<div className='flex flex-col gap-2 py-3'>
				{/* type header */}
				<div className="font-medium self-stretch">
					ประเภท
				</div>
				<div className='self-stretch rounded-2xl justify-center items-start inline-flex'>
					{/* TableType */}
					<TableType onClick={hdlTableType} />
				</div>
			</div>
			{/* seat number section */}
			<div className='flex flex-col gap-2 py-3'>
				<div className="font-medium self-stretch">
					จำนวนที่นั่ง
				</div>
				<div className='self-stretch rounded-2xl justify-center items-center gap-4 inline-flex'>
					{/* - icon */}
					<div
						className='border-4 border-gray-400 bg-white text-gray-400 rounded-[40px]  hover:text-white  hover:bg-gray-500'
						onClick={hdlRmvSeat1}
					>
						<AiOutlineMinus className='mx-auto h-[35px] w-[35px]' />
					</div>

					{/* seat number */}
					<div className='justify-center items-center flex'>
						<div className='px-14 py-2 rounded-2xl border border-neutral-400 flex-col justify-start items-center'>
							<div className="text-primary-500 text-4xl font-bold font-['IBM Plex Sans Thai'] tracking-widest">
								{seat}
							</div>
						</div>
					</div>

					{/* + icon */}
					<div
						className='border-4 border-gray-400 bg-white text-gray-400 rounded-[40px]  hover:text-white  hover:bg-gray-500'
						onClick={hdlAddSeat1}
					>
						<AiOutlinePlus className='mx-auto h-[35px] w-[35px] ' />
					</div>
				</div>
			</div>

			{/* booking btn */}
			<button className="mt-3 shadow bg-primary-500 hover:opacity-60 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
				Book
			</button>

		</form>
	);
}
