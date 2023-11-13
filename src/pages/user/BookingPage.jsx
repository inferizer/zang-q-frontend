import { useState, useEffect } from "react";

import { useAuth } from "../../hook/useAuthContext";
import socket from "../../utils/socket";
export default function BookingPage() {
  const [ticketInfo, setTicketInfo] = useState({});

  const { authUser } = useAuth();
  // (mocking) fetch shop list isOpen information when login
  const shopData = {
    id: 1,
    name: "Aroi",
  };
  useEffect(() => {
    socket.connect();
  }, []);

  // useEffect fetch ticket DB_reservations
  // ticket ? render ticketInfo : render userPage

  const selectShop = () => {
    socket.emit("join_room", shopData.id + shopData.name, authUser.id);
  };

  // booking infomation send
  const booking = () => {
    //axios.post("/user/booking")
    // console.log(authUser);

    socket.emit("booking", {
      userId: authUser.id,
      name: authUser.username,
      shopId: shopData.id,
      socket: socket.id,
    });
  };

  // !update
  const cancel = () => {
    setTicketInfo({});
    //axios.post("/user/cancel") DB_reservations delete
    socket.emit("cancel", {
      userId: authUser.id,
      shopId: shopData.id,
      socket: socket.id,
    });
  };

  socket.on("ticket", (bookingConfirm) => {
    console.log("booking confirm", bookingConfirm);
    setTicketInfo(bookingConfirm);
  });

  return (
    <div>
      <h1 className='text-3xl p-4'>Booking Queue</h1>

      <p className='px-4'>
        Your current queue number is: {ticketInfo.queueNumber}
      </p>
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
