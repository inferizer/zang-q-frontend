import React from "react";

export default function VendorHistoryStory() {
  return (
    <div className="mobile:justify-center items-center flex">
      <div className="mobile">
        <div className="mobile:w-[332px] h-[49.47px] flex-col justify-start items-start inline-flex">
          <div className="mobile:self-stretch h-[49.47px] bg-black bg-opacity-5 rounded-tl rounded-tr flex-col justify-start items-start flex">
            <div className="mobile:self-stretch h-[55px] px-[10.48px] pt-[7.86px] pb-[6.99px] flex-col justify-start items-start gap-[2.62px] flex">
              <lable className="mobile:text-black text-opacity-60 text-xs font-normal font-['Roboto'] leading-3 tracking-tight">
                Date
              </lable>

              <div className="mobile:self-stretch justify-start items-center inline-flex">
                <div className="mobile:w-[0px] h-[20.97px] relative"></div>
                <input
                  className="mobile: text-black text-opacity-60 bg-black bg-opacity-5"
                  type="time"
                  id="openstore"
                  name="openstore"
                />
                <div className="mobile:w-[38.44px] justify-center items-center flex">
                  <div className="mobile:p-[10.48px] rounded-[87.37px] flex-col justify-center items-center inline-flex">
                    <div className="mobile:w-[17.47px] h-[17.47px] relative"></div>
                  </div>
                </div>
                <div className="mobile:w-[20.97px] h-[0px] relative"></div>
              </div>
            </div>
            <div className="mobile:w-[332px] h-[0px] border border-black border-opacity-40"></div>
          </div>
        </div>
        <br className="mobile:mobile" />
        <br className="mobile:mobile" />
        <br className="mobile:mobile" />
        <div className="mobile:w-[358px] h-[54px] px-4 py-3.5 rounded-lg border border-pink-600 flex-col justify-start items-center gap-2.5 inline-flex">
          <button
            type="button"
            className="mobile: self-stretch text-center text-pink-600 text-base font-medium font-['IBM Plex Sans Thai'] leading-relaxed"
          >
            ดูประวัติคิว
          </button>
        </div>
      </div>
    </div>
  );
}
