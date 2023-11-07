import React from "react";
import VenderLookQandName from "./VenderLookQandName";

export default function VenderLookPicture({ name, q, img, id }) {
  return (
    <div>
      <div class="w-[358px] mt-[20px]  px-6 py-3 bg-white rounded-xl shadow justify-start items-center gap-[30px] inline-flex">
        <div class="w-[190px] h-[190px]  bg-white rounded-xl border-2 border-zinc-100 justify-end object-cover gap-2.5 flex   relation">
          <img
            className=" object-fill
              "
            src={img}
          />
        </div>

        <div class="grow shrink basis-0 flex-col justify-start items-start inline-flex">
          <div class="self-stretch justify-start items-center gap-2.5 inline-flex">
            <div class="grow shrink basis-0 text-black text-[32px] font-bold font-['IBM Plex Sans Thai']">
              {q}
            </div>
          </div>
          <div class="self-stretch justify-start items-center gap-2 inline-flex">
            <div class="grow shrink basis-0 text-neutral-400 text-xl font-medium font-['IBM Plex Sans Thai']">
              {name}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* 
  <img className=" flex w-[40px] h[40px] max-auto" src={img} /> */
}
