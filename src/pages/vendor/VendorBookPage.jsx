import { useState } from "react";
import ShopBanner from "../../component/user-vendor_booking/ShopBanner";
import VendorBookForm from "../../component/user-vendor_booking/VendorBookForm";
import { useQueue } from "../../hook/useQueue";
export default function VendorBookingPage() {
  const { shopInfo } = useQueue();
  const [nameInput, setNameInput] = useState();

  const hdlOnChange = (e) => {
    console.log(e.target.value);
    setNameInput(e.target.value);
  };

  return (
    <div className='justify-center items-center flex'>
      <div className='w-[390px] h-[844px] pt-[47px] pb-[303px] bg-white flex-col justify-start items-start inline-flex'>
        <ShopBanner name={shopInfo.shopName} src={shopInfo.shopPicture} />
        <div className='px-[26px] py-2'>
          <p className='font-semibold'>Customer name</p>
          <input
            value={nameInput}
            onChange={hdlOnChange}
            type='text'
            placeholder='Customer name'
            className='px-2 mx-2 border border-gray-600 rounded-md'
          />
        </div>
        <VendorBookForm nameInput={nameInput} />
      </div>
    </div>
  );
}
