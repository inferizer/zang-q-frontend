import { useState } from "react";
import { createContext } from "react";
import socket from "../utils/socket";

export const QueueContext = createContext();

export default function QueueContextProvider({ children }) {
  const [seat, setSeat] = useState(1);
  const [minSeat, setMinSeat] = useState(1);
  const [maxSeat, setMaxSeat] = useState(10);
  const [tableType, setTableType] = useState();
  const [selectChoice, setSelectChoice] = useState(1);
  const [ticketInfo, setTicketInfo] = useState({});
  const [bookingConfirm, setBookingConfirm] = useState(false);
  const [currentQueue, setCurrentQueue] = useState(0);
  const [historyBooking, setHistoryBooking] = useState([]);
  const [shopInfo, setShopInfo] = useState();

  const selectShop = () => {
    socket.emit("join_room", shopData.id + shopData.name, authUser.id);
  };

  const openShop = async () => {
    socket.emit("join_room", "1");
  };

  const bookingQueue = (bookingInfo, seat) => {
    console.log(bookingInfo, seat);
    socket.emit("booking", { bookingInfo }, seat);
  };

  const onsiteBooking = (bookingInfo, seat, name) => {
    console.log(bookingInfo, seat, name);
    socket.emit("booking_for_customer", { bookingInfo }, seat, name);
  };

  return (
    <QueueContext.Provider
      value={{
        seat,
        setSeat,
        maxSeat,
        minSeat,
        tableType,
        setMinSeat,
        setTableType,
        selectChoice,
        setSelectChoice,
        setMaxSeat,
        ticketInfo,
        setTicketInfo,
        selectShop,
        bookingQueue,
        bookingConfirm,
        setBookingConfirm,
        currentQueue,
        setCurrentQueue,
        historyBooking,
        setHistoryBooking,
        openShop,
        shopInfo,
        setShopInfo,
        onsiteBooking,
      }}
    >
      {children}
    </QueueContext.Provider>
  );
}
