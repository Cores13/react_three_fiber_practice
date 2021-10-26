import React, { useContext } from "react";

import "./SceneOne.css";
import { GlobalState } from "../../GlobalState";

export default function Overlay({ ready, clicked, setClicked }: any) {
  const store = useContext(GlobalState);
  // eslint-disable-next-line
  const [site, setSite] = store?.sites;

  return (
    <>
      <div
        className={`fullscreen bg ${ready ? "ready" : "notready"} ${
          clicked && "clicked"
        }`}>
        <div
          onClick={() => {
            ready && setClicked(true);
            setSite("nav");
          }}>
          {!ready ? "loading" : "click to continue"}
        </div>
      </div>
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
    </>
  );
}
