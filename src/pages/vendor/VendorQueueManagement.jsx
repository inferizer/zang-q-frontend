import { useEffect, useState } from "react";
import io from "socket.io-client";
import { useAuth } from "../../hook/useAuthContext";

export default function VendorQueueManagement() {
  const { authUser } = useAuth();
  const [bookingList, setBookingList] = useState([]);
  // console.log(bookingList);
  const socket = io("http://localhost:3000");
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

    socket.emit("create-room", shopData.id + shopData.name);
  };

  const bookingForCustomer = () => {
    socket.emit("booking for customer", {
      userId: userData.id,
      name: userData.name,
      shopName: shopData.id + shopData.name,
      mobile: userData.mobile,
    });
  };


  useEffect(() => {
    socket.on("ticket", (data) => {
      setBookingList((prev) => [...prev, data]);
      // setBookingList(...bookingList, { data });
    });

    socket.on("onsite queue", (data) => {
      setBookingList((prev) => [...prev, data]);
    });

    //!! update
    socket.on("cancel queue", (cancelInfo) => {
      // console.log("cancel id", cancelInfo.userId);

      setBookingList((prevList) => {
        const newBookingList = prevList.filter(
          (el) => el.id !== cancelInfo.userId

          // (el) => console.log("+++", el.id)
        );
        return newBookingList;
      });
    });

    return () => {
      socket.off("ticket");
      socket.off("onsite queue");
      socket.off("cancel queue");
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
            <li key={index}>{`Name: ${el.name} || Queue:${el.qNumber} || Date:${
              el.date
            } || Time:${el.time} || Mobile:${
              el.mobile || "don't have phone number"
            }`}</li>
          ))
        : null}
    </div>
  );
}
