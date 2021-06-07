import styled from "styled-components";
import sizes from "../../style/sizes";

export const SearchProjectListContainer = styled.ul`
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
  .new-title {
    font-weight: bold;
    font-size: ${sizes.big_font};
    padding: 1rem 1rem 0 1rem;
  }
  .new-desc {
    padding: 1rem;
    font-size: ${sizes.small_font};
  }
`;
