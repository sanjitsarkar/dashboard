import React,{useState} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const Calender = () => {
const [value, onChange] = useState(new Date());

  return (
    <div className="calender">
        <h3 className="title">Calander</h3>
      <Calendar
      className="calender_container"
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default Calender
