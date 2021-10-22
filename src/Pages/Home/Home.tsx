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

  useEffect(() => {
    if (site === "projects") {
      setProjects(true);
      setServices(false);
      setHome(false);
      setAbout(false);
      setContact(false);
    } else if (site === "services") {
      setServices(true);
      setHome(false);
      setProjects(false);
      setAbout(false);
      setContact(false);
    } else if (site === "about") {
      setAbout(true);
      setHome(false);
      setProjects(false);
      setServices(false);
      setContact(false);
    } else if (site === "contact") {
      setContact(true);
      setHome(false);
      setServices(false);
      setProjects(false);
      setAbout(false);
    } else if (site === "home") {
      setHome(true);
      setServices(false);
      setProjects(false);
      setAbout(false);
      setContact(false);
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
      {home && (
        <AnimatePresence>
          <motion.h2
            className='text'
            onClick={async () => await setSite("home")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key='modal'>
            HOME
          </motion.h2>
          <motion.h2
            className='text2'
            onClick={async () => await setSite("services")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key='modal'>
            SERVICES
          </motion.h2>
          <motion.h2
            className='text3'
            onClick={async () => await setSite("projects")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            PROJECTS
          </motion.h2>
          <motion.h2
            className='text4'
            onClick={async () => await setSite("about")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            ABOUT
          </motion.h2>
          <motion.h2
            className='text5'
            onClick={async () => await setSite("contact")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            CONTACT US
          </motion.h2>
          <motion.h2
            className='homeLink'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            View more
          </motion.h2>
        </AnimatePresence>
      )}
      {/* </div> */}
    </>
  );
};
