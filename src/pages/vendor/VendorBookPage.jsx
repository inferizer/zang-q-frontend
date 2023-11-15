import ShopBanner from "../../component/user-vendor_booking/ShopBanner";
import VendorBookForm from "../../component/user-vendor_booking/VendorBookForm";
import { useQueue } from "../../hook/useQueue";
export default function VendorBookingPage() {
  const { shopInfo } = useQueue();
  console.log(shopInfo);
  return (
    <div className='justify-center items-center flex'>
      <div className='w-[390px] h-[844px] pt-[47px] pb-[303px] bg-white flex-col justify-start items-start inline-flex'>
        <ShopBanner name={shopInfo.shopName} src={shopInfo.shopPicture} />
        <VendorBookForm />
      </div>
    </div>
  );
}
