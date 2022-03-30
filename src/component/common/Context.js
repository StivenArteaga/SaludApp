import React, { useState } from "react";

export const ContextApp = React.createContext();

export default function ContextGeneral(props) {
  const [tab, setTab] = useState(0);
  const [refreshUser, setRefreshUser] = useState(false);

  const changeTab = (newValue) => setTab(newValue);
  const changeRefreshUser = (newValue) => setRefreshUser(newValue);

  return (
    <ContextApp.Provider
      value={{ tab, changeTab, refreshUser, changeRefreshUser }}
    >
      {props.children}
    </ContextApp.Provider>
  );
}
