import { useEffect } from "react";
import ShopBanner from "../../component/user-vendor_booking/ShopBanner";
import axios from "../../config/axios";
import React, { useState } from "react";
import VendorBookingCard from "../../component/vendor/vendorBookingCard";
import UserBookingPage from "../user/UserBookPage";

export default function VendorOnsiteBook() {
  const [loading, setLoading] = useState(true)
  const [shop, setShop] = useState()
  const [data, setData] = useState([])
  const [addQueue,setAddQueue] = useState(false)
  
  useEffect(() => {
    axios.get('/vendor/findallshop')
      .then(res => {
        setData(res.data.result)
        console.log(res.data.result)  
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

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
    <>
    {addQueue? <UserBookingPage/>:<section className='w-screen bg-gray-50 px-4'>
      <div className='max-w-[800px] mx-auto desktop:max-w-[1024px]'>
        <div className='mobile:justify-center items-center text-center '>
          <ShopBanner
            name={shop && shop[0]?.shopName}
            onClick={()=>{setAddQueue(true)}}
            setAddQueue={setAddQueue}
            addQueue={addQueue}
          />
          <div className="max-w-[363px] mx-auto flex justify-between px-10">
            <div>
              ประเภท
            </div>
            <div>
              คิวที่
            </div>
          </div>
          <div className=" justify-center flex-col items-center">
            {data?.map((product, index) => (
              <div key={index} >
                <VendorBookingCard
                  queueNumber={product.queueNumber}
                  type={product.type}
                />
              </div>
            ))
            }
          </div>
        </div>
      </div>
    </section>
    }
    </>
  );
}
