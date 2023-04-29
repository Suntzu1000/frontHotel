import React, { useState } from "react";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../datepicker.css";
import { BsCalendar } from "react-icons/bs";

const CheckIn = () => {
  const [startDate, setStartDate] = useState(false);
  return (
    <div className="relative flex items-center justify-end h-full " >
      <div className="absolute z-10" >
        <div>
          <BsCalendar />
        </div>
      </div>
      <Datepicker className="w-full h-full" selected={startDate} placeholderText="Check-In(Entrada)" onChange={(date) => setStartDate(date)} />
    </div>
  );
};

export default CheckIn;
