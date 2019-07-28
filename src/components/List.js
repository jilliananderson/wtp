import React, { useState } from 'react';
// import { getToDos } from '../transport';

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

const StyledButton = styled.button`
  text-align: center;
  background-color: #ff5bb0;
  border-radius: 2rem;
  cursor: pointer;
  padding: 15px;
  color: white;
  font-weight: bold;
  &:hover {
    background-color: green;
  }
`

const List = () => {
  const [listItems, amendList] = useState([]);
  const [value, setValue] = useState('');
  const [displayArchived, toggleDisplay] = useState(false)

  let archivedListItems = [];

  // useEffect(() => {
  //   getToDos().then(response => {
  //     console.log(response)
  //   });
  // }, []);

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

  let displayToDos = () => {
    toggleDisplay(!displayArchived);
  }

  const formattedList = formatList(listItems)
  const formattedArchivedList = formatList(archivedListItems)

  return (
    <StyledListContainer>
      <h2>Add items to your to-do list below.</h2>
      <Wrapper as="form" onSubmit={onClick}>
        <input type="text" name="todoInput" value={value} onChange={onChange}></input>
        <button type="submit" onClick={onClick}>Add</button>
      </Wrapper>
      <Wrapper as="ul">{formattedList}</Wrapper>
      <Wrapper as="ul">{formattedArchivedList}</Wrapper>
      <StyledButton type="button" onClick={displayToDos}>Show Archived To-Dos</StyledButton>
      <StyledButton type="button" onClick={clearList}>Clear List</StyledButton>
    </StyledListContainer>
  );
  
}

export default List;