import styled from "styled-components";
import { colors } from "../../../../styles/GlobalStyles";

export const BlogWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  margin: -250px auto 100px;
  padding: 0 16px 24px;
  max-width: 1000px;
`;

export const PostWrapper = styled.div`
  background: #fff;
  border: 1px solid #fff;
  border-radius: 10px;
  box-shadow: 0 3px 8px rgb(0 0 0 / 12%);
  max-width: 250px;
  min-width: 200px;
  opacity: 0.95;
  padding: 24px;
  transition-duration: 0.2s;
`;

export const Post = styled.div`
  display: block;

  span {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;

    margin: 24px 0;
    padding: 4px 8px;
    border-radius: 3px;
  }

  p {
    font-size: 16px;
    line-height: 24px;
    margin-top: 24px;

    display: block;
  }

  h2 {
    font-size: 24px;
    font-weight: 900;
    margin-block-end: 18px;
    margin-block-start: 20px;
  }

  .communication {
    background: ${colors.transparentOrange};
    border-color: ${colors.orange};
    color: ${colors.orange};
    border-width: 16px;
  }

  .systems-thinking {
    background: ${colors.transparentPurple};
    border-color: ${colors.purple};
    color: ${colors.purple};
    border-width: 16px;
  }

  .decision-making {
    background: ${colors.transparentBlue};
    border-color: ${colors.blue};
    color: ${colors.blue};
    border-width: 16px;
  }

  .problem-solving {
    background: ${colors.transparentGreen};
    border-color: ${colors.green};
    color: ${colors.green};
    border-width: 16px;
  }
`;
