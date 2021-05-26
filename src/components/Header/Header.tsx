import { HeaderContainer, HeaderNav, HeaderNavItem } from "./Header.style";
import Logo from "../../public/svg/dstore_logo.svg";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

const Header: React.FC = () => {
  const router = useRouter();
  const currentPath = router.asPath;

  return (
    <HeaderContainer>
      <Logo className="logo" />
      <HeaderNav>
        <HeaderNavItem isActive={currentPath === "/"}>
          <Link href="/">
            <a>홈</a>
          </Link>
        </HeaderNavItem>
        <HeaderNavItem isActive={currentPath === "/find"}>
          <Link href="/find">탐색</Link>
        </HeaderNavItem>
        <HeaderNavItem isActive={currentPath === "/my"}>
          <Link href="/my">마이 페이지</Link>
        </HeaderNavItem>
      </HeaderNav>
    </HeaderContainer>
  );
};

export default Header;
