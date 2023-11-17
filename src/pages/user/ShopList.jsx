import { LiaGreaterThanSolid } from "react-icons/lia";
import { IoSearchSharp } from "react-icons/io5";
import { useUser } from "../../hook/useUser";
import Category from "../../component/user/Category";
import ShopCard from "../../component/user/ShopCard";
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

  return (
    <div className=" w-screen bg-gray-50 px-4 desktop:mt-20 mt-4">
      <div className=" max-w-[800px] m-auto desktop:max-w-[1024px]">
        <div className="mobile:flex flex-col items-center ">
          <div className="mobile:self-stretch h-28 px-2.5 py-5 w-[350px] bg-gradient-to-b from-rose-50 to-rose-50 flex-col justify-center items-center gap-2.5 inline-flex m-auto">
            <div className="mobile:justify-start items-center gap-[38px] inline-flex">
              <img
                className="mobile: w-[85px] h-[85px]"
                src="https://via.placeholder.com/85x85"
              />
              <button className="mobile">
                <div className="mobile: bg-black w-[130px] h-[30px] text-white rounded-[40px]  hover:text-white border border-gray-800 hover:bg-gray-700 ">
                  ร้านใกล้คุณ
                  <LiaGreaterThanSolid className="mobile: inline ml-[10px]" />
                </div>
              </button>
            </div>
          </div>
          <div className="mobile:self-stretch h-20 p-4 flex-col justify-start items-start gap-2.5 inline-flex w-[350px] m-auto">
            <div className="mobile:self-stretch p-2.5 bg-white rounded-[100px] shadow justify-start items-center gap-2.5 inline-flex ">
              <div className="mobile:w-7 h-7 relative flex gap-4">
                <IoSearchSharp className="w-[30px] h-[25px] " />
                <input
                  onChange={hdl_searchBar}
                  placeholder="search restaurant"
                />
              </div>
            </div>
            
          </div>
          <div className="mobile:self-stretch  px-4 flex-col justify-start items-start inline-flex m-auto  ">
            <div className="mobile:w-[10rem] h-[4rem] py-2.5 flex-col justify-start items-center gap-2.5 inline-flex  ">
              <div className="mobile:justify-start items-start gap-2 inline-flex">
                <div
                  className={`mobile:px-2.5 py-0.5 rounded-2xl border border-pink-600 justify-center items-center gap-2.5 flex ${
                    searchBarResult ? "" : filter ? "" : "bg-red-800"
                  } `}
                >
                  <button
                    onClick={() => {
                      setFilter(null);
                      setSearchBarResult(null);
                    }}
                    className="text-pink-600 text-sm font-normal font-['IBM Plex Sans Thai']"
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
            </div>
          </div>
          {searchBarResult
            ? searchBarResult.map((el) => (
                <ShopCard storeName={el.shopName} img={el.shopPicture} id={el.id} />
              ))
            : filter
            ? filterResult.ShopsCategories.map((el) => {
                if (el.shop.isApprove == "approved") {
                  return (
                    <ShopCard
                      storeName={el.shop.shopName}
                      img={el.shop.shopPicture}
                      id={el.shop.id}
                    />
                  );
                }
              })
            : allShop.map((el) => (
                <ShopCard storeName={el.shopName} img={el.shopPicture} id={el.id} />
              ))}
        </div>
      </div>
    </div>
  );
}
