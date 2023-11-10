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
      <div className='grow shrink basis-0 px-4 py-2 rounded-tl-2xl rounded-bl-2xl border border-neutral-400 flex-col justify-start items-center inline-flex '>
        <TableIconCard
          text='1-2'
          choice='1'
          onClick={() => hdlTableTypeClick("one", 1, 2)}
        />
      </div>

      <div className='grow shrink basis-0 px-4 py-2 border border-neutral-400 flex-col justify-start items-center inline-flex'>
        <TableIconCard
          text='2-4'
          choice='2'
          onClick={() => hdlTableTypeClick("two", 2, 4)}
        />
      </div>

      <div className='grow shrink basis-0 px-4 py-2 border border-neutral-400 flex-col justify-start items-center inline-flex'>
        <TableIconCard
          text='4-6'
          choice='3'
          onClick={() => hdlTableTypeClick("three", 3, 6)}
        />
      </div>

      <div className='grow shrink basis-0 px-4 py-2 rounded-tr-2xl rounded-br-2xl border border-neutral-400 flex-col justify-start items-center inline-flex'>
        <TableIconCard
          text='6+'
          choice='4'
          onClick={() => hdlTableTypeClick("four", 4, 10)}
        />
      </div>
    </>
  );
}
