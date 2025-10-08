import { useState } from "react";
import Button from 'react-bootstrap/Button';

const DatePicker = () => {

    // const currDate = new Date().toLocaleDateString;
    // console.log("currDate-------------",currDate);

    // const currTime = new Date().toLocaleTimeString;

    const [liveDate,setLiveDate] = useState();
    const [oldDate,setOldDate] = useState();
    console.log("liveDate----------",liveDate);

    const currTime = new Date().toLocaleString();

    const oldAndNewDateHandler = () => {
        setLiveDate(currTime)
        setOldDate(liveDate)
    }

    return (
        <div className="main-content" >
            <p> Curremt Time is = {oldDate} </p>
            <p> Curremt Time is = {liveDate} </p>
            <Button variant="primary" onClick={oldAndNewDateHandler} >Primary</Button>
        </div>
    )
}

export default DatePicker;




// import React from 'react';
// import Button from 'react-bootstrap/Button';

// class DatePicker extends React.Component {

//     constructor(props){
//         super(props);
//         this.state = ""
//     }

//     state = {
//         curTime: new Date().toLocaleString(),
//     }
//     render() {
//         return (
//             <div className="main-content">
//                 <p>Current Time : {this.state.curTime}</p>
//                 <Button variant="primary" onClick={"()=>setDate(this.state)"} >Primary</Button>
//             </div>
//         );
//     }
// }

// export default DatePicker;