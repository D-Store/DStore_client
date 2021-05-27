import styled from "styled-components";
import pallete from "../../style/pallete";
import sizes from "../../style/sizes";

export const CategoryContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const CategoryContent = styled.div`
    width: 1200px;
    height: 200px ;
    display:grid ;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 50px;
    position: relative;
    @media screen and (max-width: 910px) {
        display: none;
    }
`;

export const CategoryItem = styled.div`
  position: relative;
  width: 100%;
  height: 180px;
  user-select: none;
  cursor: pointer;
  &:hover a {
    color: ${pallete.main_color};
  }
  a {
    transition: ease-in-out 0.2s;
    margin: 24px;
    position: absolute;
    font-size: 28px;
    font-weight: bold;
    color: #d4d4d4;
    left: 24;
    text-decoration: none;
  }
  .icon {
    width: 240px;
    height: 180px;
    cursor: pointer;
  }
`;
