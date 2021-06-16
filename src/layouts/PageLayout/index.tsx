import React, { FC, useEffect, useState } from "react";
import { Link, NavLink, Redirect, Route } from "react-router-dom";
import {
  FooterContainer,
  HeaderContainer,
  HeaderNav,
  PageTemplateContainer,
  FloatMenu,
} from "./styles";
import { ReactComponent as Logo } from "assets/svg/logo.svg";
import loadable from "@loadable/component";
import ProjectDetail from "components/ProjectDetail";
import { toast } from "react-toastify";

const Main = loadable(() => import("pages/Main"));
const Find = loadable(() => import("pages/Find"));
const My = loadable(() => import("pages/My"));

const PageLayout: FC = () => {
  if (!sessionStorage.getItem("access_token")) {
    toast.error("허용되지 않은 접근입니다.");
    return <Redirect to="/login" />;
  }

  return (
    <PageTemplateContainer>
      <HeaderContainer>
        <Logo />
        <HeaderNav>
          <NavLink activeClassName="nav-active" to="/template/main">
            홈
          </NavLink>
          <NavLink activeClassName="nav-active" to="/template/find">
            탐색
          </NavLink>
          <NavLink activeClassName="nav-active" to="/template/my">
            마이 페이지
          </NavLink>
        </HeaderNav>
      </HeaderContainer>
      <div className="PageTemplate-content">
        <Route path="/template/main" component={Main} />
        <Route path="/template/find" component={Find} />
        <Route path="/template/my" component={My} />
        <Route path="/template/project/:id" component={ProjectDetail} />
      </div>
      <FooterContainer>
        <p>All Right Reserved</p>
        <Logo />
      </FooterContainer>
      <FloatMenu>
        <Link to="/create">🖋프로젝트 생성</Link>
      </FloatMenu>
    </PageTemplateContainer>
  );
};

export default PageLayout;
