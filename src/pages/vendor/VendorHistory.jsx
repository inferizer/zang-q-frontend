import React, { useState } from "react";
import HistoryButton from "../../component/buttons/HistoryButton";
import DateCalendar from "../../component/DateTImePicker";
import { useVendor} from '../../hook/useVendor';   
import axios from "../../config/axios";
import { useQueue } from "../../hook/useQueue";
import VendorHistoryDisplay from "./VendorHistoryDisplay";

export default function VendorHistory() {
    const { value , setValue} = useVendor()
    const { historyBooking,setHistoryBooking } = useQueue()
    console.log(value)
    const handleClickHistory = () => {
        axios.post('/vendor/history',{value})
        .then(res => {
            setHistoryBooking(res.data.result)
            console.log(res.data.result)
        })
    }
    return (
        <>
        {historyBooking.length > 0 ? (
        <VendorHistoryDisplay />
      ) : (
            <div className="mobile:justify-center items-center flex h-screen text-center">
                <div className=" p-5">  
                <h1 className=" w-40 p-5"> 
                        History
                    </h1>
                        <DateCalendar
                        
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
                    <div>
                      <div className="  p-5">
                        <HistoryButton 
                            text='check Queue Button'
                            onClick={handleClickHistory}
                            
                        />

                      </div>
                    </div>
                </div>
            </div>
      )}
        </>
        
        
    );
}
