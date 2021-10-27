import { useContext } from "react";
import { GlobalState } from "../../GlobalState";
import "./Home.css";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

import { motion, AnimatePresence } from "framer-motion";

export const Home = () => {
  const store = useContext(GlobalState);
  const [site, setSite] = store?.sites;
  const [load, setLoad] = store?.load;

  setTimeout(() => {
    setLoad(true);
  }, 500);

  return (
    <AnimatePresence>
      {load && (
        <motion.div
          className='homeWrapper'
          transition={{ duration: 1 }}
          initial={{ y: 500, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 5000, opacity: 0 }}>
          <div className='landing'>
            <div className='landingTop'>
              <h1 className='landingTitle'>
                LET OUR VOICE BE THE FRONTMAN OF YOUR BUSINESS! ANY QUESTIONS
                BEFORE WE START ROCKING?
              </h1>
              <button
                onClick={() => {
                  setLoad(false);
                  setTimeout(() => {
                    setSite("contact");
                  }, 500);
                }}
                className='landingContactBtn'>
                ASK A QUESTION
              </button>
            </div>
          </div>

          {/* MISSION */}
          <div className='mission'>
            <div className='missionWrapper'>
              <div className='missionLeft'>
                <h1 className='missionTitle'>OUR MISSION</h1>
              </div>
              <div className='missionRight'>
                <div className='missionDesc'>
                  <p>
                    VoxMagna will strive to make your project be among the best
                    of the best. Our goal is to achieve long-term growth of your
                    project by ensuring the best quality marketing and
                    fulfillment of our obligations, with the best marketing
                    prices.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* PLAN */}
          <div className='plan'>
            <div className='planWrapper'>
              <div className='planTop'>
                <h1 className='planTitle'>
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
              <div className='planBot'>
                <p>
                  Sign up for the highest quality and performance marketing.
                  Cooperate with our team for the best results.
                </p>
                <button
                  onClick={() => {
                    setLoad(false);
                    setTimeout(() => {
                      setSite("contact");
                    }, 500);
                  }}
                  className='planBtn'>
                  GET PREMIUM
                </button>
              </div>
            </div>
          </div>

          {/* ABOUT US */}
          <div className='about'>
            <h1 className='aboutTitle'>ABOUT OUR PERFORMANCE</h1>
            <div className='aboutCards'>
              <div className='aboutCard'>
                <AttachMoneyIcon />
                <h1 className='aboutCardTitle'>Worth it</h1>
                <p className='aboutCardDesc'>
                  Best prices for the marketing we offer
                </p>
              </div>
              <div className='aboutCard'>
                <AutoAwesomeIcon />
                <h1 className='aboutCardTitle'>Skilled</h1>
                <p className='aboutCardDesc'>Years of experience behind us</p>
              </div>
              <div className='aboutCard'>
                <ShowChartIcon />
                <h1 className='aboutCardTitle'>Efficient</h1>
                <p className='aboutCardDesc'>
                  Straight to the point, not wasting time on inefficient
                  marketing
                </p>
              </div>
              <div className='aboutCard'>
                <AddReactionIcon />
                <h1 className='aboutCardTitle'>Trusted</h1>
                <p className='aboutCardDesc'>
                  Good reputation among community and investors
                </p>
              </div>
              <div className='aboutCard'>
                <AccountBalanceIcon />
                <h1 className='aboutCardTitle'>Huge</h1>
                <p className='aboutCardDesc'>
                  One of the biggest marketing agencies
                </p>
              </div>
            </div>
          </div>

          {/* STEPS */}
          <div className='steps'>
            <h1 className='stepsTitle'>STEPS TO SUCCESS</h1>
            <div className='step sto'>
              <div className='stepLeft'>
                <h1 className='stepNumber one'>01</h1>
              </div>
              <div className='stepRight stepText'>
                <h3 className='stepTitle'>STEP ONE</h3>
                <p className='stepDesc'>
                  It all starts with a powerful marketing strategy to attract
                  the community and investors. Our marketing team will work
                  thoroughly over the strategy for promotion of your project.
                  The first step is determining the target audience, and
                  preparing for active marketing.
                </p>
                <ul>
                  <li>
                    <span style={{ color: "aqua", fontSize: "2rem" }}>• </span>
                    Determining the target audience
                  </li>
                  <li>
                    <span style={{ color: "aqua", fontSize: "2rem" }}>• </span>
                    Building of marketing strategy
                  </li>
                  <li>
                    <span style={{ color: "aqua", fontSize: "2rem" }}>• </span>
                    Content Writing
                  </li>
                </ul>
                <button
                  onClick={() => {
                    setLoad(false);
                    setTimeout(() => {
                      setSite("contact");
                    }, 500);
                  }}
                  className='stepBtn'>
                  Find out more
                </button>
              </div>
            </div>
            <hr className='divider' />

            <div className='stepWrapper'>
              <div className='step stt'>
                <div className='stepLeft stepText'>
                  <h3 className='stepTitle'>STEP TWO</h3>
                  <p className='stepDesc'>
                    Step two comes with advertising on the most important media,
                    targeting the most relevant audience. We’ve got filters to
                    hit exactly who we’re aiming. You basically get a full
                    marketing team covering everything.
                  </p>
                  <ul>
                    <li>
                      <span style={{ color: "aqua", fontSize: "2rem" }}>
                        •{" "}
                      </span>
                      Coin listings for new token (up to 15) + ratings
                    </li>
                    <li>
                      <span style={{ color: "aqua", fontSize: "2rem" }}>
                        •{" "}
                      </span>{" "}
                      Telegram group members and happiness (from 100 chats
                      daily)
                    </li>
                    <li>
                      <span style={{ color: "aqua", fontSize: "2rem" }}>
                        •{" "}
                      </span>{" "}
                      Social media boost (likes, followers, comments)
                    </li>
                    <li>
                      <span style={{ color: "aqua", fontSize: "2rem" }}>
                        •{" "}
                      </span>{" "}
                      Twitter and youtube influencers comments on topics of
                      “what token to invest in”
                    </li>
                    <li>
                      <span style={{ color: "aqua", fontSize: "2rem" }}>
                        •{" "}
                      </span>
                      List of twitter influencers and work with them
                    </li>
                  </ul>
                  <button
                    onClick={() => {
                      setLoad(false);
                      setTimeout(() => {
                        setSite("contact");
                      }, 500);
                    }}
                    className='stepBtn'>
                    Find out more
                  </button>
                </div>
                <div className='stepRight'>
                  <h1 className='stepNumber two'>02</h1>
                </div>
              </div>
            </div>
            <hr className='divider' />

            <div className='step str'>
              <div className='stepLeft'>
                <h1 className='stepNumber three'>03</h1>
              </div>
              <div className='stepRight stepText'>
                <h3 className='stepTitle'>STEP THREE</h3>
                <p className='stepDesc'>
                  Step three is the details. Making sure everything is going
                  according to plan, as well as implementing banner ads. This is
                  where everything comes together.
                </p>
                <ul>
                  <li>
                    <span style={{ color: "aqua", fontSize: "2rem" }}>• </span>
                    Full marketing control and planning (banner ads: coinzilla,
                    twitter, fb, insta, google ?)
                  </li>
                  <li>
                    <span style={{ color: "aqua", fontSize: "2rem" }}>• </span>
                    PR control
                  </li>
                </ul>
                <button
                  onClick={() => {
                    setLoad(false);
                    setTimeout(() => {
                      setSite("contact");
                    }, 500);
                  }}
                  className='stepBtn'>
                  Find out more
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
