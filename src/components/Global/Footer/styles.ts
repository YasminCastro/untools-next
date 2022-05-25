import styled from "styled-components";
import { colors } from "../../../styles/GlobalStyles";

export const FooterWrapper = styled.header`
  background: #fff;
  border-top: 3px solid ${colors.transparentGrey};
  padding: 10px;
  margin-block-start: 40px;
  text-align: left;
  display: block;
`;

export const FooterContainer = styled.div``;

export const FooterTop = styled.div`
  display: flex;
  gap: 24px;
  margin: 0 auto;
  max-width: 1000px;
  margin-block-end: 30px;
  margin-block-start: 50px;

  h3 {
    font-size: 24px;
    font-weight: 900;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  span {
    margin-right: 4px;
  }
`;

export const FooterNewsletter = styled.header`
  display: block;
  text-align: left;

  label {
    font-size: 16px;
    line-height: 24px;
  }

  form {
    display: flex;
    gap: 14px;
    margin-top: 15px;
  }

  .news-email {
    font-size: 16px;
    border: 2px solid ${colors.darkerOverlay};
    border-radius: 5px;
    padding: 15px;
    overflow: visible;
  }

  .news-submit {
    border: 2px solid ${colors.blue};
    background: transparent;
    font-size: 16px;
    color: ${colors.blue};
    border-radius: 5px;
    cursor: pointer;
    font-weight: 900;
    padding: 15px;
  }

  .news-submit:hover {
    background: ${colors.blue};
    color: #fff;
  }
`;

export const FooterAboutUs = styled.header``;

export const FooterBottom = styled.div``;
