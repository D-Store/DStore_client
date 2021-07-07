import styled from "@emotion/styled";
import pallete from "utils/pallete";
import sizes from "utils/sizes";

export const Success = styled.div`
  font-weight: bold;
  color: ${pallete.main_color};
`;

export const Text = styled.div`
  font-weight: lighter;
  color: ${pallete.background_color};
`;

export const ProjectDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  .like {
    background-color: ${pallete.text_color};
    left: 4%;
    position: fixed;
    color: ${pallete.background_color};
    border-radius: 2rem;
    padding: 0.5rem;
    display: flex;
    cursor: pointer;
    user-select: none;
    transition: ease-in-out 0.2s;
    &:hover {
      transform: scale(1.1);
    }
    &:active {
      transform: scale(0.9);
    }
  }
  .meta-container {
    padding: 10px 0 10px 0;
    h1 {
      font-size: ${sizes.big_font};
      font-weight: bold;
    }
    .tag {
      font-weight: bold;
      color: ${pallete.main_color};
      text-decoration: none;
      margin-right: 10px;
    }
  }
  .img-container {
    display: flex;
    .main-img {
      width: 700px;
      height: 394px;
      object-fit: cover;
      object-position: center;
    }
    .imgs {
      display: flex;
      margin-left: 10px;
      flex-direction: column;
      width: 240px;
      height: 394px;
      overflow-y: auto;
      padding: 0px 15px;
      img {
        width: 100%;
        height: 135px;
        object-fit: cover;
        object-position: center;
        &.active {
          border: 3px solid ${pallete.main_color};
        }
      }
    }
  }
  .content {
    padding: 20px;
    font-size: ${sizes.mideum_font};
  }
`;
