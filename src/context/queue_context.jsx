import { useState } from "react";
import { createContext } from "react";
import socket from "../utils/socket";
import axios from "../config/axios";

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
  const [singleShop,setSingleShop] = useState(null)

  const selectShop = (id) => {
    socket.emit("join_room", String(id));
  };

  const openShop = async (id) => {
    console.log(id);
    socket.emit("join_room", String(id));
  };

  const bookingQueue = (bookingInfo, seat) => {
    console.log(bookingInfo, seat);
    socket.emit("booking", { bookingInfo }, seat);
  };

  const onsiteBooking = (bookingInfo, seat, name) => {
    console.log(bookingInfo, seat, name);
    socket.emit("booking_for_customer", { bookingInfo }, seat, name);
  };

  const hdl_shopList_navigation = (id, selectShop) => {
    axios.get(`/vendor/getSingle/${id}`).then((res) => {
      setSingleShop(res.data.result[0]);
    });
    // selectShop(id);
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
        singleShop,
        setSingleShop,
        hdl_shopList_navigation
      }}
    >
      {children}
    </QueueContext.Provider>
  );
}
