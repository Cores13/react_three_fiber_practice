import { useContext } from "react";
import "./HomeMobile.css";
import { GlobalState } from "../../../GlobalState";
import { Navbar } from "../Components/Navbar/Navbar";
import { Footer } from "../Components/Footer/Footer";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

interface Props {}

export const HomeMobile = (props: Props) => {
  const store = useContext(GlobalState);
  const [site, setSite] = store?.sites;

  return (
    <div className='MOBILEhome'>
      <div className='MOBILEhomeWrapper'>
        <Navbar />
        <div className='MOBILElanding'>
          <div className='MOBILElandingTop'>
            <h1 className='MOBILElandingTitle'>
              LET OUR VOICE BE THE FRONTMAN OF YOUR BUSINESS! ANY QUESTIONS
              BEFORE WE START ROCKING?
            </h1>
            {/* <button className='landingContactBtn'>ASK A QUESTION</button> */}
            <a href='/contact' className='MOBILElandingContactBtn'>
              ASK A QUESTION
            </a>
          </div>
        </div>

        {/* MISSION */}
        <div className='MOBILEmission'>
          <div className='MOBILEmissionWrapper'>
            <div className='MOBILEmissionLeft'>
              <h1 className='MOBILEmissionTitle'>OUR MISSION</h1>
            </div>
            <div className='MOBILEmissionRight'>
              <div className='MOBILEmissionDesc'>
                <p>
                  VoxMagna will strive to make your project be among the best of
                  the best. Our goal is to achieve long-term growth of your
                  project by ensuring the best quality marketing and fulfillment
                  of our obligations, with the best marketing prices.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* PLAN */}
        <div className='MOBILEplan'>
          <div className='MOBILEplanWrapper'>
            <div className='MOBILEplanTop'>
              <h1 className='MOBILEplanTitle'>
                <span className='purpleText'>PREMIUM </span>MARKETING STRATEGY
              </h1>
            </div>
            <hr
              style={{
                width: "80%",
                height: "0px",
                color: "#ece23d",
                border: "1px solid #ece23d",
              }}
            />
            <div className='MOBILEplanBot'>
              <p>
                Sign up for the highest quality and performance marketing.
                Cooperate with our team for the best results.
              </p>
              <a href='/contact' className='MOBILEplanBtn'>
                GET PREMIUM
              </a>
            </div>
          </div>
        </div>

        {/* ABOUT US */}
        <div className='MOBILEabout'>
          <h1 className='MOBILEaboutTitle'>ABOUT OUR PERFORMANCE</h1>
          <div className='MOBILEaboutCards'>
            <div className='MOBILEaboutCard'>
              <AttachMoneyIcon />
              <h1 className='MOBILEaboutCardTitle'>Worth it</h1>
              <p className='MOBILEaboutCardDesc'>
                Best prices for the marketing we offer
              </p>
            </div>
            <div className='MOBILEaboutCard'>
              <AutoAwesomeIcon />
              <h1 className='MOBILEaboutCardTitle'>Skilled</h1>
              <p className='MOBILEaboutCardDesc'>
                Years of experience behind us
              </p>
            </div>
            <div className='MOBILEaboutCard'>
              <ShowChartIcon />
              <h1 className='MOBILEaboutCardTitle'>Efficient</h1>
              <p className='MOBILEaboutCardDesc'>
                Straight to the point, not wasting time on inefficient marketing
              </p>
            </div>
            <div className='MOBILEaboutCard'>
              <AddReactionIcon />
              <h1 className='MOBILEaboutCardTitle'>Trusted</h1>
              <p className='MOBILEaboutCardDesc'>
                Good reputation among community and investors
              </p>
            </div>
            <div className='MOBILEaboutCard'>
              <AccountBalanceIcon />
              <h1 className='MOBILEaboutCardTitle'>Huge</h1>
              <p className='MOBILEaboutCardDesc'>
                One of the biggest marketing agencies
              </p>
            </div>
          </div>
        </div>

        {/* STEPS */}
        <div className='MOBILEsteps'>
          <h1 className='MOBILEstepsTitle'>STEPS TO SUCCESS</h1>
          <div className='MOBILEstep sto'>
            <div className='MOBILEstepLeft'>
              <h1 className='MOBILEstepNumber one'>01</h1>
            </div>
            <div className='MOBILEstepRight MOBILEstepText'>
              <h3 className='MOBILEstepTitle'>STEP ONE</h3>
              <p className='MOBILEstepDesc'>
                It all starts with a powerful marketing strategy to attract the
                community and investors. Our marketing team will work thoroughly
                over the strategy for promotion of your project. The first step
                is determining the target audience, and preparing for active
                marketing.
              </p>
              <ul>
                <li>
                  <span style={{ color: "#3f0aa1", fontSize: "2rem" }}>• </span>
                  Determining the target audience
                </li>
                <li>
                  <span style={{ color: "#3f0aa1", fontSize: "2rem" }}>• </span>
                  Building of marketing strategy
                </li>
                <li>
                  <span style={{ color: "#3f0aa1", fontSize: "2rem" }}>• </span>
                  Content Writing
                </li>
              </ul>
              <a href='/contact' className='MOBILEstepBtn'>
                Find out more
              </a>
            </div>
          </div>

          <div className='MOBILEstepWrapper'>
            <div className='step stt'>
              <div className='MOBILEstepLeft MOBILEstepText'>
                <h3 className='MOBILEstepTitle'>STEP TWO</h3>
                <p className='MOBILEstepDesc'>
                  Step two comes with advertising on the most important media,
                  targeting the most relevant audience. We’ve got filters to hit
                  exactly who we’re aiming. You basically get a full marketing
                  team covering everything.
                </p>
                <ul>
                  <li>
                    <span style={{ color: "#3f0aa1", fontSize: "2rem" }}>
                      •{" "}
                    </span>
                    Coin listings for new token (up to 15) + ratings
                  </li>
                  <li>
                    <span style={{ color: "#3f0aa1", fontSize: "2rem" }}>
                      •{" "}
                    </span>{" "}
                    Telegram group members and happiness (from 100 chats daily)
                  </li>
                  <li>
                    <span style={{ color: "#3f0aa1", fontSize: "2rem" }}>
                      •{" "}
                    </span>{" "}
                    Social media boost (likes, followers, comments)
                  </li>
                  <li>
                    <span style={{ color: "#3f0aa1", fontSize: "2rem" }}>
                      •{" "}
                    </span>{" "}
                    Twitter and youtube influencers comments on topics of “what
                    token to invest in”
                  </li>
                  <li>
                    <span style={{ color: "#3f0aa1", fontSize: "2rem" }}>
                      •{" "}
                    </span>
                    List of twitter influencers and work with them
                  </li>
                </ul>
                <a href='/contact' className='MOBILEstepBtn'>
                  Find out more
                </a>
              </div>
              <div className='MOBILEstepRight'>
                <h1 className='MOBILEstepNumber two'>02</h1>
              </div>
            </div>
          </div>

          <div className='MOBILEstep str'>
            <div className='MOBILEstepLeft'>
              <h1 className='MOBILEstepNumber three'>03</h1>
            </div>
            <div className='MOBILEstepRight MOBILEstepText'>
              <h3 className='MOBILEstepTitle'>STEP THREE</h3>
              <p className='MOBILEstepDesc'>
                Step three is the details. Making sure everything is going
                according to plan, as well as implementing banner ads. This is
                where everything comes together.
              </p>
              <ul>
                <li>
                  <span style={{ color: "#3f0aa1", fontSize: "2rem" }}>• </span>
                  Full marketing control and planning (banner ads: coinzilla,
                  twitter, fb, insta, google ?)
                </li>
                <li>
                  <span style={{ color: "#3f0aa1", fontSize: "2rem" }}>• </span>
                  PR control
                </li>
              </ul>
              <a href='/contact' className='MOBILEstepBtn'>
                Find out more
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
