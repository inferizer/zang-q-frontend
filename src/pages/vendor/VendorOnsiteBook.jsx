import UserBookTableForm from "../../component/user-vendor_booking/BookTableForm";
import ShopBanner from "../../component/user-vendor_booking/ShopBanner";

export default function VendorOnsiteBook() {
  return (
    <div className='mobile:  justify-center items-center flex'>
      <div className='w-[390px] h-[844px] pt-[47px] pb-[303px] bg-white flex-col justify-start items-start inline-flex'>
        <ShopBanner />
        {/* name input */}
        <UserBookTableForm />
      </div>
    </div>
  );
}
