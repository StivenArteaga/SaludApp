import * as React from "react";
import { ContextApp } from "../common/Context";

export const componentView = { table: 1, form: 2 };
export const ContextComponent = React.createContext();
export default function Context(props) {
  const [view, setView] = React.useState(componentView.table);

  const changeView = (param) => setView(param);

  return (
    <ContextApp.Consumer>
      {(globalContext) => (
        <ContextComponent.Provider value={{ globalContext, view, changeView }}>
          {props.children}
        </ContextComponent.Provider>
      )}
    </ContextApp.Consumer>
  );
}
