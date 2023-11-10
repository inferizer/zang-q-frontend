import React from "react";
import { IoMdCloseCircle, IoMdCheckmarkCircle } from "react-icons/io";
import { MdTableRestaurant } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function VendorOpenStore() {
  return (
    <div className="mobile:justify-center items-center flex">
      <div className="mobile:w-[390px] h-[939px] pt-[47px] pb-[238px] bg-white flex-col justify-start items-start inline-flex">
        <div className="mobile:self-stretch py-1 border-gray-200 flex-col justify-start items-start inline-flex">
          <div className="mobile:h-[113px] px-4 flex-col justify-start items-end gap-1 flex">
            <div className="mobile:self-stretch px-6 py-3 rounded-xl justify-start items-center gap-[30px] inline-flex">
              <div className="mobile:w-[89px] h-[89px] bg-white rounded-xl border-2 border-gray-200 justify-start items-start gap-2.5 flex">
                <img
                  className="mobile:grow shrink basis-0 self-stretch"
                  src="https://via.placeholder.com/89x89"
                />
              </div>
              <div className="mobile:grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                <div className="mobile:self-stretch justify-start items-center gap-2.5 inline-flex">
                  <div className="mobile:ml-[29px] grow shrink basis-0 text-black text-base font-bold font-['Nunito Sans']">
                    สุกี้ตี๋น้อย
                  </div>
                </div>
                <div className="mobile:self-stretch justify-start items-center gap-2 inline-flex">
                  <div className="mobile:w-[21px] h-5 px-[5px] py-0.5 justify-start items-start gap-2.5 flex">
                    <FaMapMarkerAlt className="mobile:text-[#AAAAAA]" />
                  </div>
                  <div className="mobile:grow shrink basis-0 text-gray-400 text-xs font-bold font-['Nunito Sans']">
                    MBK center
                  </div>
                </div>
                <div className="mobile:justify-start items-start gap-2 inline-flex">
                  <div className="mobile:px-4 py-1 rounded-[40px] border border-pink-600 justify-end items-center flex">
                    <div className="mobile:text-pink-600 text-sm font-normal font-['Nunito Sans']">
                      เปิดรับคิว
                    </div>
                  </div>
                  <div className="mobile:px-4 py-1 bg-pink-500 rounded-[40px] justify-end items-center flex">
                    <div className="mobile:text-white text-sm font-normal font-['Nunito Sans']">
                      เพิ่มคิว
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile:self-stretch h-[533px] px-4 py-3 flex-col justify-start items-start gap-4 inline-flex">
          <div className="mobile:self-stretch justify-between items-start inline-flex">
            <div className="mobile:text-center text-black text-sm font-medium font-['IBM Plex Sans Thai']">
              ประเภท
            </div>
            <div className="mobile:text-center text-black text-sm font-medium font-['IBM Plex Sans Thai']">
              คิวที่
            </div>
          </div>
          <div className="mobile:self-stretch justify-start items-center gap-8 inline-flex">
            <div className="mobile:grow shrink basis-0 px-4 py-1 rounded-2xl border border-gray-400 flex-col justify-start items-center inline-flex">
              <div className="mobile:w-[50px] h-[50px] relative">
                <MdTableRestaurant className="mobile:w-[50px] h-[50px] text-[#9CA3AF]" />
              </div>

              <div className="mobile:text-gray-400 text-base font-normal font-['IBM Plex Sans Thai']">
                1-2
              </div>
            </div>
            <div className="mobile:justify-start items-center gap-4 flex">
              <div className="mobile:justify-start items-center gap-4 flex">
                <div className="mobile:rounded-2xl justify-center items-center gap-2 flex">
                  <div className="mobile:justify-center items-center flex">
                    <div className="mobile:px-2 rounded-tl-2xl rounded-bl-2xl flex-col justify-start items-center inline-flex">
                      <div className="mobile:text-pink-600 text-[32px] font-semibold font-['IBM Plex Sans Thai']">
                        A
                      </div>
                    </div>
                    <div className="mobile:px-4 rounded-tl-2xl rounded-bl-2xl border border-gray-400 flex-col justify-start items-center inline-flex">
                      <div className="mobile:text-pink-600 text-[32px] font-semibold font-['IBM Plex Sans Thai']">
                        0
                      </div>
                    </div>
                    <div className="mobile:px-4 rounded-tr-2xl rounded-br-2xl border border-gray-400 flex-col justify-start items-center inline-flex">
                      <div className="mobile:text-pink-600 text-[32px] font-semibold font-['IBM Plex Sans Thai']">
                        1
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mobile:justify-start items-center gap-2.5 flex">
                <div className="mobile:justify-start items-start gap-2.5 flex">
                  <div className="mobile:bg-[#6B7280]   text-white rounded-[40px]  hover:text-white  hover:bg-gray-700">
                    <IoMdCloseCircle className="mobile:mx-auto h-[35px] w-[35px]" />
                  </div>
                </div>
                <div className="mobile:justify-start items-start gap-2.5 flex">
                  <div className="mobile:bg-[#22C55E]   text-white rounded-[40px]  hover:text-white  hover:bg-gray-700">
                    <IoMdCheckmarkCircle className="mobile:mx-auto h-[35px] w-[35px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile:self-stretch justify-start items-center gap-8 inline-flex">
            <div className="mobile:grow shrink basis-0 px-4 py-1 rounded-2xl border border-gray-400 flex-col justify-start items-center inline-flex">
              <div className="mobile:w-[50px] h-[50px] relative">
                <MdTableRestaurant className="mobile:w-[50px] h-[50px] text-[#9CA3AF]" />
              </div>

              <div className="mobile:text-gray-400 text-base font-normal font-['IBM Plex Sans Thai']">
                2-4
              </div>
            </div>
            <div className="mobile:rounded-2xl justify-center items-center gap-4 flex">
              <div className="mobile:justify-center items-center flex">
                <div className="mobile:px-2 rounded-tl-2xl rounded-bl-2xl flex-col justify-start items-center inline-flex">
                  <div className="mobile:text-pink-600 text-[32px] font-semibold font-['IBM Plex Sans Thai']">
                    B
                  </div>
                </div>
                <div className="mobile:px-4 rounded-tl-2xl rounded-bl-2xl border border-gray-400 flex-col justify-start items-center inline-flex">
                  <div className="mobile:text-pink-600 text-[32px] font-semibold font-['IBM Plex Sans Thai']">
                    0
                  </div>
                </div>
                <div className="mobile:px-4 rounded-tr-2xl rounded-br-2xl border border-gray-400 flex-col justify-start items-center inline-flex">
                  <div className="mobile:text-pink-600 text-[32px] font-semibold font-['IBM Plex Sans Thai']">
                    1
                  </div>
                </div>
              </div>
              <div className="mobile:justify-start items-center gap-2.5 flex">
                <div className="mobile:justify-start items-start gap-2.5 flex">
                  <div className="mobile:bg-[#6B7280]   text-white rounded-[40px]  hover:text-white  hover:bg-gray-700">
                    <IoMdCloseCircle className="mobile:mx-auto h-[35px] w-[35px]" />
                  </div>
                </div>
                <div className="mobile:justify-start items-start gap-2.5 flex">
                  <div className="mobile:bg-[#22C55E]   text-white rounded-[40px]  hover:text-white  hover:bg-gray-700">
                    <IoMdCheckmarkCircle className="mobile:mx-auto h-[35px] w-[35px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile:self-stretch justify-start items-center gap-8 inline-flex">
            <div className="mobile:grow shrink basis-0 px-4 py-1 rounded-2xl border border-gray-400 flex-col justify-start items-center inline-flex">
              <div className="mobile:w-[50px] h-[50px] relative">
                <MdTableRestaurant className="mobile:w-[50px] h-[50px] text-[#9CA3AF]" />
              </div>

              <div className="mobile:text-gray-400 text-base font-normal font-['IBM Plex Sans Thai']">
                4-6
              </div>
            </div>
            <div className="mobile:rounded-2xl justify-center items-center gap-4 flex">
              <div className="mobile:justify-center items-center flex">
                <div className="mobile:px-2 rounded-tl-2xl rounded-bl-2xl flex-col justify-start items-center inline-flex">
                  <div className="mobile:text-pink-600 text-[32px] font-semibold font-['IBM Plex Sans Thai']">
                    C
                  </div>
                </div>
                <div className="mobile:px-4 rounded-tl-2xl rounded-bl-2xl border border-gray-400 flex-col justify-start items-center inline-flex">
                  <div className="mobile:text-pink-600 text-[32px] font-semibold font-['IBM Plex Sans Thai']">
                    0
                  </div>
                </div>
                <div className="mobile:px-4 rounded-tr-2xl rounded-br-2xl border border-gray-400 flex-col justify-start items-center inline-flex">
                  <div className="mobile:text-pink-600 text-[32px] font-semibold font-['IBM Plex Sans Thai']">
                    1
                  </div>
                </div>
              </div>
              <div className="mobile:justify-start items-center gap-2.5 flex">
                <div className="mobile:justify-start items-start gap-2.5 flex">
                  <div className="mobile:bg-[#6B7280]   text-white rounded-[40px]  hover:text-white  hover:bg-gray-700">
                    <IoMdCloseCircle className="mobile:mx-auto h-[35px] w-[35px]" />
                  </div>
                </div>
                <div className="mobile:justify-start items-start gap-2.5 flex">
                  <div className="mobile:bg-[#22C55E]   text-white rounded-[40px]  hover:text-white  hover:bg-gray-700">
                    <IoMdCheckmarkCircle className="mobile:mx-auto h-[35px] w-[35px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile:self-stretch justify-start items-center gap-8 inline-flex">
            <div className="mobile:grow shrink basis-0 px-4 py-1 rounded-2xl border border-gray-400 flex-col justify-start items-center inline-flex">
              <div className="mobile:w-[50px] h-[50px] relative">
                <MdTableRestaurant className="mobile:w-[50px] h-[50px] text-[#9CA3AF]" />
              </div>

              <div className="mobile:text-gray-400 text-base font-normal font-['IBM Plex Sans Thai']">
                6+
              </div>
            </div>
            <div className="mobile:rounded-2xl justify-center items-center gap-4 flex">
              <div className="mobile:justify-center items-center flex">
                <div className="mobile:px-2 rounded-tl-2xl rounded-bl-2xl flex-col justify-start items-center inline-flex">
                  <div className="mobile:text-pink-600 text-[32px] font-semibold font-['IBM Plex Sans Thai']">
                    D
                  </div>
                </div>
                <div className="mobile:px-4 rounded-tl-2xl rounded-bl-2xl border border-gray-400 flex-col justify-start items-center inline-flex">
                  <div className="mobile:text-pink-600 text-[32px] font-semibold font-['IBM Plex Sans Thai']">
                    0
                  </div>
                </div>
                <div className="mobile:px-4 rounded-tr-2xl rounded-br-2xl border border-gray-400 flex-col justify-start items-center inline-flex">
                  <div className="mobile:text-pink-600 text-[32px] font-semibold font-['IBM Plex Sans Thai']">
                    1
                  </div>
                </div>
              </div>
              <div className="mobile:justify-start items-center gap-2.5 flex">
                <div className="mobile:justify-start items-start gap-2.5 flex">
                  <div className="mobile:bg-[#6B7280]   text-white rounded-[40px]  hover:text-white  hover:bg-gray-700">
                    <IoMdCloseCircle className="mobile:mx-auto h-[35px] w-[35px]" />
                  </div>
                </div>
                <div className="mobile:justify-start items-start gap-2.5 flex">
                  <div className="mobile:bg-[#22C55E]   text-white rounded-[40px]  hover:text-white  hover:bg-gray-700">
                    <IoMdCheckmarkCircle className="mobile:mx-auto h-[35px] w-[35px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile: flex-col h-[50px] mx-auto my-auto justify-start items-start gap-2.5 flex">
            <div className="mobile:self-stretch  w-[360px] p-[10px]  rounded-lg border border-pink-600 flex-col justify-start items-center gap-2.5 flex">
              <div className="mobile:self-stretch text-center text-pink-600 text-base font-medium font-['IBM Plex Sans Thai'] leading-relaxed">
                ดูประวัติคิว
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
