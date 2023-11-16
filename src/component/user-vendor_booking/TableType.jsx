import { useQueue } from "../../hook/useQueue";
import TableIconCard from "./TableIconCard";
export default function TableType({ onClick }) {
  const { setSelectChoice, setMaxSeat, seat, setSeat } = useQueue();

  const hdlTableTypeClick = (tableType, selectChoice, maxSeat) => {
    onClick(tableType);
    setSelectChoice(selectChoice);
    setMaxSeat(maxSeat);
    if (seat > maxSeat) {
      setSeat(maxSeat);
    }
  };

  return (
    <>
      <div
        className='cursor-pointer grow shrink basis-0 rounded-tl-2xl rounded-bl-2xl border border-gray-400 flex-col items-center'
        onClick={() => hdlTableTypeClick("one", 1, 2)}
        >
        <TableIconCard
          text='1-2'
          choice='1'
        />
      </div>

      <div className='cursor-pointer grow shrink basis-0 border border-gray-400 flex-col items-center'>
        <TableIconCard
          text='2-4'
          choice='2'
          onClick={() => hdlTableTypeClick("two", 2, 4)}
        />
      </div>

      <div className='cursor-pointer grow shrink basis-0 border border-gray-400 flex-col items-center'>
        <TableIconCard
          text='4-6'
          choice='3'
          onClick={() => hdlTableTypeClick("three", 3, 6)}
        />
      </div>

      <div className='cursor-pointer grow shrink basis-0 rounded-tr-2xl rounded-br-2xl border border-gray-400 flex-col items-center'>
        <TableIconCard
          text='6+'
          choice='4'
          onClick={() => hdlTableTypeClick("four", 4, 10)}
        />
      </div>
    </>
  );
}
