import styled from "styled-components";
import { colors } from "../../../styles/GlobalStyles";

export const FooterWrapper = styled.header`
  width: 100%;
  max-width: 100vw;

  top: 0;
  z-index: 99;

  background: ${colors.transparentGrey};

  display: flex;
  justify-content: center;
`;

export const FooterContainer = styled.div`
  width: 100%;
  max-width: 1344px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
