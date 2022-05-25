import Link from "next/link";
import {
  FooterAboutUs,
  FooterBottom,
  FooterContainer,
  FooterNewsletter,
  FooterTop,
  FooterWrapper,
} from "./styles";

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterTop>
          <FooterNewsletter>
            <h3>
              <span>📫</span>
              New tools in your inbox
            </h3>
            <label>
              Join over 6800 subscribers. You'll get new tools as soon as
              they're published and occasional project updates.
            </label>
            <form>
              <input
                type="email"
                name="email"
                className="news-email"
                placeholder="Enter your email"
              />
              <input type="submit" className="news-submit" value="Subcribe" />
            </form>
          </FooterNewsletter>
          <FooterAboutUs>
            <h3>
              <span>ℹ️</span>
              About Untools
            </h3>
            <p>
              Collection of thinking tools and frameworks to help you solve
              problems, make decisions and understand systems.{" "}
              <Link href="/about" passHref>
                <a>More about Untools</a>
              </Link>
            </p>
            <br />
            <p>
              Do you have feedback or want to suggest a tool?
              <Link href="https://twitter.com/amrancz" passHref>
                <a>Let me know on Twitter!</a>
              </Link>
            </p>
          </FooterAboutUs>
        </FooterTop>
      </FooterContainer>
      <FooterBottom />
    </FooterWrapper>
  );
};

export default Footer;
