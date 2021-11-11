import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className='MOBILEfooter'>
      <div className='MOBILEfooterLogoDiv'>
        <a href='/' className='MOBILEfooterLogoLink'>
          <img src='./VoxMagna.svg' alt='Logo' className='MOBILEnavbarLogo' />
          <h1 className='MOBILEnavbarTitle'>VOX MAGNA</h1>
        </a>
      </div>
      <div className='MOBILEfooterMenu'>
        <h2 className='MOBILEfooterMenuTitle'>Menu</h2>
        <ul>
          <li>
            <a href='/' className='MOBILEfooterLink'>
              Home
            </a>
          </li>
          <li>
            <a href='/services' className='MOBILEfooterLink'>
              Services
            </a>
          </li>
          <li>
            <a href='/about' className='MOBILEfooterLink'>
              About us
            </a>
          </li>
          <li>
            <a href='/contact' className='MOBILEfooterLink'>
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className='MOBILEfooterSocial'>
        <h2 className='MOBILEfooterSocialTitle'>Social</h2>
        <div className='MOBILEfooterSocialLinks'>
          <a
            href='https://twitter.com/VoxMagna1'
            className='MOBILEfooterLinkSocial'
            target='_blank'
            rel='noopener noreferrer'>
            <TwitterIcon />
          </a>
          <a
            href='https://t.me/voxmagna'
            className='MOBILEfooterLinkSocial'
            target='_blank'
            rel='noopener noreferrer'>
            <TelegramIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};
