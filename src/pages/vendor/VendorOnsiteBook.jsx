import { useEffect } from "react";
import socket from "../../utils/socket";
import VendorShopBanner from "../../component/user-vendor_booking/VendorShopBanner";
import axios from "../../config/axios";
import React, { useState } from "react";
import VendorBookingCard from "../../component/vendor/vendorBookingCard";
import { useQueue } from "../../hook/useQueue";
import HistoryButton from "../../component/buttons/HistoryButton";
import { Link } from "react-router-dom";

import VendorBookingPage from "./VendorBookPage";
import { getCurrentQueue } from "../../utils/localStorage";

export default function VendorOnsiteBook() {
  const { openShop, shopInfo, setShopInfo } = useQueue();
  const [bookingList, setBookingList] = useState([]);
  const [addQueue, setAddQueue] = useState(false);

  useEffect(() => {
    socket.on("check_queue", (bookingInfo) => {
      console.log("check", bookingInfo);
      const currentQueue = getCurrentQueue();
      bookingInfo.queueNumber = +currentQueue;
      socket.emit("confirm_booking", bookingInfo);

      setBookingList((prev) => {
        const currentQueue = getCurrentQueue();
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
  }, []);

  useEffect(() => {
    socket.connect();
    openShop();
    socket.on("connect", () => {
      setOnsiteInfo({ ...onsiteInfo, socket: socket.id });
    });
    axios.patch("/vendor/open");
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
        <section className='w-screen bg-gray-50 px-4 desktop:mt-[5rem]'>
          <div className='max-w-[800px] mx-auto desktop:max-w-[1024px]'>
            <div className='mobile:justify-center items-center text-center '>
              <VendorShopBanner
                name={shopInfo && shopInfo?.shopName}
                src={shopInfo && shopInfo?.shopPicture}
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
      <div className=' justify-center flex p-10'>
        <Link to={"/vendor/history"}>
          <HistoryButton text='check Queue Button' />
        </Link>
      </div>
    </>
  );
}
