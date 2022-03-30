import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import DoDisturbOnOutlinedIcon from "@mui/icons-material/DoDisturbOnOutlined";
import SelectOption from "./SelectOption";
import { ContextApp } from "../common/Context";

import { getUser } from "../common/InitialData";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: "1rem",
    maxWidth: 360,
  },
}));

export default function InsetDividers() {
  const  objectUser = getUser();
  const { refreshUser } = useContext(ContextApp);
  const [localUser, setLocalUser] = useState(objectUser);
  const [isCheckUser, setIsCheckUser] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    if (refreshUser) {
      const objectUser = getUser();
      setLocalUser(objectUser);
    }
  }, [refreshUser]);

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{ backgroundColor: "#47CACC" }}>
            {localUser?.minName}
          </Avatar>
        </ListItemAvatar>
        {!isCheckUser && (
          <ListItemText
            primary={localUser?.fullName}
            secondary={localUser?.email}
          />
        )}
        {!isCheckUser && (
          <ListItemText onClick={() => setIsCheckUser(true)} className="cursor">
            <FilterAltOutlinedIcon />
          </ListItemText>
        )}
        {isCheckUser && (
          <ListItemText>
            <SelectOption />
          </ListItemText>
        )}
        {isCheckUser && (
          <ListItemText
            onClick={() => setIsCheckUser(false)}
            className="cursor icons-option-user"
          >
            <DoDisturbOnOutlinedIcon />
          </ListItemText>
        )}
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}
