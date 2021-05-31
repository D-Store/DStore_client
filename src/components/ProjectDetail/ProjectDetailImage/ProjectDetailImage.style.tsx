import styled from "styled-components";
import sizes from "../../../style/sizes";

export const ProjectDetailImageContainer = styled.section`
  .header-meta {
    display: flex;
    justify-content: space-between;
    .project-meta {
      span {
        font-size: ${sizes.small_font};
      }
      h1 {
        font-size: ${sizes.big_font};
        font-weight: bold;
      }
    }
    .profile {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
        background: white;
      }
      .name {
        margin-left: 10px;
        font-weight: bold;
      }
    }
    .project-info {
      display: flex;
      div {
        margin: 0 10px;
      }
    }
  }
`;
