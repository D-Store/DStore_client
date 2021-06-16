import styled from "@emotion/styled";
import sizes from "utils/sizes";

export const ProjectContainer = styled.div`
  width: 100%;
  .projects-headers {
    display: inline-block;
    text-align: start;
    h1 {
      font-weight: bold;
      font-size: ${sizes.big_font};
    }
    span {
      font-weight: lighter;
      font-size: ${sizes.small_font};
    }
  }
  .projects-list {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
