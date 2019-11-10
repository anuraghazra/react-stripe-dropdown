import styled from 'styled-components';

const DropdownContent = styled.div`
  .company__blog--links {
    a {
      text-overflow: ellipsis;
      font-size: 14px;
      margin-left: 30px;

      &:after {
        content: '>';
        margin-left: 10px;
        font-weight: 900;
      }
    }
  }
`


export const IconLink = styled.a`
  font-weight: bold;
  letter-spacing: 1px;
  
  &:before {
    content: '';
    position: relative;
    top: 2px;
    margin-right: 15px;
    border-radius: 50%;
    display: inline-block;
    width: 15px;
    height: 15px;
    background-color: ${p => p.theme.primaryBlack};
  }
`

export default DropdownContent;