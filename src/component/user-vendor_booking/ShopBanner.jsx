import { MdLocationOn, MdOutlineAccessTime } from "react-icons/md"

export default function ShopBanner({ shopName, location, q, shopPicture }) {
  return (
    <div className="flex gap-6 p-4 border-b border-gray-100 ">
      <div className=" bg-white rounded-lg border-2 border-gray-100 ">
        <img className="h-24 w-full object-cover desktop:h-44" src={shopPicture} alt="restaurantImage" />
      </div>

      <div className="flex flex-col grow justify-center gap-2 desktop:px-2">
        <h6 className="text-lg font-medium">{shopName}</h6>

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