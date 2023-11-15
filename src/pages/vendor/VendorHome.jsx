import React, { useState } from "react";
import axios from "../../config/axios";
import { useEffect } from "react";
import ShopBanner from "../../component/user-vendor_booking/ShopBanner";
import VendorCard from "../../component/vendor/vendorCard";
export default function VendorHome() {
  const [data, setData] = useState([])
  const [shop, setShop] = useState()
  const [loading, setLoading] = useState(true)

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

  return (
    <section className='w-screen bg-gray-50 px-4 desktop:mt-[2rem]'>
      <div className='max-w-[800px] m-auto desktop:max-w-[1024px]'>
        <div className='mobile:justify-center items-center h-screen flex'>
          <div >
            <ShopBanner
              name={shop && shop[0]?.shopName}
              src={shop && shop[0]?.shopPicture}
            />
            <div >
              {data?.map((product, index) => (
                <div key={index} >
                  <VendorCard
                    username={product.user?.username}
                    src={product.profileImage}
                    queueNumber={product.queueNumber}
                    type={product.type}
                  />
                </div>
              ))
              }
            </div>
          </div>
        </div> 
      </div>
    </section>
  )
}
