// import { useState } from "react";
// import dayjs from "dayjs";
// import TextField from "@mui/material/TextField";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { RiArrowRightDoubleLine, RiArrowLeftDoubleLine } from "react-icons/ri";

// export default function Calendar() {
//   const [datePicker, setDatePicker] = useState(dayjs(new Date()));

//   const handleArrows = (action) => {
//     if (action === "add") {
//       setDatePicker((date) => date.add(1, "day"));
//     } else if (action === "sub") {
//       setDatePicker((date) => date.add(-1, "day"));
//     }
//   };

//   return (
//     <div className="flex justify-center">
//       <LocalizationProvider dateAdapter={AdapterDayjs}>
//         <div className="flex items-center justify-center">
//           <div
//             id="sub"
//             className="cursor-pointer text-xl"
//             onClick={() => handleArrows("sub")}
//           >
//             <RiArrowLeftDoubleLine className="w-6 h-6" />
//           </div>
//           <DatePicker
//             disableFuture
//             openTo="day"
//             views={["year", "month", "day"]}
//             value={datePicker}
//             maxDate={new Date()}
//             onChange={(newDate) => {
//               setDatePicker(newDate);
//             }}
//             inputFormat="DD/MM/YYYY"
//             renderInput={(params) => <TextField {...params} />}
//           />
//           <div
//             id="add"
//             className="cursor-pointer text-xl"
//             onClick={() => handleArrows("add")}
//           >
//             <RiArrowRightDoubleLine className="w-6 h-6" />
//           </div>
//         </div>
//       </LocalizationProvider>
//     </div>
//   );
// }

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import Badge from "@mui/material/Badge";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { RiCheckFill } from "react-icons/ri";

const Calendar = () => {
  const [value, setValue] = useState(new Date());
  const [highlightedDays, setHighlightedDays] = useState([1, 2, 13]);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDatePicker
        // mask='____/__/__'
        variant="static"
        orientation="portrait"
        value={value}
        disableFuture
        onChange={(newValue) => setValue(newValue)}
        renderInput={(params) => {
          <TextField {...params} />;
        }}
        renderDay={(day, _value, DayComponentProps) => {
          const isSelected =
            !DayComponentProps.outsideCurrentMonth &&
            highlightedDays.indexOf(day.getDate()) >= 0;

          return (
            <Badge
              key={day.toString()}
              overlap="circular"
              badgeContent={
                isSelected ? <RiCheckFill color="red" /> : undefined
              }
            >
              <PickersDay {...DayComponentProps} />
            </Badge>
          );
        }}
      />
    </LocalizationProvider>
  );
};

export default Calendar;
