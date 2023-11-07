import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdTableRestaurant } from "react-icons/md";

export default function UserBookPage() {
  return (
    <div className="mobile:  justify-center items-center flex">
      <div className="w-[390px] h-[844px] pt-[47px] pb-[303px] bg-white flex-col justify-start items-start inline-flex">
        <div className="self-stretch border-b border-zinc-100 flex-col justify-start items-start inline-flex">
          <div className="h-[133px] px-3.5 py-2.5 flex-col justify-start items-start gap-2.5 flex">
            <div className="w-[363px] px-6 py-3 bg-white rounded-xl justify-start items-center gap-[30px] inline-flex">
              <div className="w-[89px] h-[89px] bg-white rounded-xl border-2 border-zinc-100 justify-start items-start gap-2.5 flex">
                <img
                  className="grow shrink basis-0 self-stretch"
                  src="https://via.placeholder.com/89x89"
                />
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-black text-base font-bold font-['Nunito Sans']">
                    สุกี้ตี๋น้อย
                  </div>
                </div>
                <div className="self-stretch justify-start items-center gap-2 inline-flex">
                  <div className="w-[21px] h-5 px-[5px] py-0.5 justify-start items-start gap-2.5 flex"></div>
                  <div className="grow shrink basis-0 text-neutral-400 text-xs font-bold font-['Nunito Sans']">
                    MBK center
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex-col justify-start items-start inline-flex">
          <div className="h-[150px] px-4 py-3 mx-auto flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-black text-base font-medium font-['IBM Plex Sans Thai']">
              ประเภท
            </div>
            <div className="self-stretch rounded-2xl justify-center items-start inline-flex">
              <div className="grow shrink basis-0 px-4 py-2 rounded-tl-2xl rounded-bl-2xl border border-neutral-400 flex-col justify-start items-center inline-flex">
                <div className="w-[50px] h-[50px] relative">
                  <MdTableRestaurant className="w-[50px] h-[50px] text-pink-600" />
                </div>
                <div className="text-pink-600 text-base font-normal font-['IBM Plex Sans Thai']">
                  1-2
                </div>
              </div>
              <div className="grow shrink basis-0 px-4 py-2 border border-neutral-400 flex-col justify-start items-center inline-flex">
                <div className="w-[50px] h-[50px] relative">
                  <MdTableRestaurant className="w-[50px] h-[50px] text-neutral-400" />
                </div>
                <div className="text-neutral-400 text-base font-normal font-['IBM Plex Sans Thai']">
                  2-4
                </div>
              </div>
              <div className="grow shrink basis-0 px-4 py-2 border border-neutral-400 flex-col justify-start items-center inline-flex">
                <div className="w-[50px] h-[50px] relative">
                  <MdTableRestaurant className="w-[50px] h-[50px] text-neutral-400" />
                </div>
                <div className="text-neutral-400 text-base font-normal font-['IBM Plex Sans Thai']">
                  4-6
                </div>
              </div>
              <div className="grow shrink basis-0 px-4 py-2 rounded-tr-2xl rounded-br-2xl border border-neutral-400 flex-col justify-start items-center inline-flex">
                <div className="w-[50px] h-[50px] relative">
                  <MdTableRestaurant className="w-[50px] h-[50px] text-[#EEEEEE]" />
                </div>
                <div className="text-neutral-400 text-base font-normal font-['IBM Plex Sans Thai']">
                  6+
                </div>
              </div>
            </div>
          </div>
          <div className="h-[137px] px- py-3 mx-auto flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-black text-base font-medium font-['IBM Plex Sans Thai']">
              จำนวนที่นั่ง
            </div>
            <div className="self-stretch rounded-2xl justify-center items-center gap-4 inline-flex">
              <div className="bg-[#AAAAAA]   text-white rounded-[40px]  hover:text-white  hover:bg-gray-700">
                <AiOutlineMinus className="mx-auto h-[35px] w-[35px]" />
              </div>
              <div className="justify-center items-center flex">
                <div className="px-6 rounded-tl-2xl rounded-bl-2xl border border-neutral-400 flex-col justify-start items-center inline-flex">
                  <div className="text-pink-600 text-5xl font-semibold font-['IBM Plex Sans Thai']">
                    0
                  </div>
                </div>
                <div className="px-6 rounded-tr-2xl rounded-br-2xl border border-neutral-400 flex-col justify-start items-center inline-flex">
                  <div className="text-pink-600 text-5xl font-semibold font-['IBM Plex Sans Thai']">
                    1
                  </div>
                </div>
              </div>
              <div className="bg-[#AAAAAA]   text-white rounded-[40px]  hover:text-white  hover:bg-gray-700">
                <AiOutlinePlus className="mx-auto h-[35px] w-[35px] " />
              </div>
            </div>
          </div>
          <button
            type="button"
            className="mobile:  w-[350px] mx-auto flex justify-center items-center focus:outline-none text-white bg-[#56CAAE] hover:bg-teal-400 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
