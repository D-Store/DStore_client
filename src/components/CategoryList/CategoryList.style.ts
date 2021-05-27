import styled from "styled-components";
import pallete from "../../style/pallete";
import sizes from "../../style/sizes";

export const CategoryContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 40px;
  h1 {
    font-weight: bold;
    font-size: ${sizes.big_font};
    padding: 1rem 1rem 0 1rem;
  }
  p {
    padding: 1rem;
    font-size: ${sizes.small_font};
  }
`;

export const CategoryContent = styled.div`
  width: 1200px;
  height: 200px;
  display: flex;
  justify-content: space-between ;
  position: relative;
`;

export const CategoryItem = styled.div`
  position: relative;
  width: 240px;
  height: 180px;
  user-select: none;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  @media screen and (max-width: 955px) {
      width: 140px;
    height: 90px;
    border-radius:25px ;
    background-color: #333333 ;
  }
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
  @media screen and (max-width: 955px) {
    font-size:25px;
  }
  }
  .icon {
    width: 240px;
    height: 180px;
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
    @media screen and (max-width: 955px) {
        display: none;
    }
  }
`;
