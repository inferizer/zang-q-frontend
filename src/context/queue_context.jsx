import { useState } from "react";
import { createContext } from "react";

export const QueueContext = createContext();

export default function QueueContextProvider({ children }) {
  const [seat, setSeat] = useState(0);
  const [maxSeat, setMaxSeat] = useState(10);
  const [tableType, setTableType] = useState();
  const [selectChoice, setSelectChoice] = useState(0);

  return (
    <QueueContext.Provider
      value={{
        seat,
        setSeat,
        maxSeat,
        setTableType,
        selectChoice,
        setSelectChoice,
        setMaxSeat,
      }}
    >
      {children}
    </QueueContext.Provider>
  );
}
