import { useState } from "react";
import TimePicker from "react-time-picker";

function App() {
  const [time, setTime] = useState("10:00");

  const onChange = (value) => {
    setTime(value);
  };

  return (
    <div>
      <TimePicker
        onChange={onChange}
        value={time}
        format="hh:mm a"
        minDetail="hour"
        maxDetail="hour"
      />
    </div>
  );
}

export default App;
