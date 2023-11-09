import UserBookTableForm from "../../component/BookTableForm";
import ShopBanner from "../../component/ShopBanner";

export default function UserBookingPage() {
  return (
    <div className='mobile:  justify-center items-center flex'>
      <div className='w-[390px] h-[844px] pt-[47px] pb-[303px] bg-white flex-col justify-start items-start inline-flex'>
        <ShopBanner />
        <UserBookTableForm />
      </div>
    </div>
  );
}
