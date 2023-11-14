import UserBookTableForm from "../../component/user-vendor_booking/BookTableForm";
import ShopBanner from "../../component/user-vendor_booking/ShopBanner";
<<<<<<< HEAD
import axios from "../../config/axios";
import React, { useState , useEffect } from "react";

export default function VendorBookingPage() {
  const [loading, setLoading] = useState(true)
  const [shop, setShop] = useState()

  useEffect(() => {
    if (loading)
      axios.get('/vendor/getMyShop')
        .then(res => {
          setShop(res.data.result)
          console.log(res.data.result)
        })
        .catch(err => {
          console.log(err)
        })
        .finally(setLoading(false))
  }, [])
  return (
    <div className='justify-center items-center flex'>
      <div className='w-[390px] h-[844px] pt-[47px] pb-[303px] bg-white flex-col justify-start items-start inline-flex'>
        <ShopBanner 
         name={shop && shop[0]?.shopName}
         />
        <UserBookTableForm />
=======
import VendorBookForm from "../../component/user-vendor_booking/VendorBookForm";
export default function VendorBookingPage() {
  return (
    <div className='justify-center items-center flex'>
      <div className='w-[390px] h-[844px] pt-[47px] pb-[303px] bg-white flex-col justify-start items-start inline-flex'>
        <ShopBanner />
        <VendorBookForm />
>>>>>>> a9409ccf17c962509a8b47cba0f0a4a1661f03d3
      </div>
    </div>
  );
}
