import UserBookTableForm from "../../component/user-vendor_booking/BookTableForm";
import ShopBanner from "../../component/user-vendor_booking/ShopBanner";
import ShopCard from "../../component/user/ShopCard";

export default function UserBookingPage() {
  return (
    <section className="section desktop:pt-24">
      <div className="container min-w-[360px] flex flex-col items-center">
          <ShopBanner />
          <UserBookTableForm />
      </div>
    </section>
  );
}
