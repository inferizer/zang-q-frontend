import React from "react";
import { IoSearchSharp } from "react-icons/io5";

export default function UserLookMap() {
  return (
    <div className="mobile:  justify-center items-center flex">
      <div className="mobile:self-stretch h-20 p-4 flex-col justify-start items-start gap-2.5 inline-flex">
        <div className="mobile:self-stretch p-2.5 bg-white rounded-[100px] shadow justify-start items-center gap-2.5 inline-flex">
          <div className="mobile:w-7 h-7 relative">
            <IoSearchSharp className="mobile: w-[30px] h-[25px]" />
          </div>
          <div className="mobile:w-56 h-[27px] opacity-50 text-black text-base font-normal font-['Nunito Sans']">
            search restaurant
          </div>
        </div>
        <img
          className="mobile: w-[390px] h-[502px]"
          src="https://via.placeholder.com/390x502"
        />
      </div>
    </div>
  );
}
