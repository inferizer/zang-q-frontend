import React from "react";
import SeeOpenStore from "./SeeOpenStore";
import SeeCloseStore from "./SeeCloseStore";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { IoSearchSharp } from "react-icons/io5";

const arr = [
  {
    nameStore: "สุกกี้ตี๋น้อย",
    location: "MBK Center",
    q: "รออีก 0 คิว",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpDqHdYd9lzOSsm9KvNKOijjxKrULENCSRUw&usqp=CAU",
  },
  {
    nameStore: "สุกกี้ตี๋น้อย",
    location: "MBK Center",
    q: "รออีก 0 คิว",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpDqHdYd9lzOSsm9KvNKOijjxKrULENCSRUw&usqp=CAU",
  },
  {
    nameStore: "สุกกี้ตี๋น้อย",
    location: "MBK Center",
    q: "รออีก 0 คิว",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpDqHdYd9lzOSsm9KvNKOijjxKrULENCSRUw&usqp=CAU",
  },
  {
    nameStore: "สุกกี้ตี๋น้อย",
    location: "MBK Center",
    q: "รออีก 0 คิว",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpDqHdYd9lzOSsm9KvNKOijjxKrULENCSRUw&usqp=CAU",
  },
  {
    nameStore: "สุกกี้ตี๋น้อย",
    location: "MBK Center",
    q: "รออีก 0 คิว",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpDqHdYd9lzOSsm9KvNKOijjxKrULENCSRUw&usqp=CAU",
  },
  {
    nameStore: "สุกกี้ตี๋น้อย",
    location: "MBK Center",
    q: "รออีก 0 คิว",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpDqHdYd9lzOSsm9KvNKOijjxKrULENCSRUw&usqp=CAU",
  },
];

export default function HomePage() {
  return (
    <div>
      <div className="mobile: flex flex-col items-center ">
        <div className="mobile: self-stretch h-28 px-2.5 py-5 w-[350px] bg-gradient-to-b from-rose-50 to-rose-50 flex-col justify-center items-center gap-2.5 inline-flex m-auto">
          <div className="mobile: justify-start items-center gap-[38px] inline-flex">
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
            <div className="mobile:w-7 h-7 relative ">
              <IoSearchSharp className="w-[30px] h-[25px] " />
            </div>
            <div className="mobile:w-56 h-[27px] opacity-50 text-black text-base font-normal font-['Nunito Sans']">
              search restaurant
            </div>
          </div>
        </div>
        <div className="mobile:self-stretch  px-4 flex-col justify-start items-start inline-flex m-auto">
          <div className="mobile:w-[358px] h-[47px] py-2.5 flex-col justify-start items-center gap-2.5 inline-flex ">
            <div className="mobile:justify-start items-start gap-2 inline-flex ">
              <div className="mobile:px-2.5 py-0.5 bg-pink-600 rounded-2xl justify-center items-center gap-2.5 flex hover:bg-red-800">
                <button className="mobile:text-white text-sm font-normal ">
                  all
                </button>
              </div>
              <div className="mobile:px-2.5 py-0.5 rounded-2xl border border-pink-600 justify-center items-center gap-2.5 flex hover:bg-red-800">
                <button className="mobile:text-pink-600 text-sm font-normal font-['IBM Plex Sans Thai']">
                  ปิ้งย่าง
                </button>
              </div>
              <div className="mobile:px-2.5 py-0.5 rounded-2xl border border-pink-600 justify-center items-center gap-2.5 flex hover:bg-red-800">
                <button className="mobile:text-pink-600 text-sm font-normal font-['IBM Plex Sans Thai']">
                  ชาบู
                </button>
              </div>
              <div className="mobile:px-2.5 py-0.5 rounded-2xl border border-pink-600 justify-center items-center gap-2.5 flex hover:bg-red-800">
                <button className="mobile:text-pink-600 text-sm font-normal font-['IBM Plex Sans Thai']">
                  ของหวาน
                </button>
              </div>

              <div className="mobile:px-2.5 py-0.5 rounded-2xl border border-pink-600 justify-center items-center gap-2.5 flex hover:bg-red-800">
                <button className="mobile:text-pink-600 text-sm font-normal font-['IBM Plex Sans Thai']">
                  ยำ/ส้มตำ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {arr.map((el, id) => {
        return (
          <div>
            <SeeOpenStore
              img={el.img}
              nameStore={el.nameStore}
              q={el.q}
              location={el.location}
              id={el.id}
            />
            <SeeCloseStore />
          </div>
        );
      })}
    </div>
  );
}
