import Link from "next/link";
import {
  HeaderContainer,
  HeaderLeft,
  HeaderRight,
  HeaderWrapper,
  MenuOption,
} from "./styles";

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLeft>
          <Link href="/" passHref>
            <a>
              <span>untools</span>
            </a>
          </Link>
        </HeaderLeft>
        <HeaderRight>
          <Link href="/thinking-tools-guide" passHref>
            <MenuOption>Tools guide</MenuOption>
          </Link>
          <Link href="/templates" passHref>
            <MenuOption>Templates</MenuOption>
          </Link>
          <Link href="https://app.untools.co" passHref>
            <MenuOption>App</MenuOption>
          </Link>
          <Link href="/about" passHref>
            <MenuOption>About</MenuOption>
          </Link>
        </HeaderRight>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
