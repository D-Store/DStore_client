import styled from "styled-components";
import pallete from "../../style/pallete";
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
  background-size: contain;
  display: flex;
  align-items: flex-end;
  margin-bottom: 70px;
  &:hover .project-info {
    height: 100%;
    span {
      width: 100%;
      white-space: normal;
      text-overflow: clip;
      overflow-y: auto;
    }
    button {
      position: absolute;
      display: flex;
      bottom: 50px;
      right: 50px;
      border: none;
      padding: 10px 20px;
      font-size: ${sizes.mideum_font};
      border-radius: 5px;
      background-color: ${pallete.main_color};
      color: ${pallete.text_color};
      cursor: pointer;
    }
  }
`;

export const ProjectInfo = styled.div`
  width: 100%;
  height: 130px;
  bottom: 0;
  backdrop-filter: blur(60px);
  background-color: rgba(0, 0, 0, 0.6);
  padding: 1rem;
  transition: ease-in 0.4s;
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
  & > button {
    display: none;
  }
`;
