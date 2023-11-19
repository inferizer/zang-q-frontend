import { useState, useEffect } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useQueue } from "../../hook/useQueue";
import { useAuth } from "../../hook/useAuthContext";
import { hdlAddSeat, hdlRmvSeat } from "../../utils/seat";
import { useUser } from "../../hook/useUser";
import socket from "../../utils/socket";
import TableType from "./TableType";
import UserTicketPage from "../../pages/user/UserTicketPage";
import axios from "axios";

export default function UserBookTableForm({id}) {
  const {
    seat,
    setSeat,
    minSeat,
    maxSeat,
    setTableType,
    bookingQueue,
    ticketInfo,
    setTicketInfo,
  } = useQueue();

  const {singleShop} = useUser()
  const { authUser } = useAuth();
  const [bookingInfo, setBookingInfo] = useState({
    userId: authUser.id,
    name: authUser.username,
    // mocking shopname
    shopId: id,
    socket: "",
    type: "one",
  });

  console.log(bookingInfo);
  console.log(singleShop)
  useEffect(() => {
    socket.connect();
    socket.on("connect", () => {
      setBookingInfo({ ...bookingInfo, socket: socket.id });
    });
  }, []);
  // fecth ticket
  useEffect(() => {
    console.log("fetch ticket");
    axios
      .post("/user/ticket", bookingInfo)
      .then((res) => {
        setTicketInfo(res.data.result);
      })
      .catch((error) => console.log(error));
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
    setTicketInfo(bookingConfirm);
  });

  socket.on("cancel_ticket", () => {
    console.log("cancel ticket");
    setTicketInfo({});
  });

  return (
    <>
      {ticketInfo?.hasOwnProperty("queueNumber") ? (
        <UserTicketPage />
      ) : (
        <form
          className='flex flex-col self-stretch'
          onSubmit={hdlSubmit}
        >
          <div className='flex flex-col gap-2 py-3 desktop:py-6'>
            {/* type header */}
            <div className="font-medium self-stretch">
              Table Type
            </div>
            <div className='self-stretch rounded-2xl flex justify-center items-center'>
              {/* TableType */}
              <TableType onClick={hdlTableType} />
            </div>
          </div>
          {/* seat number section */}
          <div className='flex flex-col gap-2 py-3 desktop:py-6'>
            <div className="font-medium self-stretch">
              Amount of Peoples
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
                  <div className="text-pink-600 text-4xl font-bold tracking-widest">
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
          <button className='mt-4 flex justify-center items-center focus:outline-none text-white bg-primary-400 hover:bg-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 '>
            Booking
          </button>
        </form>
      )}
    </>
  );
}
