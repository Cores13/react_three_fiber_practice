import "./Navbar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";

interface Props {}

export const Navbar = (props: Props) => {
  return (
    <nav className='MOBILEnavbar'>
      <div className='MOBILEnavbarLogoDiv'>
        <a href='/' className='MOBILEnavbarLogoLink'>
          <img src='./VoxMagna.svg' alt='Logo' className='MOBILEnavbarLogo' />
          <h1 className='MOBILEnavbarTitle'>VOX MAGNA</h1>
        </a>
      </div>
      <div className='MOBILEnavbarNav'>
        <a href='/' className='MOBILEnavbarLink'>
          Home
        </a>
        <a href='/services' className='MOBILEnavbarLink'>
          Services
        </a>
        <a href='/about' className='MOBILEnavbarLink'>
          About us
        </a>
        <a href='/contact' className='MOBILEnavbarLink'>
          Contact
        </a>
        <div className='MOBILEnavbarSocial'>
          <a
            href='https://twitter.com/VoxMagna1'
            className='MOBILEnavbarLinkSocial'
            target='_blank'
            rel='noopener noreferrer'>
            <TwitterIcon />
          </a>
          <a
            href='https://t.me/voxmagna'
            className='MOBILEnavbarLinkSocial'
            target='_blank'
            rel='noopener noreferrer'>
            <TelegramIcon />
          </a>
        </div>
      </div>
    </nav>
  );
};
