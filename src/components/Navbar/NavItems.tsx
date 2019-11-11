import React from 'react';
import styled from 'styled-components';

import Container from './Container.style';
import { motion, AnimatePresence } from 'framer-motion';

export const Menu = styled.ul`
  display: flex;
  width: 400px;
  list-style: none;
  align-items: center;
  justify-content: space-between;
`

export const MenuItemWrapper = styled.li`
  padding: 20px 0;
  position: relative;
`

const ItemTitle = styled.span`
  cursor: pointer;
`

interface ItemProps {
  title: string;
  children: any;
  handleMouseEnter: () => void;
  handleIndexLeave: () => void;
  direction: number;
}

export const Item: React.FC<ItemProps> = ({
  title,
  children,
  handleMouseEnter,
  handleIndexLeave,
  direction
}) => {
  let animationDirection = direction * 50;

  return (
    <MenuItemWrapper>
      <ItemTitle
        onMouseLeave={handleIndexLeave}
        onMouseEnter={handleMouseEnter}
      >
        {title}
      </ItemTitle>

      {/* AnimatePresence needed for exit */}
      <AnimatePresence>
        {children && (
          <motion.div
            animate={{ opacity: 1, x: 0, }}
            initial={{ opacity: 1, x: animationDirection, }}
            exit={{ opacity: 0 }}
            transition={{
              duration: .2
            }}
          >
            <Container>
              <div className="overflow__content">
                <motion.div
                  transition={{ ease: "easeOut", duration: .2 }}
                  animate={{ opacity: 1, x: 0, }}
                  initial={{ opacity: 0, x: -animationDirection * 4, }}
                >
                  {children}
                </motion.div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </MenuItemWrapper>
  )
}

export default Menu;