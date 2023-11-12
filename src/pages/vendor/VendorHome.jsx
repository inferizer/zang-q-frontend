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
          // console.log(res.data.result)
        })
        .catch(err => {
          console.log(err)
        })
        .finally(setLoading(false))

  }, [])

  return (
    <section className='w-screen bg-gray-50 px-4'>
      <div className='max-w-[800px] m-auto desktop:max-w-[1024px]'>
        <div className='mobile:justify-center items-center h-screen flex'>
          <div >
            <ShopBanner
              name={shop && shop[0]?.shop?.shopName}
            />
            <div >
              {data?.map((product, index) => (
                <div key={index} className=" gap-">
                  <VendorCard
                    username={product.user.username}
                    src={product.user.profileImage}
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
