import styled from "styled-components";
import pallete from "../../style/pallete";

export const PhotoSlideContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const PhotoSlideContent = styled.div`
  width: 1000px;
  background-color: ${pallete.input_back};
  height: 300px;
  padding: 1rem;
`;

export const PhotoSlider = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 10px;
  img {
    width: 200px;
    min-height: 112.5px;
  }
`;
