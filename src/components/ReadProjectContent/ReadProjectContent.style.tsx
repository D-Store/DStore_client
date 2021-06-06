import styled from "styled-components";
import sizes from "../../style/sizes";

export const ReadProjectContentContainer = styled.div`
  max-width: 1200px;
  min-height: ${sizes.project_height};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  .content {
    max-width: 900px;
  }
  .hashtag {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 200px;
  }
`;
