import React, { useState, useContext } from "react";
import "./Services.css";
import { GlobalState } from "../../GlobalState";
import {
  motion,
  useViewportScroll,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";

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
          initial={{ x: -500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -500, opacity: 0 }}>
          <h1 className='servicesTitle'>Services</h1>
          <p className='servicesDesc'>
            With VoxMagna, you get a marketing team included in the marketing
            package, no need to hire one. Our teams contain multiple community
            managers, copywriters, and graphic designers. Our services include:
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
