import { useEffect } from "react";
import socket from "../../utils/socket";
import VendorShopBanner from "../../component/user-vendor_booking/VendorShopBanner";
import axios from "../../config/axios";
import React, { useState } from "react";
import VendorBookingCard from "../../component/vendor/vendorBookingCard";
import { useQueue } from "../../hook/useQueue";
import VendorBookingPage from "./VendorBookPage";

export default function VendorOnsiteBook() {
  const { openShop, shopInfo, setShopInfo } = useQueue();
  const [queue, setQueue] = useState(1);
  const [bookingList, setBookingList] = useState([]);
  const [addQueue, setAddQueue] = useState(false);
  const [onsiteInfo, setOnsiteInfo] = useState({
    data: "onsite booking",
    // onsite input
    name: "Mary",
    // fecth shop data
    shopId: "",
    socket: "",
    type: "one",
  });

  // console.log(shopInfo);

  useEffect(() => {
    socket.on("check_queue", (bookingInfo) => {
      console.log("check", bookingInfo);
      const currentQueue = localStorage.getItem("currentQueue");
      bookingInfo.queueNumber = +currentQueue;
      socket.emit("confirm_booking", bookingInfo);

      setBookingList((prev) => {
        const currentQueue = localStorage.getItem("currentQueue");
        bookingInfo.queueNumber = +currentQueue;
        const updateQueue = +currentQueue + 1;
        localStorage.setItem("currentQueue", updateQueue);
        window.location.reload();
        return [...prev, bookingInfo];
      });
    });
    return () => {
      socket.off("check_queue");
    };
  }, [queue]);
  // useEffect(() => {
  //   socket.on("check_queue", (bookingInfo) => {
  //     console.log("check", bookingInfo);
  //     setQueue((prevQ) => prevQ + 1);
  //     bookingInfo.queueNumber = queue;
  //     socket.emit("confirm_booking", bookingInfo);

  //     setBookingList((prev) => {
  //       bookingInfo.queueNumber = queue;
  //       // window.location.reload();
  //       return [...prev, bookingInfo];
  //     });
  //   });
  //   return () => {
  //     socket.off("check_queue");
  //   };
  // }, [queue]);

  useEffect(() => {
    socket.connect();
    openShop();
    socket.on("connect", () => {
      setOnsiteInfo({ ...onsiteInfo, socket: socket.id });
    });
    axios.get("/vendor/getMyShop").then((res) => {
      setShopInfo(res.data.result[0]);
    });
  }, []);

  useEffect(() => {
    axios
      .get("/vendor/findallshop")
      .then((res) => {
        setBookingList(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  socket.on("cancel_queue", (cancelInfo) => {
    setBookingList((prevList) => {
      const newBookingList = prevList.filter(
        (el) => el.userId !== cancelInfo.userId
      );
      return newBookingList;
    });
  });

  return (
    <>
      {addQueue ? (
        <VendorBookingPage />
      ) : (
        <section className='w-screen bg-gray-50 px-4'>
          <div className='max-w-[800px] mx-auto desktop:max-w-[1024px]'>
            <div className='mobile:justify-center items-center text-center '>
              <VendorShopBanner
                name={shopInfo && shopInfo?.shopName}
                onClick={() => {
                  setAddQueue(true);
                }}
                setAddQueue={setAddQueue}
                addQueue={addQueue}
              />
              <div className='max-w-[363px] mx-auto flex justify-between px-8'>
                <div className='font-semibold'>Table Type</div>
                <div className='font-semibold'>Queue</div>
              </div>
              <div className=' justify-center flex-col items-center'>
                {bookingList?.map((product, index) => (
                  <div key={index}>
                    <VendorBookingCard
                      socket={product.socket}
                      id={product.id}
                      queueNumber={product.queueNumber}
                      type={product.type}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
