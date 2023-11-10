import React from "react";
import { MdPeople } from "react-icons/md";
import { AiOutlineCalendar } from "react-icons/ai";

export default function VendorLookUser({ name, qw, imgUrl, status, date, id }) {
  return (
    <div>
      <div className="mobile:w-[390px] px-4 py-3 bg-white rounded-2xl shadow justify-start items-center gap-2.5 inline-flex mb-[20px]">
        <div className="w-[100px] h-[100px] rounded-full">{imgUrl}</div>

        <div className="mobile:grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
          <div className="mobile:text-slate-950 text-base font-bold font-['Inter']">
            {name}
          </div>
          <div className="mobile:justify-start items-start gap-2 inline-flex">
            <div className="mobile:justify-start items-center gap-0.5 flex">
              <div className="mobile:w-4 h-4 relative">
                <MdPeople />
              </div>
              <div className="mobile:text-gray-700 text-xs font-medium font-['Inter']">
                {qw}
              </div>
            </div>
            <div className="mobile:justify-start items-center gap-0.5 flex">
              <div className="mobile:w-3 h-3 relative">
                <AiOutlineCalendar className="mobile: text-black" />
              </div>
              <div className="mobile:text-gray-700 text-xs font-medium font-['Inter']">
                {date}
              </div>
            </div>
          </div>
          <div className="mobile:self-stretch text-orange-400 text-xs font-medium font-['Inter']">
            {status}
          </div>
        </div>
      </div>
    </div>
  );
}

//33div
