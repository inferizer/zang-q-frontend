import ShopBanner from "../../component/user-vendor_booking/ShopBanner";
import { useQueue } from "../../hook/useQueue";
import socket from "../../utils/socket";

export default function UserTicketPage() {
  const { ticketInfo, setTicketInfo } = useQueue();
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
    window.location.reload();
  };

  return (
    <div className='mx-auto min-w-[391px] shadow-lg'>
      {/* Header Ticket */}
      <h1 className='min-w-[360px] text-3xl px-4 py-3 border border-gray-400 text-center font-bold rounded-t-xl bg-primary-300'>
        Your Ticket
      </h1>
      {/* Card Body */}
      <div className='p-4 flex flex-col gap-4 border border-gray-400 rounded-b-xl '>
        {/* Queue */}
        <ShopBanner />
        <div className='text-center'>
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
        <div className='flex gap-28 justify-center'>
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
        <hr className='border border-dashed border-gray-400' />
        <button
          onClick={cancelQueue}
          className='border border-dashed border-red-700 p-2 font-bold text-red-500 '
        >
          Cancel Queue
        </button>
      </div>
    </div>
  );
}
