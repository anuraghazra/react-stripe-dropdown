import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Karla:400,700');

  * {
    box-sizing: border-box;
  }

  body {
    font-family: karla, -apple-system, system-ui, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    color: whtie;

    height: 100vh;
    background: ${p => p.theme.gradient};
  }

  h1,h2,h3,h4,h5,h6 {
    margin: 0;
    line-height: 150%;
  }

  a {
    text-decoration: none;
    color: #0ec3ff;
    
    &:hover {
      color: #3670ff;
    }
  }

  .credits {
    position: absolute;
    bottom: 20px;
    color: #c5f0ff;
    left: 50%;
    transform: translateX(-50%);

    
    a {
      color: #06070f;
      
      &:hover {
        color: #c5f0ff;
      }
    }
  }

  .overflow__content {
    padding: 10px 30px;
    overflow: hidden !important;
  }
  .text-14 {
    font-size: 14px;
  }
`