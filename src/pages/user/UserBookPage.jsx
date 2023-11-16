import UserBookTableForm from "../../component/user-vendor_booking/BookTableForm";
import ShopBanner from "../../component/user-vendor_booking/ShopBanner";
import { useQueue } from "../../hook/useQueue";

export default function UserBookingPage() {
  const { ticketInfo } = useQueue();
  console.log(ticketInfo);
  return (
    <div className='justify-center items-center flex'>
      <div className='w-[390px] h-[844px] pt-[47px] pb-[303px] bg-white flex-col justify-start items-start inline-flex'>
        {ticketInfo.hasOwnProperty("queueNumber") ? null : <ShopBanner />}
        <UserBookTableForm />
      </div>
    </div>
  );
}
