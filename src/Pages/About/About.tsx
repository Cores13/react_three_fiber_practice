import React, { useContext } from "react";
import "./About.css";
import { GlobalState } from "../../GlobalState";
import {
  motion,
  useViewportScroll,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";

export const About = () => {
  const store = useContext(GlobalState);
  const [load, setLoad] = store?.load;

  setTimeout(() => {
    setLoad(true);
  }, 500);
  return (
    <AnimatePresence>
      {load && (
        <motion.div
          className='aboutPage'
          transition={{ duration: 1 }}
          initial={{ y: 500, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 5000, opacity: 0 }}>
          <h1 className='aboutPageTitle'>About us</h1>
          <p className='aboutDesc'>
            VoxMagna is a marketing agency where you can boost your project and
            get more recognition. We have multiple teams of marketing squads,
            including community managers, copywriters, and graphic designers.
            Our goal is to collaborate with projects and make a marketing plan
            that will significantly help it out. We have investors’ trust and
            are experienced in the marketing field. If you need quality
            marketing with best marketing prices, reach out to us.
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
