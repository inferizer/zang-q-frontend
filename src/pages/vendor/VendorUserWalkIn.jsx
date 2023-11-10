import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdTableRestaurant } from "react-icons/md";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function VendorUserWalkIn() {
  return (
    <div className="mobile:justify-center items-center flex">
      <div className="mobile:w-[390px] h-[133px] border-zinc-100 flex-col justify-start items-start inline-flex">
        <div className="mobile:h-[133px]  px-4 py-2.5 flex-col justify-start items-start gap-2.5 flex">
          <div className="mobile:w-[363px] ml-[59px] px-6 py-3 bg-white rounded-xl justify-start items-center gap-[30px] inline-flex">
            <div className="mobile:w-[89px] h-[89px] bg-white rounded-xl border-2 border-zinc-100 justify-start items-start gap-2.5 flex">
              <img
                className="mobile:grow shrink basis-0 self-stretch"
                src="https://via.placeholder.com/89x89"
              />
            </div>
            <div className="mobile:grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
              <div className="mobile:self-stretch justify-start items-center gap-2.5 inline-flex">
                <div className="mobile:grow shrink basis-0 ml-[29px] text-black text-base font-bold font-['Nunito Sans']">
                  สุกี้ตี๋น้อย
                </div>
              </div>
              <div className="mobile:self-stretch justify-start items-center gap-2 inline-flex">
                <div className="mobile:w-[21px] h-5 px-[5px] py-0.5 justify-start items-start gap-2.5 flex">
                  <FaMapMarkerAlt className="mobile:text-[#AAAAAA]" />
                </div>
                <div className="mobile:grow shrink basis-0 text-neutral-400 text-xs font-bold font-['Nunito Sans']">
                  MBK center
                </div>
              </div>
            </div>
          </div>
          <div className="mobile:w-[390px] h-[443px] px-4 flex-col justify-start items-start inline-flex">
            <div className="mobile:self-stretch h-[92px] py-3 flex-col justify-start items-start flex">
              <div className="mobile:self-stretch text-black text-base font-medium font-['IBM Plex Sans Thai']">
                ชื่อลูกค้า
              </div>
              <div className="mobile:self-stretch p-2.5 rounded-lg border border-gray-400 justify-center items-center gap-2.5 inline-flex">
                <div className="mobile:grow shrink basis-0 opacity-60 text-black text-base font-normal font-['Nunito Sans']">
                  ชื่อ
                </div>
              </div>
            </div>
            <div className="mobile:self-stretch h-[150px] py-3 flex-col justify-start items-start gap-2 flex">
              <div className="mobile:self-stretch text-black text-base font-medium font-['IBM Plex Sans Thai']">
                ประเภท
              </div>
              <div className="mobile:self-stretch rounded-2xl justify-center items-start inline-flex">
                <div className="mobile:grow shrink basis-0 px-4 py-2 rounded-tl-2xl rounded-bl-2xl border border-gray-400 flex-col justify-start items-center inline-flex">
                  <div className="mobile:w-[50px] h-[50px] relative">
                    <MdTableRestaurant className="mobile:w-[50px] h-[50px] text-pink-600" />
                  </div>
                  <div className="mobile:text-pink-600 text-base font-normal font-['IBM Plex Sans Thai']">
                    1-2
                  </div>
                </div>
                <div className="mobile:grow shrink basis-0 px-4 py-2 border border-gray-400 flex-col justify-start items-center inline-flex">
                  <div className="mobile:w-[50px] h-[50px] relative">
                    <MdTableRestaurant className="mobile:w-[50px] h-[50px] text-neutral-400" />
                  </div>
                  <div className="mobile:text-gray-400 text-base font-normal font-['IBM Plex Sans Thai']">
                    2-4
                  </div>
                </div>
                <div className="mobile:grow shrink basis-0 px-4 py-2 border border-gray-400 flex-col justify-start items-center inline-flex">
                  <div className="mobile:w-[50px] h-[50px] relative">
                    <MdTableRestaurant className="mobile:w-[50px] h-[50px] text-neutral-400" />
                  </div>
                  <div className="mobile:text-gray-400 text-base font-normal font-['IBM Plex Sans Thai']">
                    4-6
                  </div>
                </div>
                <div className="mobile:grow shrink basis-0 px-4 py-2 border border-gray-400 flex-col justify-start items-center inline-flex">
                  <div className="mobile:w-[50px] h-[50px] relative">
                    <MdTableRestaurant className="mobile:w-[50px] h-[50px] text-neutral-400" />
                  </div>
                  <div className="mobile:text-gray-400 text-base font-normal font-['IBM Plex Sans Thai']">
                    6+
                  </div>
                </div>
              </div>
            </div>
            <div className="mobile:self-stretch h-[137px] py-3 flex-col justify-start items-start gap-2 flex">
              <div className="mobile:self-stretch text-black text-base font-medium font-['IBM Plex Sans Thai']">
                จำนวนที่นั่ง
              </div>
              <div className="mobile:self-stretch rounded-2xl justify-center items-center gap-4 inline-flex">
                <div className="mobile:bg-[#AAAAAA]   text-white rounded-[40px]  hover:text-white  hover:bg-gray-700">
                  <AiOutlineMinus className="mobile:mx-auto h-[35px] w-[35px]" />
                </div>
                <div className="mobile:justify-center items-center flex">
                  <div className="mobile:px-6 rounded-tl-2xl rounded-bl-2xl border border-gray-400 flex-col justify-start items-center inline-flex">
                    <div className="mobile:text-pink-600 text-5xl font-semibold font-['IBM Plex Sans Thai']">
                      0
                    </div>
                  </div>
                  <div className="mobile:px-6 rounded-tr-2xl rounded-br-2xl border border-gray-400 flex-col justify-start items-center inline-flex">
                    <div className="mobile:text-pink-600 text-5xl font-semibold font-['IBM Plex Sans Thai']">
                      2
                    </div>
                  </div>
                </div>
                <div className="mobile:bg-[#AAAAAA]   text-white rounded-[40px]  hover:text-white  hover:bg-gray-700">
                  <AiOutlinePlus className="mobile:mx-auto h-[35px] w-[35px] " />
                </div>
              </div>
            </div>
            <div className="mobile:self-stretch h-16 pt-2.5 flex-col justify-start items-start gap-2.5 flex">
              <div className="mobile:self-stretch h-[54px] px-4 py-3.5 bg-pink-500 rounded-lg flex-col justify-start items-center gap-2.5 flex">
                <div className="mobile:self-stretch text-center text-white text-base font-medium font-['IBM Plex Sans Thai'] leading-relaxed">
                  จอง
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
