import { useState, useEffect } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useQueue } from "../../hook/useQueue";
import { useAuth } from "../../hook/useAuthContext";
import { hdlAddSeat, hdlRmvSeat } from "../../utils/seat";
import socket from "../../utils/socket";
import TableType from "./TableType";
import UserTicketPage from "../../pages/user/UserTicketPage";

export default function UserBookTableForm() {
  const {
    seat,
    setSeat,
    minSeat,
    maxSeat,
    tableType,
    setTableType,
    selectShop,
    bookingQueue,
    ticketInfo,
    setTicketInfo,
  } = useQueue();
  const { authUser } = useAuth();
  const [bookingInfo, setBookingInfo] = useState({
    userId: authUser.id,
    name: authUser.username,
    // mocking shopname
    shopId: 1,
    socket: "",
    type: "one",
  });
  console.log(ticketInfo);

  useEffect(() => {
    socket.connect();
    socket.on("connect", () => {
      setBookingInfo({ ...bookingInfo, socket: socket.id });
    });
  }, []);

  const hdlAddSeat1 = () => {
    hdlAddSeat(seat, setSeat, maxSeat);
  };

  const hdlRmvSeat1 = () => {
    hdlRmvSeat(seat, setSeat, minSeat);
  };

  const hdlTableType = (selectTableType) => {
    setTableType(selectTableType);
    setBookingInfo({ ...bookingInfo, type: selectTableType });
  };

  const hdlSubmit = (e) => {
    e.preventDefault();
    bookingQueue(bookingInfo, seat);
  };

  socket.on("ticket", (bookingConfirm) => {
    console.log("booking_confirm", bookingConfirm);
    setTicketInfo(bookingConfirm);
  });

  return (
    <>
      {ticketInfo.hasOwnProperty("queueNumber") ? (
        <UserTicketPage />
      ) : (
        <form
          className='self-stretch flex-col justify-start items-start inline-flex'
          onSubmit={hdlSubmit}
        >
          <div className='h-[150px] px-4 py-3 mx-auto flex-col justify-start items-start gap-2 flex'>
            {/* type header */}
            <div className="self-stretch text-black text-base font-medium font-['IBM Plex Sans Thai']">
              ประเภท
            </div>
            <div className='self-stretch rounded-2xl justify-center items-start inline-flex'>
              {/* TableType */}
              <TableType onClick={hdlTableType} />
            </div>
          </div>
          {/* seat number section */}
          <div className='h-[137px] w-full px-6 py-3 mx-auto flex-col justify-start items-start gap-2 flex'>
            <div className="self-stretch text-black text-base font-medium font-['IBM Plex Sans Thai']">
              จำนวนที่นั่ง
            </div>
            <div className='self-stretch rounded-2xl justify-center items-center gap-4 inline-flex'>
              {/* - icon */}
              <div
                className='border-4 border-gray-400 bg-white text-gray-400 rounded-[40px]  hover:text-white  hover:bg-gray-500'
                onClick={hdlRmvSeat1}
              >
                <AiOutlineMinus className='mx-auto h-[35px] w-[35px]' />
              </div>

              {/* seat number */}
              <div className='justify-center items-center flex'>
                <div className='px-14 py-2 rounded-2xl border border-neutral-400 flex-col justify-start items-center'>
                  <div className="text-pink-600 text-4xl font-bold font-['IBM Plex Sans Thai'] tracking-widest">
                    {seat}
                  </div>
                </div>
              </div>

              {/* + icon */}
              <div
                className='border-4 border-gray-400 bg-white text-gray-400 rounded-[40px]  hover:text-white  hover:bg-gray-500'
                onClick={hdlAddSeat1}
              >
                <AiOutlinePlus className='mx-auto h-[35px] w-[35px] ' />
              </div>
            </div>
          </div>

          {/* booking btn */}
          <button className='mobile:  w-[350px] mx-auto flex justify-center items-center focus:outline-none text-white bg-primary-400 hover:bg-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 '>
            จอง
          </button>
        </form>
      )}
    </>
  );
}
