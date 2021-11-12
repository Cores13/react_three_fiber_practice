import React, { useContext, useState, useEffect } from "react";
import "./SceneOne.css";
import { GlobalState } from "../../GlobalState";
import { motion, AnimatePresence } from "framer-motion";

export default function Overlay() {
  const store = useContext(GlobalState);
  // eslint-disable-next-line
  const [site, setSite] = store?.sites;
  const [clicked, setClicked] = useState(false);
  const [firstOpen, setFirstOpen] = store?.firstOpen;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4500);
  }, []);

  const handleClick = () => {
    setClicked(true);
    setFirstOpen(false);
    setTimeout(() => {
      window.location.href = "/home";
    }, 1000);
  };

  return (
    <>
      <AnimatePresence>
        {firstOpen && (
          <motion.div
            className={`fullscreen bg ${clicked && "clicked"}`}
            transition={{ duration: 1 }}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <div
              onClick={() => {
                handleClick();
              }}>
              {!clicked && (
                <div>
                  {!loading && (
                    <motion.div
                      className='gradient'
                      transition={{ ease: "easeOut", duration: 0.4 }}
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                      }}
                      exit={{ opacity: 0 }}></motion.div>
                  )}
                  <div className='loadingLogo'>
                    <motion.img
                      src='./1half.png'
                      alt=''
                      className='logoPiece'
                      transition={{ duration: 3.5 }}
                      initial={{ top: "-10%", left: "-10%", opacity: 0 }}
                      animate={{
                        top: "50%",
                        left: "50%",
                        opacity: 1,
                        transform: "translateX(-50%), translateY(-50%)",
                      }}
                      exit={{ top: "-10%", left: "-10%", opacity: 0 }}
                    />
                    <motion.img
                      src='./2half.png'
                      alt=''
                      className='logoPiece'
                      transition={{ duration: 3.5 }}
                      initial={{ top: "-10%", left: "110%", opacity: 0 }}
                      animate={{
                        top: "50%",
                        left: "50%",
                        opacity: 1,
                        transform: "translateX(-50%) translateY(-50%)",
                      }}
                      exit={{ top: "-10%", left: "110%", opacity: 0 }}
                    />
                    <motion.img
                      src='./3half.png'
                      alt=''
                      className='logoPiece'
                      transition={{ duration: 3.5 }}
                      initial={{ left: "-10%", top: "110%", opacity: 0 }}
                      animate={{
                        top: "50%",
                        left: "50%",
                        opacity: 1,
                        transform: "translateX(-50%) translateY(-50%)",
                      }}
                      exit={{ left: "-10%", top: "110%", opacity: 0 }}
                    />
                    <motion.img
                      src='./4half.png'
                      alt=''
                      className='logoPiece'
                      transition={{ duration: 3.5 }}
                      initial={{ left: "110%", top: "110%", opacity: 0 }}
                      animate={{
                        top: "50%",
                        left: "50%",
                        opacity: 1,
                        transform: "translateX(-50%) translateY(-50%)",
                      }}
                      exit={{ left: "110%", top: "110%", opacity: 0 }}
                    />
                    {!loading && (
                      <button className='loadingBtn'>Click to continue</button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
        {/* <Footer
        date='28. January'
        year='2021'
        link1={<a href='https://github.com/pmndrs/drei'>pmndrs/drei</a>}
        link2={
          <a href='https://codesandbox.io/s/drei-reflector-bfplr'>
            s/drei-reflector-bfplr
          </a>
        }
      /> */}
      </AnimatePresence>
    </>
  );
}
