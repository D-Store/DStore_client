import styled from "@emotion/styled";
import pallete from "utils/pallete";
import sizes from "utils/sizes";

export const NoProject = styled.div`
  text-align: center;
  h1 {
    font-weight: bold;
    font-size: ${sizes.big_font};
  }
  small {
    color: ${pallete.red};
  }
`;
