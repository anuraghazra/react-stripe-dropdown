import React from 'react';
import DropdownContent from './DropdownContent';
import { IconLink } from './DropdownContent';


function CompanyComponent() {
  return (
    <DropdownContent>
      <IconLink href="#">About</IconLink>
      <IconLink href="#">Customers</IconLink>
      <IconLink href="#">Enterprise</IconLink>
      <IconLink href="#">Partners</IconLink>
      <IconLink href="#">Partners Program</IconLink>
      <IconLink href="#">Job</IconLink>
      <IconLink href="#">Enviournment</IconLink>
      <IconLink href="#">Newsroom</IconLink>

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