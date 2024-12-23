import { BannerContainer, BannerInfo } from './styles';

const Banner = () => {
  return (
    <BannerContainer data-cy="banner">
      <BannerInfo>
        <h3>FEATURED ARTICLE</h3>
        <h1>World’s Most Dangerous Technology Ever Made.</h1>
        <div>
          <span>Ralph Hawkins</span>|<span>May 7, 2019 (10 mins read)</span>
        </div>
        <p>
          Proident aliquip velit qui commodo officia qui consectetur dolor ullamco aliquip elit incididunt. Ea minim ex
          consectetur excepteur. Ex laborum nostrud mollit sint consectetur Lorem amet aliqua do enim. Commodo duis
          dolor anim excepteur. In aliquip mollit nulla consequat velit magna.
        </p>
      </BannerInfo>
    </BannerContainer>
  );
};

export default Banner;
