import { createGlobalStyle } from "styled-components"
import "normalize.css"

const GlobalStyle = createGlobalStyle`

// 메인 컬러
  :root {
    --color-lightblue:#A9DFED;
    --color-midblue:#84C0E9;
    --color-deepblue:#37419A;
  }

  * {
    box-sizing: border-box;
    /* font-family: 'Noto Sans KR', sans-serif; */
  }

  p, span, h2, h3, h4 {
  font-family: "TTCrownMychewR";
  font-weight: 100;
  }
`

export default GlobalStyle
