import styled from "styled-components";
import sizes from "../../style/sizes";

interface IProjectCardContainer {
  src: string;
}

export const ProjectCardContainer = styled.div<IProjectCardContainer>`
  width: 1000px;
  height: 560px;
  color: white;
  border-radius: 30px;
  overflow: hidden;
  background-image: url(${(props) => props.src});
  display: flex;
  align-items: flex-end;
  &:hover .project-info {
    height: 560px;
    span {
      width: 100%;
      white-space: normal;
      text-overflow: clip;
    }
  }
`;

export const ProjectInfo = styled.div`
  width: 100%;
  height: 130px;
  bottom: 0;
  backdrop-filter: blur(50px);
  background-color: rgba(0, 0, 0, 0.6);
  padding: 1rem;
  transition: ease-in 0.2s;
  & > h1 {
    font-size: ${sizes.big_font};
    font-weight: bold;
  }
  & > span {
    width: 80%;
    padding-top: 20px;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
