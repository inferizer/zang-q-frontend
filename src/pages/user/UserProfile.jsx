import React from "react";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { RxExit } from "react-icons/rx";

export default function UserProfile() {
  return (
    <div className="mobile:  justify-center items-center flex">
      <div className="mobile:w-[390px] h-[133px] px-4 py-2.5 flex-col justify-start items-start gap-2.5 inline-flex">
        <div className="mobile:w-[363px] px-6 py-3 bg-white rounded-xl justify-start items-center gap-[30px] inline-flex">
          <div className="mobile:w-[89px] h-[89px] bg-white rounded-xl border-2 border-zinc-100 justify-start items-start gap-2.5 flex">
            <img
              className="mobile:grow shrink basis-0 self-stretch"
              src="https://via.placeholder.com/89x89"
            />
          </div>
          <div className="mobile:grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
            <div className="mobile:self-stretch justify-start items-center gap-2.5 inline-flex">
              <div className="mobile:grow shrink basis-0 text-black text-base font-bold font-['Nunito Sans']">
                nune
              </div>
            </div>
            <button className="mobile">
              <div className="mobile: bg-black w-[160px] h-[30px] text-white rounded-[40px] mt-[16px] hover:text-white border border-gray-800 hover:bg-gray-700 ">
                แก้ไขข้อมูลส่วนตัว
                <LiaGreaterThanSolid className="mobile: inline ml-[10px]" />
              </div>
            </button>
          </div>
        </div>
        <div className="mobile:w-[390px] h-20 px-4 py-2.5 flex-col justify-start items-center gap-2.5 inline-flex">
          <div className="mobile:px-6 py-3 bg-white rounded-xl justify-center items-center gap-[30px] inline-flex">
            <div className="mobile:w-8 h-8 relative">
              <RxExit className="mobile:w-[35px] h-[35px]" />
            </div>
            <div className="mobile:w-[89px] flex-col justify-start items-start gap-2 inline-flex">
              <div className="mobile:w-[249px] text-black text-base font-bold font-['Nunito Sans']">
                ออกจากระบบ
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}