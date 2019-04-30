import React, { useState } from 'react';

const List = () => {
  const [listItems, amendList] = useState([]);
  const [value, setValue] = useState('');

  const onChange = e => {
    setValue(e.target.value);
  }

  const onClick = e => {
    e.preventDefault();
    amendList(listItems.concat(value))
    setValue('');
  }

  const clearList = () => {
    amendList([]);
  }

  const formatList = arr => {
    return arr.map(item => {
      return (
        <li key={item}>{item}</li>
      );
    })
  }

  const formattedList = formatList(listItems)

  return (
    <div className="list-container">
      <h2>Add items to your to-do list below.</h2>
      <form className="list" onSubmit={onClick}>
        <input type="text" name="todoInput" value={value} onChange={onChange}></input>
        <button type="submit" onClick={onClick}>Add</button>
      </form>
      <ul>{formattedList}</ul>
      <button type="button" onClick={clearList}>Clear List</button>
    </div>
  );
  
}

export default List;