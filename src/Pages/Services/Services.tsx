import React, { useContext } from "react";
import { GlobalState } from "../../GlobalState";
import "./Services.css";
import { motion, AnimatePresence } from "framer-motion";

export const Services = () => {
  const store = useContext(GlobalState);
  const [load, setLoad] = store?.load;

  setTimeout(() => {
    setLoad(true);
  }, 500);
  return (
    <AnimatePresence>
      {load && (
        <motion.div
          className='services'
          transition={{ duration: 1 }}
          initial={{ y: 500, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 5000, opacity: 0 }}>
          <h1 className='servicesTitle'>Services</h1>
          <p className='servicesDesc'>
            With VoxMagna, you get a marketing team included in the marketing
            package, no need to hire one. Our teams contain multiple community
            managers, copywriters, and graphic designers. Our services include:
          </p>
          <motion.div className='servicesCards'>
            <motion.div className='servicesCard'>
              Dedicated team (marketing manager for planning, graphic designer
              and copywriter)
            </motion.div>
            <motion.div className='servicesCard'>
              Full marketing plan
            </motion.div>
            <motion.div className='servicesCard'>
              Coin listings for new token (up to 15) + ratings
            </motion.div>
            <motion.div className='servicesCard'>
              Telegram group members and happiness (from 100 chats daily)
            </motion.div>
            <motion.div className='servicesCard'>
              Social media boost (likes, followers, comments)
            </motion.div>
            <motion.div className='servicesCard'>
              Twitter and youtube influencers comments on topics of “what token
              to invest in”
            </motion.div>
            <motion.div className='servicesCard'>
              List of twitter influencers and work with them
            </motion.div>
            <motion.div className='servicesCard'>
              Full marketing control and planning (banner ads: coinzilla,
              twitter, fb, insta, google ?)
            </motion.div>
            <motion.div className='servicesCard'>PR control</motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
