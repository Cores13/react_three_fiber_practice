import { Footer } from "../Components/Footer/Footer";
import { Navbar } from "../Components/Navbar/Navbar";
import "./ServicesMobile.css";

export const ServicesMobile = () => {
  return (
    <>
      <Navbar />
      <div className='MOBILEservices'>
        <div className='MOBILEservicesThumbnail'></div>
        <div className='MOBILEservicesContent'>
          <h1 className='MOBILEservicesTitle'>Services</h1>
          <p className='MOBILEservicesDesc'>
            With VoxMagna, you get a marketing team included in the marketing
            package, no need to hire one. Our teams contain multiple community
            managers, copywriters, and graphic designers. Our services include:
          </p>
          <div className='MOBILEservicesCards'>
            <div
              className='MOBILEservicesCard'
              data-aos='fade-up'
              data-aos-easing='ease-out'>
              Dedicated team (marketing manager for planning, graphic designer
              and copywriter)
            </div>
            <div
              className='MOBILEservicesCard'
              data-aos='fade-up'
              data-aos-easing='ease-out'>
              Full marketing plan
            </div>
            <div
              className='MOBILEservicesCard'
              data-aos='fade-up'
              data-aos-easing='ease-out'>
              Coin listings for new token (up to 15) + ratings
            </div>
            <div
              className='MOBILEservicesCard'
              data-aos='fade-up'
              data-aos-easing='ease-out'>
              Telegram group members and happiness (from 100 chats daily)
            </div>
            <div
              className='MOBILEservicesCard'
              data-aos='fade-up'
              data-aos-easing='ease-out'>
              Social media boost (likes, followers, comments)
            </div>
            <div
              className='MOBILEservicesCard'
              data-aos='fade-up'
              data-aos-easing='ease-out'>
              Twitter and youtube influencers comments on topics of “what token
              to invest in”
            </div>
            <div
              className='MOBILEservicesCard'
              data-aos='fade-up'
              data-aos-easing='ease-out'>
              List of twitter influencers and work with them
            </div>
            <div
              className='MOBILEservicesCard'
              data-aos='fade-up'
              data-aos-easing='ease-out'>
              Full marketing control and planning (banner ads: coinzilla,
              twitter, fb, insta, google)
            </div>
            <div
              className='MOBILEservicesCard'
              data-aos='fade-up'
              data-aos-easing='ease-out'>
              PR control
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
