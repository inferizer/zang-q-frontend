import React from "react";

export default function SeeCloseStore() {
  return (
    <div>
      <div className="mobile:  justify-center items-center flex">
        <div className="mobile:w-[390px] h-[47px] px-4 py-2.5 flex-col justify-start items-center gap-2.5 inline-flex">
          <div className="mobile:justify-start items-start gap-2 inline-flex">
            <div className="mobile:px-2.5 py-0.5 bg-stone-300 rounded-2xl justify-center items-center gap-2.5 flex">
              <div className="mobile:text-white text-sm font-normal font-['IBM Plex Sans Thai']">
                ร้านปิดรับคิวแล้ว
              </div>
            </div>
          </div>
          <div className="mobile:w-[390px] h-64 px-4 py-2.5 flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="mobile:self-stretch px-6 py-3 opacity-60 bg-zinc-100 rounded-xl justify-start items-center gap-[30px] inline-flex">
              <div className="mobile:w-[89px] h-[89px] bg-white rounded-xl border-2 border-zinc-100 justify-start items-start gap-2.5 flex">
                <img
                  className="mobile:grow shrink basis-0 self-stretch"
                  src="https://via.placeholder.com/89x89"
                />
              </div>
              <div className="mobile:grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                <div className="mobile:self-stretch justify-start items-center gap-2.5 inline-flex">
                  <div className="mobile: ml-[29px] grow shrink basis-0 text-black text-base font-bold font-['Nunito Sans']">
                    สุกี้ตี๋น้อย
                  </div>
                </div>
                <div className="mobile:self-stretch justify-start items-center gap-2 inline-flex">
                  <div className="mobile:w-[21px] h-5 px-[5px] py-0.5 justify-start items-start gap-2.5 flex"></div>
                  <div className="mobile:grow shrink basis-0 text-neutral-400 text-xs font-bold font-['Nunito Sans']">
                    MBK center
                  </div>
                </div>
                <div className="mobile:self-stretch justify-start items-center gap-2 inline-flex">
                  <div className="mobile:w-5 h-5 p-0.5 justify-start items-start gap-2.5 flex"></div>
                  <div className="mobile:grow shrink basis-0 text-red-500 text-xs font-bold font-['Nunito Sans']">
                    รออีก 0 คิว
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="mobile:self-stretch px-6 py-3 opacity-60 bg-zinc-100 rounded-xl justify-start items-center gap-[30px] inline-flex">
              <div className="mobile:w-[89px] h-[89px] bg-white rounded-xl border-2 border-zinc-100 justify-start items-start gap-2.5 flex">
                <img
                  className="mobile:grow shrink basis-0 self-stretch"
                  src="https://via.placeholder.com/89x89"
                />
              </div>
              <div className="mobile:grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                <div className="mobile:self-stretch justify-start items-center gap-2.5 inline-flex">
                  <div className="mobile: ml-[29px] grow shrink basis-0 text-black text-base font-bold font-['Nunito Sans']">
                    สุกี้ตี๋น้อย
                  </div>
                </div>
                <div className="mobile:self-stretch justify-start items-center gap-2 inline-flex">
                  <div className="mobile:w-[21px] h-5 px-[5px] py-0.5 justify-start items-start gap-2.5 flex"></div>
                  <div className="mobile:grow shrink basis-0 text-neutral-400 text-xs font-bold font-['Nunito Sans']">
                    MBK center
                  </div>
                </div>
                <div className="mobile:self-stretch justify-start items-center gap-2 inline-flex">
                  <div className="mobile:w-5 h-5 p-0.5 justify-start items-start gap-2.5 flex"></div>
                  <div className="mobile:grow shrink basis-0 text-red-500 text-xs font-bold font-['Nunito Sans']">
                    รออีก 0 คิว
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
