import React, { useState } from 'react';
import ReactCalendar from 'react-calendar/dist/entry.nostyle';

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
  }

  return (
    <ReactCalendar
      className="calendar"
      onChange={onChange}
      value={date}
    />
  );
}

export default Calendar;
