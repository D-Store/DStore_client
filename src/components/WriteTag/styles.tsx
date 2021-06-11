import styled from "styled-components";
import pallete from "../../style/pallete";

export const WriteTagContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

export const WriteTagContent = styled.form`
  width: 1000px;
  min-height: 60px;
  background-color: ${pallete.input_back};
  display: flex;
  align-items: center;
  h1 {
    width: 200px;
    padding-left: 1rem;
  }
  .hash {
    display: flex;
    align-items: center;
    background-color: white;
    border: 1px inset;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
  }
  .tag {
    position: absolute;
    color: black;
    background-color: white;
  }
  input {
    height: 20px;
    padding-left: 1rem;
    border: none;
  }
  button {
    margin-left: 10px;
  }
`;
