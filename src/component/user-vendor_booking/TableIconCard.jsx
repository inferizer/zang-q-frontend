import { MdTableRestaurant } from "react-icons/md";
import { useQueue } from "../../hook/useQueue";
export default function TableIconCard({ text, onClick, choice }) {
  const { selectChoice } = useQueue();
  return (
    <>
      <div className='w-[50px] h-[50px] relative ' onClick={onClick}>
        <MdTableRestaurant
          className={`w-[50px] h-[50px] ${
            selectChoice === +choice
              ? "text-pink-600"
              : "text-neutral-400 hover:text-pink-600"
          } `}
        />
      </div>
      <div
        className={`${
          selectChoice === +choice
            ? "text-pink-600"
            : "text-neutral-400 hover:text-pink-600"
        } text-base font-normal font-['IBM Plex Sans Thai']`}
      >
        {text}
      </div>
    </>
  );
}
