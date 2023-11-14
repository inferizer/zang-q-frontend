import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Badge from "@mui/material/Badge";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { RiCheckFill } from "react-icons/ri";
import { useState } from "react";
import { useVendor} from '../hook/useVendor'
export default function DateCalendar() {
    // const [value, setValue] = useState(new Date());
    const [highlightedDays, setHighlightedDays] = useState([1, 2, 13]);
    const { value , setValue} = useVendor()
    // console.log(value)
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                label="Date"
                variant="static"
                disableFuture
                onChange={(newValue) => 
                    setValue(newValue)}
                value={value}
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
    )
}