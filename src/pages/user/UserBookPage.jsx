import { useParams } from "react-router-dom";
import UserBookTableForm from "../../component/user-vendor_booking/BookTableForm";
import ShopBanner from "../../component/user-vendor_booking/ShopBanner";
import ShopCard from "../../component/user/ShopCard";
import { useUser } from "../../hook/useUser";
import { useQueue } from "../../hook/useQueue";

export default function UserBookingPage() {
  const { singleShop } = useUser()

  if (singleShop) {
    const { shopPicture, shopName, id } = (singleShop)


    const { ticketInfo } = useQueue();
    console.log(ticketInfo);
    return (
      <section className="section desktop:pt-16 pt-4">
        <div className="m-auto max-w-[600px] min-w-[320px] flex flex-col">
          {ticketInfo.hasOwnProperty("queueNumber") ? null : <ShopBanner shopPicture={shopPicture} shopName={shopName} />}
          <UserBookTableForm id={id} />
        </div>
      </section>
    );
  }
}
