import { RiParentFill, RiHomeHeartFill, RiUserFill } from "react-icons/ri";

export default function UserFooter() {
  return (
    <footer className="bg-primaryRed container max-auto">
      <div className="flex justify-between items-center">
        <div className="text-2xl text-primaryWhite px-8 py-2">Zang Q</div>
        <div className="flex items-center gap-7 text-primaryWhite py-2 px-8">
          <div className="flex flex-col items-center">
            <RiHomeHeartFill className="text-primaryWhite w-6 h-6" />
            <span className="text-primaryWhite text-md font-semibold">
              Home
            </span>
          </div>
          <div className="flex flex-col items-center">
            <RiParentFill className="text-primaryWhite w-6 h-6" />
            <span className="text-primaryWhite text-md font-semibold">
              Queue
            </span>
          </div>
          <div className="flex flex-col items-center">
            <RiUserFill className="text-primaryWhite w-6 h-6" />
            <span className="text-primaryWhite text-md font-semibold">
              Logout
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}