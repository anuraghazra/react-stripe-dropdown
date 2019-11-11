import React from 'react';
import styled, { css } from 'styled-components';
import DropdownContent from './DropdownContent';


const DescriptionLinkWrapper = styled.div<{ oneliner?: boolean }>`
  margin: 20px 0;
  font-size: 14px;
  
  .flex {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .link__icon {
    ${p => p.oneliner ? css`
      width: 30px;
      height: 30px;
    `: css`
      width: 50px;
      height: 50px;
    `}
    border-radius: 50%;
    margin-right: 15px;
  }

  .text-body {
    align-items: center;
    display: flex;

    h3 {
      font-size: 16px;
      margin-right: 10px
    }
  }

  .title {
    text-transform: uppercase;
    color: ${p => p.theme.primaryBlack};
  }
`


interface DescriptionLinkProps {
  title: string;
  children: React.ReactNode;
  iconColor: string;
  oneliner?: boolean;
}
const DescriptionLink: React.FC<DescriptionLinkProps> = ({ title, children, iconColor, oneliner }) => {
  return (
    <DescriptionLinkWrapper oneliner={oneliner}>
      <div className="flex">
        <div style={{ backgroundColor: iconColor }} className="link__icon" />

        <div className={oneliner && "text-body"}>
          <h3 className="title">{title}</h3>
          {children}
        </div>
      </div>
    </DescriptionLinkWrapper>
  )
}

function ProductsComponent() {
  return (
    <DropdownContent>
      <DescriptionLink iconColor="#6ed69a" title="payments">
        Full platform for online payments
      </DescriptionLink>
      <DescriptionLink iconColor="#87bbfd" title="billing">
        Smart invoice & subscriptions
      </DescriptionLink>
      <DescriptionLink iconColor="#68d4f8" title="connect">
        Multy-party payments for platforms
      </DescriptionLink>

      <br />
      {/* oneliners */}
      <DescriptionLink oneliner iconColor="#bfb2f4" title="SIGMA">
        Advanced bussiness analytics
      </DescriptionLink>
      <DescriptionLink oneliner iconColor="#fde49b" title="RADAR">
        Advanced bussiness analytics
      </DescriptionLink>
      <DescriptionLink oneliner iconColor="#f8baf0" title="ATLAS">
        Advanced bussiness analytics
      </DescriptionLink>
      <DescriptionLink oneliner iconColor="#b0d2fd" title="ISSUING">
        Advanced bussiness analytics
      </DescriptionLink>
    </DropdownContent>
  );
}
export default ProductsComponent;