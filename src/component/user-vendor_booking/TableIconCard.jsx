import { MdTableRestaurant } from "react-icons/md";
import { useQueue } from "../../hook/useQueue";
export default function TableIconCard({ text, onClick, choice }) {
  const { selectChoice } = useQueue();
  return (
    <div className={`flex flex-col px-4 py-2 hover:text-primary-500 ${selectChoice === +choice
      ? "text-primary-500"
      : "text-gray-400"
      }`} onClick={onClick}>
      <MdTableRestaurant
        className={`w-[50px] h-[50px]`}
      />
      <p className="text-center">{text}</p>
    </div>
  );
}
