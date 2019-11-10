import React from 'react';
import DropdownContent from './DropdownContent';
import { IconLink } from './DropdownContent';
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.04
    }
  }
};

const item = {
  hidden: { y: 5, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

function CompanyComponent() {
  return (
    <DropdownContent>
      <motion.div
        className="container"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {
          [
            'About',
            'Customers',
            'Enterprise',
            'Partners',
            'Partners Program',
            'Job',
            'Enviournment',
            'Newsroom'
          ].map((link, index) => {
            return (
              <motion.div key={index} className="item" variants={item}>
                <IconLink href="https://github.com/anuraghazra/react-stripe-dropdown">{link}</IconLink>
              </motion.div>
            )
          })
        }
      </motion.div>

      <br />
      <h4 className="header__title">FROM THE BLOG</h4>
      <div className="company__blog--links">
        <a href="#">Making a cool payment-system</a>
        <a href="#">CLI tools to the rescue</a>
        <a href="#">Developers are humans too</a>
      </div>
    </DropdownContent>
  );
}
export default CompanyComponent;