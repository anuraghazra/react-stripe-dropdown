import React, { useState } from 'react';
import styled from 'styled-components';

import Menu, { Item } from './NavItems'
import ProductsComponent from '../DropDown/ProductsComponent';
import DevelopersComponent from '../DropDown/DevelopersComponent';
import CompanyComponent from '../DropDown/CompanyComponent';



const navConfig: { title: string, component: React.ReactNode }[] = [
  { title: 'Products', component: <ProductsComponent /> },
  { title: 'Developers', component: <DevelopersComponent /> },
  { title: 'Company', component: <CompanyComponent /> },
]

const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: linear-gradient(45deg, #5533ff, #0ec3ff); */
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  color: white;
  height: 65px;
  padding: 0 250px;

  .logo {
    background-color: white;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    margin-right: auto;
  }

  @media all and (max-width: 1200px) {
    padding: 0 100px;
  }
`


const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);

  function handleActiveIndex(index: number) {
    setActiveIndex(index);
  }

  function handleMouseLeave() {
    setActiveIndex(null)
  }

  function handleIndexLeave() {
    setPreviousIndex(activeIndex);
  }

  return (
    <NavWrapper>
      <h3 className="logo"><a target="__blank" href="https://anuraghazra.github.io/">AH</a></h3>

      <Menu onMouseLeave={handleMouseLeave}>
        {navConfig.map((item, index) => {
          return (
            <Item
              handleIndexLeave={handleIndexLeave}
              handleMouseEnter={() => handleActiveIndex(index)}
              direction={previousIndex - (activeIndex || 0)}
              key={index}
              title={item.title}
            >
              {(index === activeIndex) && item.component}
            </Item>
          )
        })}
      </Menu>
    </NavWrapper>
  );
}
export default Navbar;