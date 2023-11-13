import { useEffect, useState } from "react";
import socket from "../../utils/socket";
import { useQueue } from "../../hook/useQueue";
export default function VendorQueueManagement() {
  // const { currentQueue, setCurrentQueue } = useQueue();
  const [bookingList, setBookingList] = useState([]);
  const [queue, setQueue] = useState(1);
  const [onsiteQueue, setOnsiteQueue] = useState({});
  const [onsiteInfo, setOnsiteInfo] = useState({
    data: "onsite booking",
    // onsite input
    name: "Mary",
    // fecth shop data
    shopId: 1,
    socket: "",
    type: "one",
  });
  // console.log(onsiteInfo);
  // console.log(bookingList);
  useEffect(() => {
    socket.connect();
    socket.on("connect", () => {
      setOnsiteInfo({ ...onsiteInfo, socket: socket.id });
    });
  }, []);
  //! fetch shop data

  // open shop , axios update DB_shop isOpen: true
  const openShop = () => {
    // axios.patch("/vendor/open",id)
    socket.emit("join_room", "1");
    // socket.emit("create_room", shopData.id + shopData.name);
  };

  // const bookingForCustomer = () => {
  //   socket.emit("booking_for_customer", {
  //     name: userData.name,
  //     shopId: shopData.id,
  //     type: "two",
  //   });
  // };

  const bookingForCustomer = () => {
    socket.emit("booking_for_customer", onsiteInfo, 1);
  };

  useEffect(() => {
    socket.on("check_queue", (bookingInfo) => {
      console.log(bookingInfo);
      console.log("check", bookingInfo);
      setQueue((prevQ) => prevQ + 1);
      bookingInfo.queueNumber = queue;
      socket.emit("confirm_booking", bookingInfo);

      setBookingList((prev) => {
        bookingInfo.queueNumber = queue;

        return [...prev, bookingInfo];
      });
    });
    return () => {
      socket.off("check_queue");
    };
  }, [queue]);

  useEffect(() => {
    //>>>>>>>>>>>>> EDIT
    // console.log("effecrt");

    socket.on("ticket", (data) => {
      setBookingList((prev) => [...prev, data]);
      // setBookingList(...bookingList, { data });
    });

    // //!! edit logic with input form
    // socket.on("onsite_queue", (onsiteData) => {
    //   console.log(onsiteData);
    //   setQueue((prevQ) => prevQ + 1);
    //   setBookingList((prev) => [...prev, onsiteData]);
    // });

    socket.on("cancel_queue", (cancelInfo) => {
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

      {/* <input name="name" type='text' placeholder='Name' onChange={}/>
      <input name="seat"type='text' placeholder='Seat' onChange={}/> */}
      <button onClick={bookingForCustomer} className='border  p-2 '>
        Booking for customer
      </button>

      <p className='text-2xl p-4'>Queue List</p>
      {bookingList.length > 0
        ? bookingList.map((el, index) => (
            <li
              key={index}
            >{`Name: ${el.type} || Queue: ${el.queueNumber} `}</li>
          ))
        : null}
    </div>
  );
}
