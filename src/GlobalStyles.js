import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    
    box-sizing: border-box;
  }
  a {
    color: var(--light);
    transition: .2s;
    :hover{
      color: var(--primary);
    }
    :active {
      transform: scale(0.95);
    }
  }
`;