import styled from "styled-components";
import sizes from "../../style/sizes";

export const HotProjectListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${sizes.max_width};
  margin: 0 auto;
  /* justify-content: center;
  align-items: center; */
  .project-list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .hot-title {
    font-weight: bold;
    font-size: ${sizes.big_font};
    padding: 1rem 1rem 0 1rem;
  }
  .hot-desc {
    padding: 1rem;
    font-size: ${sizes.small_font};
  }
`;
