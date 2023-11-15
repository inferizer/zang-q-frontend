export default function VendorHistoryCard({ src, date, username, status, queue, time }) {
    return (
        <div className='self-stretch border-b border-zinc-100 flex-col justify-start items-start inline-flex shadow-md'>
            <div className='w-[400px] px-6 py-3 bg-white rounded-xl justify-start items-center gap-[30px] inline-flex'>
                <div className='w-[89px] h-[89px] bg-white rounded-xl border-2 justify-start items-start gap-2.5 flex'>
                    {/* shop picture */}
                    <img
                        className='grow shrink basis-0 rounded-xl'
                        src={src}
                    />
                </div>
                <div>
                    <div className='self-stretch justify-start items-center gap-2.5 inline-flex'>
                    </div>
                    <div>
                        <div>
                            {username}
                        </div>
                        <div className=" gap-2 flex">
                            <div>
                                {queue}
                            </div>
                            <div>
                                 {date}
                            </div>
                            <div>
                                {time}
                            </div>
                        </div>
                        <div className={status === "Accepted" ? 'text-green-500' : status === "cancelled" ? 'text-red-500' : ' text-orange-500'}>
                            {status}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}