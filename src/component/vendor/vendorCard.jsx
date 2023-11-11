export default function VendorCard({ src, type, username, queueNumber }) {
    return (
        <div className='self-stretch border-b border-zinc-100 flex-col justify-start items-start inline-flex'>
            <div className='h-[133px] px-3.5 py-2.5 flex-col justify-start items-start gap-2.5 flex '>
                <div className='w-[363px] px-6 py-3 bg-white rounded-xl justify-start items-center gap-[30px] inline-flex shadow-md '>
                    <div className='w-[89px] h-[89px] bg-white rounded-xl border-2 justify-start items-start gap-2.5 flex'>
                        {/* shop picture */}
                        <img
                            className='grow shrink basis-0 rounded-xl'
                            src={src}
                        />
                    </div>
                    <div className='grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex'>
                        <div className='self-stretch justify-start items-center gap-2.5 inline-flex'>
                            {/* shop name */}
                            <div className="grow shrink basis-0 text-black text-base font-bold font-['Nunito Sans'] flex gap-2.5">
                                <div>
                                    {queueNumber}
                                </div>
                                <div>
                                    {username}
                                </div>
                            </div>
                        </div>
                        <div className='self-stretch justify-start items-center gap-2 inline-flex'>
                            <div className='w-[21px] h-5 px-[5px] py-0.5 justify-start items-start gap-2.5 flex'></div>
                            {/* google map marker */}
                            <div className="grow shrink basis-0 text-neutral-400 text-xs font-bold font-['Nunito Sans']">
                                {type}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}