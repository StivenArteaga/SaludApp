import React, { Fragment, useContext, useEffect, useState } from "react";
import { ContextApp } from "../common/Context";
import {
  HealthyCondition,
  MedicalControl,
  FamilyGroup,
  UserProfile,
} from "../Index";

export default function ContentForm() {
  const context = useContext(ContextApp);
  const [tabSelected, setTabSelected] = useState(context.tab);

  useEffect(() => {
    setTabSelected(context.tab);
  }, [context.tab]);

  return (
    <Fragment>
      {tabSelected === 0 && <HealthyCondition />}
      {tabSelected === 1 && <MedicalControl />}
      {tabSelected === 2 && <FamilyGroup />}
      {tabSelected === 3 && <UserProfile />}
    </Fragment>
  );
}
