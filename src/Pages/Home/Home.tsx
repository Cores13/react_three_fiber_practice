import React, { useState, useContext, useEffect } from "react";
import { GlobalState } from "../../GlobalState";
import { softShadows } from "@react-three/drei";
import SceneOne from "../SceneOne/SceneOne";
import "./Home.css";
import {
  motion,
  useViewportScroll,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";

softShadows();

export const Home = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 0.2], [4, 0.6]);
  const y = useTransform(scrollYProgress, [0, -1.5, -2.5], [0, 1.5, 1.5]);

  const store = useContext(GlobalState);
  const [site, setSite] = store?.sites;
  const [home, setHome] = useState(false);
  const [services, setServices] = useState(false);
  const [projects, setProjects] = useState(false);
  const [about, setAbout] = useState(false);
  const [contact, setContact] = useState(false);

  const resetSite = () => {
    setHome(false);
    setServices(false);
    setProjects(false);
    setAbout(false);
    setContact(false);
  };

  useEffect(() => {
    resetSite();
    if (site === "projects") {
      setProjects(true);
    } else if (site === "services") {
      setServices(true);
    } else if (site === "about") {
      setAbout(true);
    } else if (site === "contact") {
      setContact(true);
    } else if (site === "home") {
      setHome(true);
    }
  }, [setSite, site]);

  return (
    <>
      {}
      {/* <div className='homeScene'> */}
      <img
        src='./VoxMagna.svg'
        alt=''
        className='logo'
        onClick={async () => await setSite("home")}
      />
      <AnimatePresence>
        {home && (
          <>
            <motion.h2
              className='text'
              onClick={async () => await setSite("home")}
              transition={{ duration: 1 }}
              initial={{ x: 500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 500, opacity: 0 }}
              key='modal'>
              HOME
            </motion.h2>
            <motion.h2
              className='text2'
              onClick={async () => await setSite("services")}
              transition={{ duration: 1 }}
              initial={{ x: 500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 500, opacity: 0 }}>
              SERVICES
            </motion.h2>
            <motion.h2
              className='text3'
              onClick={async () => await setSite("projects")}
              transition={{ duration: 1 }}
              initial={{ x: 500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 500, opacity: 0 }}>
              PROJECTS
            </motion.h2>
            <motion.h2
              className='text4'
              onClick={async () => await setSite("about")}
              transition={{ duration: 1 }}
              initial={{ x: 500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 500, opacity: 0 }}>
              ABOUT
            </motion.h2>
            <motion.h2
              className='text5'
              onClick={async () => await setSite("contact")}
              transition={{ duration: 1 }}
              initial={{ x: 500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 500, opacity: 0 }}>
              CONTACT US
            </motion.h2>
            <motion.h2
              className='homeLink'
              transition={{ duration: 1 }}
              initial={{ y: 500, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 500, opacity: 0 }}>
              View more
            </motion.h2>
          </>
        )}
      </AnimatePresence>
      {/* </div> */}
    </>
  );
};
