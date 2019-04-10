import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
      transform: rotate(0deg);
    }
  100% {
      transform: rotate(360deg);
    }
`;

const Loader = styled.div`
  ${({ visible }) => !visible && "display:none;"}
  margin-left: 14px;
  border: 4px solid transparent;
  border-radius: 50%;
  border-top: 4px solid #66fcf1;
  width: 14px;
  height: 14px;
  -webkit-animation: ${spin} 0.8s linear infinite; /* Safari */
  animation: ${spin} 0.8s linear infinite;
`;

export default Loader;
