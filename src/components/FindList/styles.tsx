import styled from "styled-components";
import sizes from "../../style/sizes";

export const NewProjectListContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${sizes.max_width};
  margin: 0 auto;
  .project-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
