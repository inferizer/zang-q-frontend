import VendorHistoryCard from "../../component/vendor/vendorHistoryCard";
import { useQueue } from "../../hook/useQueue";
export default function VendorHistoryDisplay() {
    const { historyBooking, setHistoryBooking } = useQueue()
    return (
        <section className='w-screen bg-gray-50 px-4'>
            <div className='max-w-[800px] m-auto desktop:max-w-[1024px]'>
                <div className='mobile:justify-center items-center h-[600px] flex flex-col gap-10'>
                    <div>
                        <h1 className=" font-bold text-2xl"> Resevations</h1>
                        <div> clear the client who has entered their respective shop from the queue</div>
                    </div>

                    {historyBooking?.map((product, index) => (
                        <div key={index} >
                            <VendorHistoryCard
                                username={product?.user?.username}
                                date={product?.date}
                                time={product?.time}
                                queue={product?.queueNumber}
                                status={product?.status}
                                src={product?.user?.profileImage}
                            />


                        </div>
                    ))
                    }

                </div>
            </div>
        </section>
    )
}