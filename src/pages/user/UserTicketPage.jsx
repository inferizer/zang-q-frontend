import { useQueue } from "../../hook/useQueue";
import socket from "../../utils/socket";

export default function UserTicketPage() {
  const { ticketInfo, setTicketInfo } = useQueue();

  const cancelQueue = () => {
    setTicketInfo({});
    //axios.post("/user/cancel") DB_reservations delete
    socket.emit("cancel", {
      userId: ticketInfo.userId,
      shopId: ticketInfo.shopId,
      socket: ticketInfo.socket,
      id: ticketInfo.id,
    });
    window.location.reload();
  };

  return (
    <div>
      <h1 className='text-3xl p-4'>Booking Queue</h1>
      <div className='p-4 flex flex-col gap-4'>
        <p>Your current queue number is: {ticketInfo.queueNumber}</p>
        <p>Name: {ticketInfo.name}</p>
        <p>Date: {ticketInfo.date}</p>
        <p>Time: {ticketInfo.time}</p>
      </div>
      <button onClick={cancelQueue} className='border  p-2 '>
        Cancel Queue
      </button>
    </div>
  );
}
