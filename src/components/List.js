import React, { useState } from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  text-align: left;
`

const Wrapper = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const StyledListContainer = styled.div`
  justify-content: center;
  text-align: center;
  padding-bottom: 10vh;
`

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
        <ListItem key={item}>{item}</ListItem>
      );
    })
  }

  const formattedList = formatList(listItems)

  return (
    <StyledListContainer>
      <h2>Add items to your to-do list below.</h2>
      <Wrapper as="form" onSubmit={onClick}>
        <input type="text" name="todoInput" value={value} onChange={onChange}></input>
        <button type="submit" onClick={onClick}>Add</button>
      </Wrapper>
      <Wrapper as="ul">{formattedList}</Wrapper>
      <button type="button" onClick={clearList}>Clear List</button>
    </StyledListContainer>
  );
  
}

export default List;