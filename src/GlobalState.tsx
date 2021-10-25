import React, { createContext, useState } from "react";

export interface ContextType {
  children: any;
  store: {
    sites: {
      site: string;
      setSite: React.Dispatch<React.SetStateAction<string>>;
    };
    load: boolean;
    setLoad: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

export const GlobalState = createContext<ContextType | undefined | any>(
  undefined
);

export const DataProvider: React.FC = ({ children }) => {
  const [site, setSite] = useState("nav");
  const [load, setLoad] = useState(false);

  var store = {
    sites: [site, setSite],
    load: [load, setLoad],
  };

  return <GlobalState.Provider value={store}>{children}</GlobalState.Provider>;
};
