import styled from "styled-components";
import sizes from "../../style/sizes";

export const Container = styled.div`
  width: 480px;
  height: 614px;
  background-color: white;
  z-index: 11;
  color: black;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  h1 {
    font-weight: bold;
    font-size: ${sizes.big_font};
  }
  form {
    margin-top: calc(100% / 2);
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;
