import { createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  article {
    background-color: ${({ theme }) => theme.bgColor}
  }
    input {
    background-color: ${({ theme }) => theme.bgColor}
  }
`;