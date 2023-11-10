import { useEffect, useState } from "react";
import socket from "../../utils/socket";
export default function VendorQueueManagement() {
  const [bookingList, setBookingList] = useState([]);
  const [currentQueue, setCurrentQueue] = useState(1);
  const [onsiteQueue, setOnsiteQueue] = useState({});
  console.log(bookingList, currentQueue);

  useEffect(() => {
    socket.connect();
  }, []);
  // const socket = io("http://localhost:3000");
  // (mocking) fetch shop information when login
  const shopData = {
    id: 1,
    name: "Aroi",
  };

  // (mocking) input onsite user information
  const userData = {
    id: 4,
    name: "Mary",
    mobile: "0815561233",
  };

  // open shop , axios update DB_shop isOpen: true
  const openShop = () => {
    // axios.patch("/vendor/open",id)
    socket.emit("join_room", shopData.id + shopData.name);
    // socket.emit("create_room", shopData.id + shopData.name);
  };

  const bookingForCustomer = () => {
    socket.emit("booking_for_customer", {
      socket: socket.id,
      userId: userData.id,
      name: userData.name,
      shopName: shopData.id + shopData.name,
      mobile: userData.mobile,
    });
  };

  useEffect(() => {
    socket.on("check_queue", (bookingInfo) => {
      setCurrentQueue((prevQ) => prevQ + 1);
      bookingInfo.queueNumber = currentQueue;
      socket.emit("get_queue", bookingInfo);

      setBookingList((prev) => {
        bookingInfo.queueNumber = currentQueue;

        return [...prev, bookingInfo];
      });
    });
    return () => {
      socket.off("check_queue");
    };
  }, [currentQueue]);

  useEffect(() => {
    //>>>>>>>>>>>>> EDIT
    // console.log("effecrt");

    socket.on("ticket", (data) => {
      setBookingList((prev) => [...prev, data]);
      // setBookingList(...bookingList, { data });
    });

    //!! edit logic with input form
    socket.on("onsite_queue", (onsiteData) => {
      setCurrentQueue((prevQ) => prevQ + 1);
      setBookingList((prev) => [...prev, onsiteData]);
    });

    socket.on("cancel_queue", (cancelInfo) => {
      // setCurrentQueue((prevQ) => {
      //   if (prevQ === 0) {
      //     return prevQ;
      //   } else {
      //     return prevQ - 1;
      //   }
      // });

      setBookingList((prevList) => {
        const newBookingList = prevList.filter(
          (el) => el.userId !== cancelInfo.userId
        );
        return newBookingList;
      });
    });

    return () => {
      // console.log("clean effect");
      // socket.off("ticket");
      // socket.off("onsite queue");
      // socket.off("cancel queue");
    };
  }, []);

  return (
    <div>
      <h1 className='text-3xl p-4'>Shop Page</h1>
      {/* DB_shops isOpen : true  */}
      <button onClick={openShop} className='border  p-2 '>
        Open Shop
      </button>

      <button onClick={bookingForCustomer} className='border  p-2 '>
        Booking for customer
      </button>

      <p className='text-2xl p-4'>Queue List</p>
      {bookingList.length > 0
        ? bookingList.map((el, index) => (
            <li key={index}>{`Name: ${el.name} || Queue:${
              el.queueNumber
            } || Date:${el.date} || Time:${el.time} || Mobile:${
              el.mobile || "don't have phone number"
            }`}</li>
          ))
        : null}
    </div>
  );
}
