import { useNavigate } from "react-router-dom"
import document from '../../assets/image/document.svg'
import { ChevronRightIcon } from "../../assets/icon/Icon"

export default function VendorLanding() {
  const navigate = useNavigate()
  return (
    <section className="section h-screen flex items-center">
      <div className="container min-w-[360px flex flex-col items-center gap-4">
        <img src={document} className="w-80 h-80 object-fit" />
        <h6 className="text-lg font-medium">กรุณาแนบเอกสารข้อมูล</h6>
        <button
          className="flex items-center gap-2 mt-3 shadow bg-black hover:opacity-60 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-3xl"
          onClick={() => {
            navigate('/vendor/application')
          }}
        >
          แนบเอกสาร
          <ChevronRightIcon />
        </button>

      </div>
    </section>
  )
}