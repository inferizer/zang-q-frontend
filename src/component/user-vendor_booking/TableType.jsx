import { useQueue } from "../../hook/useQueue";
import TableIconCard from "./TableIconCard";
export default function TableType({ onClick }) {
  const { setSelectChoice, setMaxSeat, seat, setSeat, setMinSeat } = useQueue();

  const hdlTableTypeClick = (tableType, selectChoice, maxSeat, minSeat) => {
    onClick(tableType);
    setSelectChoice(selectChoice);
    setMaxSeat(maxSeat);
    setMinSeat(minSeat);
    if (seat > maxSeat || seat < minSeat) {
      setSeat(minSeat);
    }
  };

  return (
    <>
      <div
        className='cursor-pointer grow shrink basis-0 rounded-tl-2xl rounded-bl-2xl border border-gray-400 flex flex-col items-center'
        onClick={() => hdlTableTypeClick("one", 1, 2, 1)}
      >
        <TableIconCard
          text='1 - 2'
          choice='1'
        />
      </div>

      <div className='cursor-pointer grow shrink basis-0 border border-gray-400 flex flex-col items-center'
        onClick={() => hdlTableTypeClick("two", 2, 4, 3)}
      >
        <TableIconCard
          text='3 - 4'
          choice='2'
        />
      </div>

      <div className='cursor-pointer grow shrink basis-0 border border-gray-400 flex flex-col items-center'
        onClick={() => hdlTableTypeClick("three", 3, 6, 5)}
      >
        <TableIconCard
          text='5 - 6'
          choice='3'
        />
      </div>

      <div className='cursor-pointer grow shrink basis-0 rounded-tr-2xl rounded-br-2xl border border-gray-400 flex flex-col items-center'
        onClick={() => hdlTableTypeClick("four", 4, 10, 7)}
      >
        <TableIconCard
          text='7 ++'
          choice='4'
        />
      </div>
    </>
  );
}
