import React, { Fragment, useContext } from "react";
import HealthyConditionTable from "./HealthyConditionTable";
import HealthyConditionForm from "./HealthyConditionForm";
import ContextProvider, { ContextComponent, componentView } from "./Context";

function HealthyCondition() {
  const { view } = useContext(ContextComponent);
  return (
    <Fragment>
      {componentView.table == view && <HealthyConditionTable />}
      {componentView.form == view && <HealthyConditionForm />}
    </Fragment>
  );
}

export default function ComponentRender() {
  return (
    <ContextProvider>
      <HealthyCondition />
    </ContextProvider>
  );
}
