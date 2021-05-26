import styled from "styled-components";
import pallete from "../../style/pallete";
import sizes from "../../style/sizes";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 150px;
  background-color: ${pallete.background_color};
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  max-width: ${sizes.max_width};
  margin: 0 auto;
  margin-bottom: 100px;
  .logo {
    width: 150px;
    height: 90px;
  }
`;

export const HeaderNav = styled.ul`
  display: flex;
  justify-content: center;
  width: 450px;
  margin-top: 50px;
`;

interface IHeaderNavItem {
  isActive: boolean;
}

export const HeaderNavItem = styled.li<IHeaderNavItem>`
  color: white;
  list-style: none;
  padding: 1rem 0;
  width: 150px;
  text-align: center;
  a {
    padding: 12px;
    border-radius: 3rem;
    background-color: ${(props) => props.isActive && pallete.text_color};
    text-decoration: none;
    color: ${pallete.text_color};
    color: ${(props) => props.isActive && pallete.background_color};
    font-weight: ${(props) => props.isActive && "bold"};
  }
`;
