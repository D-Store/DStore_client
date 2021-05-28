import styled from "styled-components";
import sizes from "../../style/sizes";

export const HotProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
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
