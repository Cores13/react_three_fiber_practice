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
              Vox Magna is a marketing agency that focuses on efficiency,
              collaboration, and getting the job thoroughly done. In order to do
              so, we have assembled multiple teams of experienced marketing and
              content managers. Vox Magna strives to accomplish and accomplishes
              boosting your project, gaining trust of investors, forming an
              active community to be in, and more. To put it simply, we’re
              experts in the marketing field. You can leave your marketing in
              our hands and we will do the rest, providing excellent results.
              Our experienced marketing teams contain:
              <br />
              <br />
              <strong>CMOs</strong> <br />
              They will make a marketing plan together with other team members,
              allocate budget accordingly, find target audience, and make sure
              everything goes according to plan. They can also determine where
              and how the company should be positioned in the future.
              <br />
              <br />
              <strong>Community managers</strong> <br /> They will make sure
              your social media sites are thriving. They will engage with your
              community, win investors’ trust, get positive feedback, make your
              Telegram group active and attractive to the community.
              <br />
              <br />
              <strong>Graphic designers</strong> <br />
              They will make sure graphic content is top notch. Original and
              interesting content, with coordination with other team members.
              They create eye-catching content that will make people pay
              attention to it, not just scroll down.
              <br />
              <br />
              <strong>Copywriters</strong> <br />
              They will make sure text content is top notch. Original and
              interesting content, with coordination with other team members.
              They will write engaging articles, posts, and such, that will be
              noticed by investors and the community. Content only in English
              currently.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
