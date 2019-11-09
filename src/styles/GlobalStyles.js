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
  }

  h1,h2,h3,h4,h5,h6 {
    margin: 0;
    line-height: 150%;
  }

  .text-14 {
    font-size: 14px;
  }
`