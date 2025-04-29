import styled, { css } from "styled-components";
const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 54px;
      @media (max-width: 768px) {
        font-size: 25px;
        margin-top: 11px;
      }
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      color: #449fff;
    `}
    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      margin-left: 53px;
      color: #449fff;
    `}
    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 2rem;
      margin-left: 15px;
      color: #449fff;
    `}
`;

export default Heading;
