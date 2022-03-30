import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { ContextApp } from "../common/Context.js";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    // backgroundColor: "#E0ECDE"
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const contextGeneral = useContext(ContextApp);

  const handleChange = (event, newValue) => {
    contextGeneral.changeTab(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={contextGeneral.tab}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Condiciones de salud" />
        <Tab label="Control medico" />
        <Tab label="Grupo familiar" />
        <Tab label="Perfil" />
      </Tabs>
    </Paper>
  );
}
