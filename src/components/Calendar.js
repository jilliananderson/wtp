import React, { useState } from 'react';
import styled from 'styled-components';

const Calendar = () => {
  const [timeValue, setTimeValue] = useState('');
  const [eventDescription, setEventDesc] = useState('');
  const [events, setEvent] = useState({
    time: '12:00 PM',
    description: 'Lunch with Mom',
  });
  // const today = new Date();
  const standinTodayVariable = 'Tuesday, May 21, 2019'

  const Wrapper = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
`
  // need to reformat the state to an array of objects
  // so instead of changing the object every time
  // we can use the spread operator to keep what we have
  // before we add a new event
  const addEvent = e => {
    e.preventDefault();
    setEvent({ time: timeValue, description: eventDescription });
    setTimeValue('');
    setEventDesc('');
  }

  const onChangeTime = e => {
    e.preventDefault();
    setTimeValue(e.target.value);
  }

  const onChangeEventDesc = e => {
    e.preventDefault();
    setEventDesc(e.target.value);
  }

  // need to figure out how to format the events if we have 
  // an array of objects 
  const formatEvents = obj => {
    let values = Object.values(obj);
    return values.join(', ');
  }

  let formattedEvents = formatEvents(events);

  return (
    <Wrapper>
      <h4>Here's your schedule for today, {standinTodayVariable}:</h4>
      <ul>
        {formattedEvents}
      </ul>
      <Wrapper as="form" onSubmit={addEvent}>
        <h4>Update your schedule</h4>
        <span>Add event time:</span>
        <input type="text" value={timeValue} onChange={onChangeTime}></input>
        <span>Add event description:</span>
        <input type="text" value={eventDescription} onChange={onChangeEventDesc}></input>
        <button type="submit" onClick={addEvent}>Add</button>
      </Wrapper>
    </Wrapper>
  );
}

export default Calendar;


