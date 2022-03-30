import { Fragment } from "react";
import "./App.css";

import ContextApp from "./component/common/Context";
import InitialData from "./component/common/InitialData";
import { HeaderComponent, ContentForm, UserFilter } from "./component/Index";

function App() {
  return (
    <Fragment>
      <InitialData>
        <ContextApp>
          <HeaderComponent />
          <UserFilter />
          <ContentForm />
        </ContextApp>
      </InitialData>
    </Fragment>
  );
}

export default App;
