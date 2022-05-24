import styled from "styled-components";
import { colors } from "../../../styles/GlobalStyles";

export const HeaderWrapper = styled.header`
  width: 100%;
  max-width: 100vw;

  top: 0;
  z-index: 99;

  background: ${colors.transparentGrey};

  display: flex;
  justify-content: center;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1344px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuOption = styled.a`
  padding: 20px 14px;

  display: flex;

  align-items: center;

  color: ${colors.darkGrey};
  text-decoration: underline;

  :hover {
    text-decoration: none;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  font-weight: 900;
  font-size: 24px;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;
