import AcceptButton from "../buttons/AcceptButton";
import CancelButton from "../buttons/CancelButton";
import { MdTableRestaurant } from "react-icons/md";
import { useVendor } from "../../hook/useVendor";
import { useEffect } from "react";


export default function VendorBookingCard({ queueNumber,type }) {
    const { hdl_cancel_queue,hdl_accept_queue} = useVendor()
    useEffect(()=> {
        
    },[])    

    return (
        <div className='self-stretch border-b border-zinc-100 flex-col justify-start items-start inline-flex'>
            <div className='h-[133px] px-3.5 py-2.5 flex-col justify-start items-start gap-2.5 flex'>
                <div className='w-[363px] px-6 py-3 bg-white rounded-xl justify-start items-center gap-[30px] inline-flex'>
                    <div className='grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex'>
                        <div className='self-stretch justify-start items-center gap-2.5 inline-flex'>
                            <div className='grow shrink basis-0 px-4 py-2 rounded-2xl border border-neutral-400 flex-col justify-start items-center inline-flex '>
                                <MdTableRestaurant
                                    className='w-[50px] h-[50px]'
                                />
                                <div>
                                    
                                </div>
                            </div>
                            <div className=" flex">
                                <div>
                                   {type}
                                </div>
                                <div className="grow shrink basis-0 px-4 py-2 border rounded-md border-neutral-400 flex-col justify-start items-center inline-flex">
                                    {queueNumber}
                                </div>
                            </div>
                            <div className="grow shrink basis-0 text-black text-base font-bold font-['Nunito Sans'] flex">
                                <div>
                                    <AcceptButton
                                    onClick={hdl_accept_queue}
                                    />

                                </div>
                                <div>
                                    <CancelButton 
                                    onClick={hdl_cancel_queue}
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
