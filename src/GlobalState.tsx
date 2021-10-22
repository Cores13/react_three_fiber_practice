import React, { createContext, useState } from "react";

export interface ContextType {
  children: any;
  store: {
    sites: {
      site: string;
      setSite: React.Dispatch<React.SetStateAction<string>>;
    };
  };
}

export const GlobalState = createContext<ContextType | undefined | any>(
  undefined
);

export const DataProvider: React.FC = ({ children }) => {
  const [site, setSite] = useState("home");

  var store = {
    sites: [site, setSite],
  };

  return <GlobalState.Provider value={store}>{children}</GlobalState.Provider>;
};
