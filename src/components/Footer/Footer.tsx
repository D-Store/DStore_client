import React from "react";
import { FooterContainer } from "./Footer.style";
import Logo from "../../public/static/svg/dstore_logo.svg";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>All Right Reserved</p>
      <Logo className="logo" />
    </FooterContainer>
  );
};

export default Footer;
