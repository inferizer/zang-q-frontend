import React from "react";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { RxExit } from "react-icons/rx";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function VendorProfile() {
  return (
    <div className=" mobile:justify-center items-center flex">
      <div className=" mobile:w-[390px] h-[121.17px] px-4 flex-col justify-start items-end gap-1 inline-flex">
        <div className=" mobile:self-stretch px-6 py-3 rounded-xl justify-start items-center gap-[30px] inline-flex">
          <div className=" mobile:w-[89px] h-[89px] bg-white rounded-xl border-2 border-zinc-100 justify-start items-start gap-2.5 flex">
            <img
              className=" mobile:grow shrink basis-0 self-stretch"
              src=" mobile:https://via.placeholder.com/89x89"
            />
          </div>
          <div className=" mobile:grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
            <div className=" mobile:self-stretch justify-start items-center gap-2.5 inline-flex">
              <div className=" mobile:grow shrink ml-[29px] basis-0 text-black text-base font-bold font-['Nunito Sans']">
                สุกี้ตี๋น้อย
              </div>
            </div>
            <div className=" mobile:self-stretch justify-start items-center gap-2 inline-flex">
              <div className=" mobile:w-[21px] h-5 px-[5px] py-0.5 justify-start items-start gap-2.5 flex">
                <FaMapMarkerAlt className="mobile:text-[#AAAAAA]" />
              </div>
              <div className=" mobile:grow shrink basis-0 text-neutral-400 text-xs font-bold font-['Nunito Sans']">
                MBK center
              </div>
            </div>
            <button className=" mobile">
              <div className=" mobile: bg-black w-[160px] h-[30px] text-white rounded-[40px] hover:text-white border border-gray-800 hover:bg-gray-700 ">
                แก้ไขข้อมูลส่วนตัว
                <LiaGreaterThanSolid className=" mobile:inline ml-[10px]" />
              </div>
            </button>
          </div>
        </div>
        <div className=" mobile:w-[390px] h-20 px-4 py-2.5 flex-col justify-start items-center gap-2.5 inline-flex">
          <div className=" mobile:px-6 py-3 bg-white rounded-xl justify-center items-center gap-[30px] inline-flex">
            <button className=" mobile:w-8 h-8 relative  hover:text-white border border-gray-800 hover:bg-gray-700 ">
              <RxExit className=" mobile:w-[35px] h-[35px]" />
            </button>
            <div className=" mobile:w-[89px] flex-col justify-start items-start gap-2 inline-flex">
              <div className=" mobile:w-[249px] text-black text-base font-bold font-['Nunito Sans']">
                ออกจากระบบ
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
