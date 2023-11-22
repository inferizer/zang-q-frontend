import ShopBanner from "../../component/user-vendor_booking/ShopBanner";
import { useQueue } from "../../hook/useQueue";
import { useUser } from "../../hook/useUser";
import socket from "../../utils/socket";

export default function UserTicketPage() {
  const { ticketInfo, setTicketInfo } = useQueue();
  const {singleShop} = useUser()

  console.log(ticketInfo);
  const { id, userId, shopId, name, date, time, type, queueNumber } =
    ticketInfo;

  const cancelQueue = () => {
    setTicketInfo({});
    socket.emit("cancel", {
      userId,
      shopId,
      socket: ticketInfo.socket,
      id,
    });
    window.location.replace("/user/shoplist");
  };

  return (
    <div className='mt-8 shadow-lg rounded-xl overflow-hidden'>
      {/* Header Ticket */}
      <h1 className='text-2xl px-4 py-3  text-center font-bold bg-primary-500 text-white'>
        Your Ticket
      </h1>
      {/* Card Body */}
      <div className='flex flex-col'>
        {/* Queue */}
        <ShopBanner shopPicture={singleShop.shopPicture} shopName={singleShop.shopName} />
        <div className='text-center py-4'>
          <p className='font-semibold text-xl'>Your queue number </p>
          <p className='text-6xl font-semibold p-2 text-primary-500'>
            {type === "one"
              ? "A"
              : type === "two"
              ? "B"
              : type === "three"
              ? "C"
              : "D"}
            {queueNumber}
          </p>
        </div>
        {/* Name */}
        {/* <div className='text-center py-2 border border-gray-100 rounded-full hover:scale-105'>
          <p className='font-semibold text-xl text-center'>Name</p>
          <p>{name}</p>
        </div> */}
        {/* Date & Time */}
        <div className='flex gap-28 justify-center py-6 border-t-2 border-dashed border-gray-300'>
          {/* Date */}
          <div className='flex flex-col'>
            <p className='font-semibold text-xl text-center'>Date</p>
            <p>{date}</p>
          </div>
          {/* Time */}
          <div className='flex flex-col'>
            <p className='font-semibold text-xl text-center'>Time</p>
            <p>{time}</p>
          </div>
        </div>

        <button
          onClick={cancelQueue}
          className='bg-gray-200 p-4 font-medium text-lg text-red-600 border-t-2 border-dashed border-gray-300'
        >
          Cancel Queue
        </button>
      </div>
    </div>
  );
}
