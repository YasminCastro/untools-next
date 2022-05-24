import Link from "next/link";
import {
  ButtonAll,
  ButtonCommunication,
  ButtonDecision,
  ButtonProblem,
  ButtonSystems,
  Categories,
  HeroSectionWrapper,
} from "./styles";

const HeroSection: React.FC = () => {
  return (
    <HeroSectionWrapper>
      <h1>Tools for better thinking</h1>
      <p>
        Collection of thinking tools and frameworks to help you solve problems,
        make decisions and understand systems.
      </p>
      <Categories>
        <Link href="/" passHref>
          <a>
            <ButtonAll>
              <button>ALL</button>
            </ButtonAll>
          </a>
        </Link>
        <Link href="/systems-thinking" passHref>
          <a>
            <ButtonSystems>
              <button>SYSTEMS THINKING</button>
            </ButtonSystems>
          </a>
        </Link>
        <Link href="/decision-making" passHref>
          <a>
            <ButtonDecision>
              <button>Decision making</button>
            </ButtonDecision>
          </a>
        </Link>
        <Link href="/problem-solving" passHref>
          <a>
            <ButtonProblem>
              <button>Problem solving</button>
            </ButtonProblem>
          </a>
        </Link>
        <Link href="/communication" passHref>
          <a>
            <ButtonCommunication>
              <button>Communication</button>
            </ButtonCommunication>
          </a>
        </Link>
      </Categories>
    </HeroSectionWrapper>
  );
};

export default HeroSection;
