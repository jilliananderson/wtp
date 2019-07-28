import React from 'react';

import styled from 'styled-components';

const Nav = styled.nav`
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  top: 0;
  background: #212121;
  color: #ccc;
`

const List = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`

const ListItem = styled.li`
  height: 100%;
  flex: 1;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  transition: all 0.3s ease-in;
  cursor: pointer;
  color: rgba(246, 192, 229, 0.8);
  font-weight: bold;
  &:hover {
    background-color: white;
  }
`

const TopNav = props => {

  return (
    <Nav>
      <List>
        <ListItem>Inspo</ListItem>
        <ListItem>Moods</ListItem>
        <input placeholder="Search" />
      </List>
    </Nav>
  )
}

export default TopNav;