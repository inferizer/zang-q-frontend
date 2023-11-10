import React from "react";
import { MdLocationOn, MdOutlineAccessTime } from "react-icons/md";

export default function SeeCloseStore({ nameStore, location, q, img, id }) {
  return (
    <div>
      <div className="mobile:  justify-center items-center flex">
        <div className="w-[358px] h-[113px] mb-[15px] px-6 py-3 opacity-60 bg-zinc-100 rounded-xl justify-start items-center gap-[30px] inline-flex">
          <div className="w-[89px] h-[89px] bg-white rounded-xl border-2 border-zinc-100 justify-start items-start gap-2.5 flex">
            <img
              className=" grow shrink basis-0 self-stretch
              "
              src={img}
            />
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
            <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
              <div className="grow shrink basis-0 ml-[29px] text-black text-base font-bold font-['Nunito Sans']">
                {nameStore}
              </div>
            </div>
            <div className="self-stretch justify-start items-center gap-2 inline-flex">
              <div className="w-[21px] h-5 px-[5px] py-0.5 justify-start items-start gap-2.5 flex">
                <MdLocationOn />
              </div>
              <div className="grow shrink basis-0 text-neutral-400 text-xs font-bold font-['Nunito Sans']">
                {location}
              </div>
            </div>
            <div className="self-stretch justify-start items-center gap-2 inline-flex">
              <div className="w-5 h-5 p-0.5 justify-start items-start gap-2.5 flex">
                <MdOutlineAccessTime />
              </div>
              <div className="grow shrink basis-0 text-pink-500 text-xs font-bold font-['Nunito Sans']">
                {q}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
