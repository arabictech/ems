import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the CSS

const AttendanceDatePicker = () => {

    const [startDate, setStartDate] = useState(new Date());

    return (
        <div>
            <DatePicker
                selected={startDate} // This sets the default/selected date
                onChange={(date) => setStartDate(date)} // Updates the state when a new date is selected
                disabled
            />
        </div>
    )
}

export default AttendanceDatePicker