import styled from 'styled-components';

const Container = styled.section`
  color: ${p => p.theme.gray};
  /* color: #6d7580; */

  font-size: 14px;
  transform: translate(-50%,0);

  position: absolute;
  left: 50%;
  margin-top: 15px;

  background-color: rgba(255,255,255);
  border-radius: 5px;
  min-width: 400px;
  min-height: 300px;
  box-shadow: 0 5px 20px 5px rgba(0,0,0,0.1);

  /* arrow */
  &:after {
    position: absolute;
    content: '';
    top: -8px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 0; 
    height: 0; 
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    
    border-bottom: 8px solid rgba(255,255,255);
  }

  .header__title {
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
  }
  
  a {
    text-decoration: none;
    display: block;
    color: ${p => p.theme.primaryBlack};
    text-transform: uppercase;
    
    &:hover {
      color: ${p => p.theme.gray};
    }
    &:hover:before {
      background-color: ${p => p.theme.gray};
    }
    margin: 20px 0;
  }

  h1, h2, h3, h4, h5 {
    color: ${p => p.theme.primaryBlack};
    text-transform: uppercase;
  }
`;

export default Container;
