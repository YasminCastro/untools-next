import styled from "styled-components";
import { colors } from "../../../../styles/GlobalStyles";

export const HeroSectionWrapper = styled.div`
  background: ${colors.transparentGrey};

  padding-bottom: 100px;
  padding-top: 1px;
  text-align: center;
  border-bottom: 0.2rem solid ${colors.transparentGrey};

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

export const Categories = styled.div`
  display: flex;
  justify-content: center;

  button {
    overflow: visible;
    cursor: auto;

    border-radius: 5px;
    border-style: solid;
    box-shadow: none;
    font-size: 14px;
    font-weight: 700;
    outline: none;
    outline-offset: 0;

    padding: 8px 16px;
    text-transform: uppercase;
    margin: 10px;

    transition-duration: 0.2s;
  }
`;

export const ButtonAll = styled.div`
  button {
    color: #ffff;
    background: ${colors.darkGrey};
  }
`;

export const ButtonSystems = styled.div`
  button {
    color: ${colors.purple};
    border-color: ${colors.purple};

    :hover {
      background: ${colors.purple};
      color: #ffff;
    }
  }
`;

export const ButtonDecision = styled.div`
  button {
    color: ${colors.blue};
    border-color: ${colors.blue};

    :hover {
      background: ${colors.blue};
      color: #ffff;
    }
  }
`;

export const ButtonProblem = styled.div`
  button {
    color: ${colors.green};
    border-color: ${colors.green};

    :hover {
      background: ${colors.green};
      color: #ffff;
    }
  }
`;

export const ButtonCommunication = styled.div`
  button {
    color: ${colors.orange};
    border-color: ${colors.orange};

    :hover {
      background: ${colors.orange};
      color: #ffff;
    }
  }
`;
