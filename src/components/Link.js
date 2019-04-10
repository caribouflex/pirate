import styled from "styled-components";
import { theme } from "../style/theme";

const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;

  :link {
    color: ${({ dark }) => {
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

export default Link;
