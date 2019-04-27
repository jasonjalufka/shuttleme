import styled from "styled-components/macro";
import theme from "./theme";
const { colors, fonts } = theme;

const Button = styled.button`
  color: ${colors.gunmetal};
  background-color: ${colors.white};
  border: 2px solid ${colors.turquoise};
  border-radius: 10px;
  font-family: ${fonts.Varela};
  text-decoration: none;
  cursor: pointer;
  transition: ${theme.transition};
  padding: 12px 20px;

  &:hover,
  &:focus,
  &:active {
    background-color: ${colors.turquoise};
    color: ${colors.white};
    outline: none;
  }
  &:after {
    display: none !important;
  }
`;

export default Button;
