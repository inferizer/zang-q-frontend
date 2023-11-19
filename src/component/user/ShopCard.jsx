import { MdLocationOn, MdOutlineAccessTime } from "react-icons/md"
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hook/useUser";
export default function ShopCard({ storeName, location, q, img, id }) {
  const { hdl_shopList_navigation } = useUser()
  const navigate = useNavigate()

  console.log(id)
  return (

    <div className="flex min-w-[30%] gap-6 desktop:flex-col desktop:gap-4 shadow-lg rounded-xl p-4 transform transition duration-100 ease-in-out  hover:-translate-y-2 hover:shadow-2xl"
      onClick={() => {
        navigate(`/user/book`)
        hdl_shopList_navigation(id)
      }}>
      <div className=" bg-white rounded-lg border-2 border-gray-100 ">
        <img className="h-24 w-full object-cover desktop:h-44" src={img} alt="restaurantImage" />
      </div>

      <div className="flex flex-col justify-center gap-2 desktop:px-2">
        <h6 className="text-lg font-medium">{storeName}</h6>

        <div className="flex gap-2 text-gray-400">
          <MdLocationOn className="text-lg" />
          <p className="text-sm">{location}</p>
        </div>

        <div className="flex gap-2 text-primary-500">
          <MdOutlineAccessTime />
          <p className="text-sm">{q}</p>
        </div>

      </div>
    </div>

  );
}