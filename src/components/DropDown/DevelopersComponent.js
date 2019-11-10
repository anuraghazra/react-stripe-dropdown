import React from 'react';
import styled from 'styled-components';
import DropdownContent from './DropdownContent';

import { IconLink } from './DropdownContent';

const DevelopersDDContent = styled(DropdownContent)`
  .developers__title {
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 5px;
    text-transform: uppercase;
    font-size: 16px;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    margin-left: 30px;
    h4 {
      color: ${p => p.theme.lightGray};
    }
  }

  a {
    margin: 15px auto;
    font-size: 14px;
    text-transform: capitalize;
  }
`

function DevelopersComponent() {
  return (
    <DevelopersDDContent>
      <div>
        <IconLink href="https://github.com/anuraghazra/react-stripe-dropdown" className="developers__title">Documentation</IconLink>
        <span style={{ marginLeft: 30 }}>Start integrating the APIs right away</span>
      </div>

      <br />
      <br />
      <div className="grid">
        <div>
          <h4>Get Started</h4>
          <a href="#">Pre-built checkouts</a>
          <a href="#">Libraries and SDK's</a>
          <a href="#">Plugins</a>
          <a href="#">Code samples</a>
        </div>
        <div>
          <h4>Guides</h4>
          <a href="#">Accept online payments</a>
          <a href="#">Manage subscriptions</a>
          <a href="#">Send payouts</a>
          <a href="#">Send payments</a>
        </div>
      </div>

      <br />
      <IconLink href="#" className="developers__title">Full API Reference</IconLink>
      <IconLink href="#" className="developers__title">API Status</IconLink>
      <IconLink href="#" className="developers__title">API Changelog</IconLink>
      <br />
    </DevelopersDDContent>
  );
}
export default DevelopersComponent;