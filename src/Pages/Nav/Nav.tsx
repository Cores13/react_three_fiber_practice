import { useState, useContext, useEffect } from "react";
import { GlobalState } from "../../GlobalState";
import { softShadows } from "@react-three/drei";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./Nav.css";
import {
  motion,
  // useViewportScroll,
  AnimatePresence,
  // useTransform,
} from "framer-motion";
import { Home } from "../Home/Home";
import { Services } from "../Services/Services";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";

softShadows();

export const Nav = () => {
  // const { scrollYProgress } = useViewportScroll();
  // const scale = useTransform(scrollYProgress, [0, 0.2], [4, 0.6]);
  // const y = useTransform(scrollYProgress, [0, -1.5, -2.5], [0, 1.5, 1.5]);

  const store = useContext(GlobalState);
  const [site, setSite] = store?.sites;
  const [load, setLoad] = store?.load;
  const [nav, setNav] = useState(false);
  const [home, setHome] = useState(false);
  const [services, setServices] = useState(false);
  const [projects, setProjects] = useState(false);
  const [about, setAbout] = useState(false);
  const [contact, setContact] = useState(false);

  const resetSite = () => {
    setNav(false);
    setHome(false);
    setServices(false);
    setProjects(false);
    setAbout(false);
    setContact(false);
  };

  useEffect(() => {
    resetSite();
    if (site === "nav") {
      setNav(true);
      setLoad(false);
    } else if (site === "projects") {
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
  }, [setSite, site, load, setLoad]);

  return (
    <>
      <img
        src='./VoxMagna.svg'
        alt=''
        className='logo'
        onClick={() => {
          setLoad(false);
          setTimeout(() => {
            setSite("nav");
          }, 500);
        }}
      />
      <AnimatePresence>
        {load && (
          <motion.div
            className='back'
            onClick={() => {
              setTimeout(() => {
                setSite("nav");
                setLoad(false);
              }, 500);
            }}
            transition={{ duration: 1 }}
            initial={{ x: 500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 500, opacity: 0 }}>
            <KeyboardBackspaceIcon />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {nav && (
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
              onClick={async () => await setSite("contact")}
              transition={{ duration: 1 }}
              initial={{ y: 500, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 500, opacity: 0 }}>
              Learn more
            </motion.h2>
          </>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {home && (
          <motion.div
            className='servicesDiv'
            transition={{ duration: 0.5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <Home />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {services && (
          <motion.div
            className='servicesDiv'
            transition={{ duration: 0.5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <Services />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {projects && (
          <motion.div
            className='servicesDiv'
            transition={{ duration: 0.5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <Services />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {about && (
          <motion.div
            className='servicesDiv'
            transition={{ duration: 0.5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <About />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {contact && (
          <motion.div
            className='servicesDiv'
            transition={{ duration: 0.5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
