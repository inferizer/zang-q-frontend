import { useParams } from "react-router-dom";
import UserBookTableForm from "../../component/user-vendor_booking/BookTableForm";
import ShopBanner from "../../component/user-vendor_booking/ShopBanner";
import { useUser } from "../../hook/useUser";

export default function UserBookingPage() {
const {singleShop} = useUser()

if(singleShop){
  const {shopPicture,shopName,id} = (singleShop)

  
  return (
    <div className='justify-center items-center flex'>
      <div className='w-[390px] h-[844px] pt-[47px] pb-[303px] bg-white flex-col justify-start items-start inline-flex'>
        <ShopBanner src={shopPicture} name={shopName} />
        <UserBookTableForm  id={id}/>
      </div>
    </div>
  );
}
}
