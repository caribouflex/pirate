import styled from "styled-components";

export const Title = styled.h2`
  color: #3c3c3c;
  padding-bottom: 10px;
  border-bottom: 1px solid #fff;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #d2cfcf;
  cursor: pointer;

  :link {
    color: #d2cfcf;
  }

  :visited {
    color: #696d73;
  }

  :hover {
    color: #4281e6;
  }

  :active {
    color: #155aca;
  }
`;
