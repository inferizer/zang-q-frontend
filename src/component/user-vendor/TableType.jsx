import { MdTableRestaurant } from "react-icons/md";
export default function TableType() {
  return (
    <>
      <div className='grow shrink basis-0 px-4 py-2 rounded-tl-2xl rounded-bl-2xl border border-neutral-400 flex-col justify-start items-center inline-flex '>
        <div className='w-[50px] h-[50px] relative '>
          <MdTableRestaurant className='w-[50px] h-[50px] text-neutral-400 hover:text-pink-600' />
        </div>
        <div className="text-neutral-400 hover:text-pink-600 text-base font-normal font-['IBM Plex Sans Thai']">
          1-2
        </div>
      </div>
      {/* type2 */}
      <div className='grow shrink basis-0 px-4 py-2 border border-neutral-400 flex-col justify-start items-center inline-flex'>
        <div className='w-[50px] h-[50px] relative'>
          <MdTableRestaurant className='w-[50px] h-[50px] text-neutral-400 hover:text-pink-600' />
        </div>
        <div className="text-neutral-400 hover:text-pink-600 text-base font-normal font-['IBM Plex Sans Thai']">
          2-4
        </div>
      </div>
      {/* type3 */}
      <div className='grow shrink basis-0 px-4 py-2 border border-neutral-400 flex-col justify-start items-center inline-flex'>
        <div className='w-[50px] h-[50px] relative'>
          <MdTableRestaurant className='w-[50px] h-[50px] text-neutral-400 hover:text-pink-600' />
        </div>
        <div className="text-neutral-400 hover:text-pink-600 text-base font-normal font-['IBM Plex Sans Thai']">
          4-6
        </div>
      </div>
      {/* type4 */}
      <div className='grow shrink basis-0 px-4 py-2 rounded-tr-2xl rounded-br-2xl border border-neutral-400 flex-col justify-start items-center inline-flex'>
        <div className='w-[50px] h-[50px] relative'>
          <MdTableRestaurant className='w-[50px] h-[50px] text-[#EEEEEE]' />
        </div>
        <div className="text-neutral-400 text-base font-normal font-['IBM Plex Sans Thai']">
          6+
        </div>
      </div>
    </>
  );
}
