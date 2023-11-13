import AddQueueButton from "../buttons/AddQueueButton";

export default function ShopBanner({ src, name, onClick,AddQueue,setAddQueue, markMap }) {

  return (
    <div className='self-stretch border-b border-zinc-100 flex-col justify-start items-start inline-flex'>
      <div className='h-[133px] px-3.5 py-2.5 flex-col justify-start items-start gap-2.5 flex'>
        <div className='w-[363px] px-6 py-3 bg-white rounded-xl justify-start items-center gap-[30px] inline-flex'>
          <div className='w-[89px] h-[89px] bg-white rounded-xl border-2 border-zinc-100 justify-start items-start gap-2.5 flex'>
            {/* shop picture */}
            <img
              className='grow shrink rounded-xl'
              src={src}
            />
          </div>
          <div className='grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex'>
            <div className='self-stretch justify-start items-center gap-2.5 inline-flex'>
              {/* shop name */}
              <div className="grow shrink basis-0 text-black text-base font-bold font-['Nunito Sans']">
                {name}
              </div>
            </div>
            <div className='self-stretch justify-start items-center gap-2 inline-flex'>
              {/* google map marker */}
              <div className="grow shrink basis-0 text-neutral-400 text-xs font-bold font-['Nunito Sans']">
                <div>
                  {markMap}ss
                </div>
                <div>
                  {AddQueue? null:<div>
                    <AddQueueButton text="ปิดรับคิว" />
                    <AddQueueButton text="เพิ่มคิว" onClick={onClick} />
                    <button onClick={onClick}>test</button>
                  </div>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
