import styled from "@emotion/styled";
import pallete from "utils/pallete";
import sizes from "utils/sizes";

export const ProjectDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
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
      width: ${sizes.max_width};
      height: 500px;
    }
    .imgs {
      display: flex;
      margin-left: 10px;
      flex-direction: column;
      width: 240px;
      height: 500px;
      overflow-y: auto;
      padding: 0px 15px;
      img {
        width: 100%;
        height: 200px;
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
