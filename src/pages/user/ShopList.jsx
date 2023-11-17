import { LiaGreaterThanSolid } from "react-icons/lia";
import { IoSearchSharp } from "react-icons/io5";
import { useUser } from "../../hook/useUser";
import Category from "../../component/user/Category";
import ShopCard from "../../component/user/ShopCard";
import maps from '../../assets/image/maps.png'
import { ChevronLeftIcon, ChevronRightIcon, SearchIcon } from "../../assets/icon/Icon";
import { useNavigate } from "react-router-dom";
import { useMap } from "../../hook/useMap";
import { useAuth } from "../../hook/useAuthContext";
import Map from "../map/Map";
import ShopMap from "./ShopMap";
import { useState } from "react";
import { useEffect } from "react";
import { set } from "date-fns";
import Loading from "../../component/loading";

export default function ShopList() {
  const {
    allShop,
    allCategory,
    setFilter,
    filter,
    hdl_filter_search,
    filterResult,
    hdl_searchBar,
    searchBarResult,
    setSearchBarResult,
  } = useUser();

  const { activeMarkers, setActiveMarkers, disableMarkers, setDisableMarkers, loadingLocation, setLoadingLocation, } = useMap()
  const { isShowMap, setIsShowMap, handleShowMap } = useAuth()

  const navigate = useNavigate();

  // console.log(loadingLocation)
  // if (loadingLocation) return <Loading/>

  return (
    <>
      <section className={`section bg-gray-50 desktop:pt-16 ${!isShowMap ? "visible" : "invisible h-0 overflow-hidden"}`}>
        <div className='container flex justify-center gap-6 items-center py-10 desktop:gap-20'>
          <img src={maps} alt='hero-image' className='h-40 desktop:h-72 ' />
          <div className='flex flex-col gap-6 items-start'>
            <p className="text-md desktop:text-xl text-gray-500">
              ซังคิว เว็บให้บริการจองคิวร้านอาหารแบบเรียลไทม์
              <br />ใช้งานง่าย ไม่ต้องติดตั้งแอป
            </p>
            <button
              className='flex justify-center items-center text-md desktop:text-xl bg-primary-400 hover:opacity-60 rounded-3xl text-white px-5 py-2'
              onClick={handleShowMap}
            >
              ร้านใกล้คุณ
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      <section className={`section ${!isShowMap ? "visible" : "invisible h-0 overflow-hidden"}`}>
        <div className="container flex flex-col gap-2 min-w-[240px] pt-8 desktop:max-w-[800px]">
          <h6 className="font-semibold ml-4">ค้นหาร้าน</h6>
          <div className="relative">
            <SearchIcon className="text-gray-500 absolute h-full left-3 p-1" />
            <input
              onChange={hdl_searchBar}
              placeholder="search restaurant"
              className="w-full py-2 pl-12 pr-4 bg-white rounded-3xl shadow-lg justify-start items-center gap-2"
            />
          </div>


          <div className="flex items-center justify-center gap-2 py-3">
            <div
              className={`px-2.5 py-0.5 rounded-2xl border border-primary-500 justify-center items-center gap-2.5 flex ${searchBarResult ? "" : filter ? "" : "bg-primary-100"
                } `}
            >
              <button
                onClick={() => {
                  setFilter(null);
                  setSearchBarResult(null);
                }}
                className="text-primary-500 text-sm"
              >
                All
              </button>
            </div>
            {allCategory.map((el) => (
              <Category
                name={el.name}
                setFilter={setFilter}
                setSearchBarResult={setSearchBarResult}
                hdl_filter_search={hdl_filter_search}
                id={el.id}
              />
            ))}
          </div>

          <div className="flex flex-col gap-4 desktop:flex-row desktop:flex-wrap desktop:justify-start">

            {/* If the map is still loading, show the Loading component */}
            {loadingLocation && <Loading className="h-[200px] p-10" />}

            {searchBarResult
              ? searchBarResult.map((el) => {

                <ShopCard storeName={el.shopName} img={el.shopPicture} />
              }

              )
              : filter
                ? filterResult.ShopsCategories.map((el) => {

                  for (let i of disableMarkers) {
                    if (i.id == el.shop.id) {
                      return null
                    }
                  }
                  if (el.shop.isApprove == "approved") {
                    return (
                      <ShopCard
                        storeName={el.shop.shopName}
                        img={el.shop.shopPicture}
                      />
                    );
                  }
                })
                : activeMarkers?.map((el) => (
                  <ShopCard storeName={el.shopName} img={el.shopPicture} />
                ))}
          </div>
        </div>
      </section >

      <section className="section">
        <div className={`container pb-16 ${isShowMap ? "visible" : "invisible h-0 overflow-hidden"}`}>
          <ShopMap />
          <button
            className="m-auto flex justify-between items-center gap-2 text-primary-500 border-2 border-primary-500 py-1.5 px-6 rounded hover:bg-primary-50"
            onClick={handleShowMap}
          >
            <ChevronLeftIcon className="w-6 h-6" />
            back
          </button>
        </div>
      </section>

    </>
  );
}
