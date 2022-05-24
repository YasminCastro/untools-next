import styled from "styled-components";
import { colors } from "../../../../styles/GlobalStyles";

export const HeroSectionWrapper = styled.div`
  background: ${colors.transparentGrey};

  padding-bottom: 300px;
  padding-top: 1px;
  text-align: center;

  h1 {
    font-weight: 900;
    font-size: 58px;
    margin: 26px 0;
  }

  p {
    font-size: 22px;
    line-height: 28px;
    margin: 0 auto;
    max-width: 700px;
    margin-block-end: 18px;
  }
`;
