import { useState } from "react";
import io from "socket.io-client";
import { useAuth } from "../../hook/useAuthContext";

export default function BookingPage() {
  const [ticketInfo, setTicketInfo] = useState({});
  const socket = io("http://localhost:3000");
  const { authUser } = useAuth();
  // (mocking) fetch shop list isOpen information when login
  const shopData = {
    id: 1,
    name: "Aroi",
  };

  // useEffect fetch ticket DB_reservations

  const selectShop = () => {
    socket.emit("join_room", shopData.id + shopData.name);
  };

  // booking infomation send
  const booking = () => {
    //axios.post("/user/booking")
    socket.emit("booking", {
      userId: authUser.id,
      name: authUser.username,
      shopName: shopData.id + shopData.name,
    });
  };

  // !update
  const cancel = () => {
    setTicketInfo({});
    //axios.post("/user/cancel") DB_reservations delete
    socket.emit("cancel", {
      userId: authUser.id,
      name: authUser.username,
      shopName: shopData.id + shopData.name,
    });
  };

  socket.on("ticket", (data) => {
    console.log(data);
    setTicketInfo(data);
  });

  return (
    <div>
      <h1 className='text-3xl p-4'>Booking Queue</h1>

      <p className='px-4'>Your current queue number is: {ticketInfo.qNumber}</p>
      <p className='p-4'>Name: {ticketInfo.name}</p>

      {/* can only select DB_shops isOpen : true */}
      <button onClick={selectShop} className='border  p-2 '>
        Select Shop
      </button>

      {/* create reservation in db and return Q ticket info */}
      <button onClick={booking} className='border  p-2 '>
        Booking
      </button>

      <button onClick={cancel} className='border  p-2 '>
        Cancel Queue
      </button>
    </div>
  );
}
