import AcceptButton from "../buttons/AcceptButton";
import CancelButton from "../buttons/CancelButton";
import { useVendor } from "../../hook/useVendor";
import TableIconCard from "../user-vendor_booking/TableIconCard";

export default function VendorBookingCard({ id, queueNumber, type, socket }) {
  const { hdl_cancel_queue, hdl_accept_queue } = useVendor();
  return (
    <div className='self-stretch border-b border-zinc-100 flex-col justify-start items-start inline-flex'>
      <div className='h-[133px] px-3.5 py-2.5 flex-col justify-start items-start gap-2.5 flex'>
        <div className='w-[363px] px-6 py-3 bg-white rounded-xl justify-start items-center gap-[30px] inline-flex'>
          <div className='grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex'>
            <div className='self-stretch justify-start items-center gap-5 inline-flex'>
              <div className='min-w-[110px] grow shrink basis-0 px-4 py-2 rounded-2xl border border-neutral-400 flex-col justify-start items-center inline-flex '>
                <TableIconCard
                  text={
                    type === "one"
                      ? "1 - 2"
                      : type === "two"
                      ? "3 - 4"
                      : type === "three"
                      ? "5 - 6"
                      : "7 ++"
                  }
                />
              </div>
              <div className='flex justify-center items-center gap-2'>
                <div className="text-pink-600 text-4xl font-semibold font-['IBM Plex Sans Thai'] tracking-widest">
                  {type === "one"
                    ? "A"
                    : type === "two"
                    ? "B"
                    : type === "three"
                    ? "C"
                    : "D"}
                </div>
                <div className="min-w-[70px] grow shrink basis-0 px-4 py-2 border rounded-md border-neutral-400 flex-col justify-start items-center inline-flex text-pink-600 text-4xl font-semibold font-['IBM Plex Sans Thai']">
                  {queueNumber}
                </div>
              </div>
              <div className="grow shrink basis-0 text-neutral-500 text-base font-bold font-['Nunito Sans'] flex gap-4">
                <div>
                  <CancelButton
                    onClick={(e) => {
                      hdl_cancel_queue(e.target.id);
                    }}
                    id={id}
                  />
                </div>
                <div>
                  <AcceptButton
                    onClick={(e) => {
                      hdl_accept_queue(e.target.id);
                    }}
                    id={id}
                    className='text-green-500'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
