import styled from "@emotion/styled";
import pallete from "utils/pallete";
import sizes from "utils/sizes";

interface ProjectCardProps {
  imgSrc: string;
}

export const ProjectCardContainer = styled.div<ProjectCardProps>`
  width: 858px;
  height: 440px;
  color: white;
  border-radius: 30px;
  margin: 20px;
  overflow: hidden;
  background-image: url("${(props) => props.imgSrc}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: flex-end;
  @media screen and (max-width: 1080px) {
    margin-bottom: 50px;
  }

  &:hover .project-info {
    height: 80%;
    span {
      width: 100%;
      white-space: normal;
      text-overflow: clip;
      overflow-y: auto;
    }
    a {
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
      text-decoration: none;
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
  & > a {
    display: none;
  }
`;
