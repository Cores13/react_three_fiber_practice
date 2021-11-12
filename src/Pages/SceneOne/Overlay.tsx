import React, { useContext, useState, useEffect } from "react";
import "./SceneOne.css";
import { GlobalState } from "../../GlobalState";
import { motion, AnimatePresence } from "framer-motion";
import { radioClasses } from "@mui/material";

export default function Overlay({ ready, setReady, clicked, setClicked }: any) {
  const store = useContext(GlobalState);
  // eslint-disable-next-line
  const [site, setSite] = store?.sites;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3700);
    setTimeout(() => {
      setClicked(true);
      setReady(true);
      setSite("nav");
    }, 4300);
  }, []);

  // useEffect(() => {
  //   setReady(true);
  //   setTimeout(async () => {
  //     await (ready && setClicked(true));
  //     setClicked(true);
  //     setSite("nav");
  //   }, 4000);
  // }, [ready, clicked, setClicked, setReady, setSite]);

  return (
    <>
      <AnimatePresence>
        {!clicked && (
          <motion.div
            className={`fullscreen bg ${ready ? "ready" : "notready"} ${
              clicked && "clicked"
            }`}
            transition={{ duration: 1 }}
            initial={{ opacity: 1 }}
            animate={{
              opacity: 1,
            }}
            exit={{ opacity: 0 }}>
            <motion.div
            // className={`${
            //   loading
            //     ? "loadingBg"
            //     : "loadingGradient"
            // }`}
            // style={{
            //   background: `${
            //     loading
            //       ? "transparent"
            //       : "radial-gradient(#ffffff2a,#ffffff1c, #e5ff000c, #000000, #000000, #000000)"
            //   }`,
            //   border: "none",
            // }}

            // onClick={() => {
            //   ready && setClicked(true);
            //   setSite("nav");
            // }}
            >
              {!clicked && (
                <div>
                  <div className='loadingLogo'>
                    {!loading && (
                      <motion.div
                        className='gradient'
                        transition={{ ease: "easeOut", duration: 0.2 }}
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: 1,
                        }}
                        exit={{ opacity: 0 }}></motion.div>
                    )}
                    <motion.img
                      src='./1half.png'
                      alt=''
                      className='logoPiece'
                      transition={{ ease: "easeInOut", duration: 3 }}
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
                      transition={{ ease: "easeInOut", duration: 3 }}
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
                      transition={{ ease: "easeInOut", duration: 3 }}
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
                      transition={{ ease: "easeInOut", duration: 3 }}
                      initial={{ left: "110%", top: "110%", opacity: 0 }}
                      animate={{
                        top: "50%",
                        left: "50%",
                        opacity: 1,
                        transform: "translateX(-50%) translateY(-50%)",
                      }}
                      exit={{ left: "110%", top: "110%", opacity: 0 }}
                    />
                    {/* {!loading && (
                      <button className='loadingBtn'>
                        {!ready ? "loading" : "click to continue"}
                      </button>
                    )} */}
                  </div>
                </div>
              )}
            </motion.div>
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
