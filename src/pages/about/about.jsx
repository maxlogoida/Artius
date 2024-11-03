import About1 from '../../assets/About1.png';
import About2 from '../../assets/About2.png';
import About3 from '../../assets/About3.png';
import About4 from '../../assets/About4.png';
import About5 from '../../assets/About5.png';
import {
  AboutContainer,
  AboutContainerFirst,
  AboutContainerFourth,
  AboutContainerSecond,
  AboutContainerThird,
  AboutContainerWrapper,
} from './styles';

const About = () => {
  return (
    <AboutContainer>
      <AboutContainerWrapper>
        <AboutContainerFirst>
          <div>
            <h4 data-cy={'about-title'}>We tell stories that drives the heart.</h4>
            <p>
              Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi qui dolor cillum fugiat ad. Id sit
              mollit labore sunt sit culpa qui minim pariatur et officia elit id. Tempor cupidatat veniam esse ad veniam
              dolore excepteur tempor dolor consectetur ut id.
            </p>
          </div>
          <span>
            <img src={About1} alt="" />
          </span>
        </AboutContainerFirst>
        <AboutContainerSecond>
          <span>
            <img src={About2} alt="" />
          </span>
          <div>
            <h4>We tell the news that makes the most impact.</h4>
            <p>
              Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi qui dolor cillum fugiat ad. Id sit
              mollit labore sunt sit culpa qui minim pariatur et officia elit id. Tempor cupidatat veniam esse ad veniam
              dolore excepteur tempor dolor consectetur ut id.
            </p>
          </div>
        </AboutContainerSecond>
        <AboutContainerThird>
          <div>
            <h4>We share the little moments that shows we’re alive.</h4>
            <p>
              Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi qui dolor cillum fugiat ad. Id sit
              mollit labore sunt sit culpa qui minim pariatur et officia elit id. Tempor cupidatat veniam esse ad veniam
              dolore excepteur tempor dolor consectetur ut id.
            </p>
          </div>
          <span>
            <img src={About3} alt="" />
            <img src={About4} alt="" />
            <img src={About5} alt="" />
          </span>
        </AboutContainerThird>
      </AboutContainerWrapper>
      <AboutContainerFourth>
        <h4>Because we are you. Humans.</h4>
        <p>Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi qui dolor cillum fugiat ad.</p>
      </AboutContainerFourth>
    </AboutContainer>
  );
};

export default About;
