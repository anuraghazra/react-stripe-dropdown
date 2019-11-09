import React from 'react';
import styled from 'styled-components';

import Container from './Container';

export const Menu = styled.ul`
  display: flex;
  width: 400px;
  list-style: none;
  justify-content: space-between;
`

export const MenuItemWrapper = styled.li`
  padding: 20px 0;
  perspective: 1500px;
  position: relative;

  &:hover > section {
    opacity: 1;
    pointer-events: all;
    transform: translate(-50%,0) rotate3d(0, 0, 0, 0deg);
  }
`

const ItemTitle = styled.span`
  cursor: pointer;
`

const Item = ({ title, children }) => (
  <MenuItemWrapper>
    <ItemTitle>{title}</ItemTitle>

    {children && (
      <Container isHidden={false}>
        {children}
      </Container>
    )}
  </MenuItemWrapper>
)
Menu.Item = Item;


export default Menu;