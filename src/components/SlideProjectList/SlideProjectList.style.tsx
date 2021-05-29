import styled from "styled-components";
import sizes from "../../style/sizes";

export const SlideProjectContainer = styled.div`
  width: 100%;
  min-height: 700px;
  display: flex;
`;

export const SlideProjectRow = styled.div`
  flex-wrap: wrap;
  width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1080px) {
    flex-direction: column;
  }
`;

export const SlideProjectButton = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
