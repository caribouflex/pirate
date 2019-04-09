import styled from "styled-components";
import { theme } from "./theme";

export const Title = styled.h2`
  color: #3c3c3c;
  padding-bottom: 10px;
  border-bottom: 1px solid #fff;
`;

export const Link = styled.a`
  text-decoration: none;
  cursor: pointer;

  :link {
    color: ${({ dark }) => {
      console.log("dark", dark);
      return !dark ? theme.colors.darkerFont : "#616161";
    }};
  }

  :visited {
    color: #696d73;
  }

  :hover {
    color: ${theme.colors.accent};
  }

  :active {
    color: ${theme.colors.accent}80;
  }
`;
