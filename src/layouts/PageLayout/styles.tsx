import styled from "@emotion/styled";
import pallete from "utils/pallete";
import sizes from "utils/sizes";

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
    margin-top: 10px;
    width: 150px;
    height: 90px;
    cursor: pointer;
  }
`;

export const HeaderNav = styled.ul`
  display: flex;
  justify-content: center;
  width: 450px;
  margin-top: 50px;
  a {
    padding: 12px;
    border-radius: 3rem;
    text-decoration: none;
    color: ${pallete.text_color};
    &.nav-active {
      background-color: white;
      color: ${pallete.background_color};
      font-weight: bold;
    }
  }
`;

export const FooterContainer = styled.section`
  max-width: ${sizes.max_width};
  margin: 0 auto;
  padding: 30px 0;
  font-size: ${sizes.mideum_font};
  color: ${pallete.text_color};
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 80px;
    margin-left: 10px;
  }
`;

export const PageTemplateContainer = styled.div`
  .PageTemplate-content {
    min-height: 80vh;
    max-width: ${sizes.max_width};
    margin: 0 auto;
  }
`;

export const FloatMenu = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  padding: 20px;
  border: 0;
  background-color: ${pallete.main_color};
  font-size: ${sizes.mideum_font};
  font-weight: bold;
  border-radius: 20px;
  cursor: pointer;
  transition: ease-in 0.2s;
  a {
    text-decoration: none;
    color: ${pallete.text_color};
  }
  &:hover {
    filter: brightness(80%);
  }
`;
