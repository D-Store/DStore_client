import styled from "styled-components";
import pallete from "../../style/pallete";
import sizes from "../../style/sizes";

interface IProjectCardContainer {
  src: string;
  isSlide : boolean
}

export const ProjectCardContainer = styled.div<IProjectCardContainer>`
  
  width: ${sizes.max_width};
  height: ${sizes.project_height} ;
  width: ${(props) =>  props.isSlide && sizes.slide_width };
  height: ${(props) =>  props.isSlide && sizes.slide_height };
  color: white;
  border-radius: 30px;
  overflow: hidden;
  background-image: url(${(props) => props.src});
  background-size: contain;
  display: flex;
  align-items: flex-end;
  margin-bottom : ${(props) =>  !props.isSlide && "50px" };
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
      bottom: 10px;
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
  height: 25%;
  bottom: 0;
  backdrop-filter: blur(5px);
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
