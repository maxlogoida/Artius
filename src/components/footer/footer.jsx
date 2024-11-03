import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

import { FooterContainer } from './styles';

const Footer = () => {
  return (
    <FooterContainer data-cy={'header-container'}>
      <div>
        <h3>want to connect?</h3>
        <center>
          <p>Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi qui..</p>
        </center>
        <ul>
          <li>
            <FaTwitter size={30} />
          </li>
          <li>
            <FaInstagram size={30} />
          </li>
          <li>
            <FaLinkedin size={30} />
          </li>
        </ul>
      </div>
    </FooterContainer>
  );
};

export default Footer;
