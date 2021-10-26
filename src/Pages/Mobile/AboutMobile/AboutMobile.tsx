import { Footer } from "../Components/Footer/Footer";
import { Navbar } from "../Components/Navbar/Navbar";
import "./AboutMobile.css";

interface Props {}

export const AboutMobile = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className='MOBILEaboutPage'>
        <div className='MOBILEaboutThumbnail'></div>
        <div className='MOBILEaboutContent'>
          <div className='MOBILEaboutContentWrapper'>
            <h1 className='MOBILEaboutTitle'>About us</h1>
            <p className='MOBILEaboutText'>
              VoxMagna is a marketing agency where you can boost your project
              and get more recognition. We have multiple teams of marketing
              squads, including community managers, copywriters, and graphic
              designers. Our goal is to collaborate with projects and make a
              marketing plan that will significantly help it out. We have
              investors’ trust and are experienced in the marketing field. If
              you need quality marketing with best marketing prices, reach out
              to us.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
