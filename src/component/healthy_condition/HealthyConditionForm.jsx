import React, { useContext, Fragment, useState } from "react";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { ContextComponent, componentView } from "./Context";
import { keyCollection, getHealthyConditionAll } from "./HealthyConditionTable";
import { getUser } from "../common/InitialData";

export default function HealthyConditionForm() {
  const { changeView } = useContext(ContextComponent);
  const [nameCondition, setNameCondition] = useState("");
  const [descriptionCondition, setDescriptionCondition] = useState("");
  const [notification, setNotification] = useState({
    message: "",
    type: "",
    title: "",
    show: false,
  });

  const handleAddItem = () => changeView(componentView.table);

  const handleSave = () => {
    if (!validSave()) return;

    const collection = getHealthyConditionAll(),
      objectUser = getUser();

    collection.push({
      idHealthyCondition: getLastId(collection),
      name: nameCondition,
      description: descriptionCondition,
      idUser: objectUser.identifier,
    });

    localStorage.setItem(keyCollection, JSON.stringify(collection));

    openNotification({
      message: "Condición de salud registrada correctamente",
      title: "Correcto",
      type: "success",
    });

    resetForm(keyCollection, JSON.stringify);
  };

  const getLastId = (collection) => {
    if (collection?.length === 0) return 1;

    return collection?.length + 1;
  };

  const validSave = () => {
    if (!nameCondition || !descriptionCondition) {
      openNotification({
        message: "Los valores son requeridos",
        type: "warning",
        title: "Advertencia",
      });
      return false;
    }

    if (notification.show) closeNotification();

    return true;
  };

  const openNotification = ({ message, type, title }) =>
    setNotification({
      message: message,
      type: type,
      title: title,
      show: true,
    });

  const closeNotification = () =>
    setNotification({ show: false, message: "", title: "", type: "" });

  const resetForm = () => {
    setNameCondition("");
    setDescriptionCondition("");
  };

  return (
    <Fragment>
      {notification.show && (
        <Alert severity={notification.type}>
          <AlertTitle>{notification.title}</AlertTitle>
          {notification.message}
        </Alert>
      )}
      <FormControl className="w-100 mt-1em">
        <InputLabel htmlFor="my-input">Nombre condición</InputLabel>
        <Input
          name="nameCondition"
          value={nameCondition}
          onChange={(e) => setNameCondition(e.target.value)}
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl className="w-100 mt-1em">
        <InputLabel htmlFor="my-input">Observación</InputLabel>
        <Input
          name="descriptionCondition"
          value={descriptionCondition}
          onChange={(e) => setDescriptionCondition(e.target.value)}
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <Stack direction="row" className="center-content mt-1em" spacing={2}>
        <Button className="mt-1em" variant="contained" onClick={handleAddItem}>
          Volver
        </Button>
        <Button
          className="mt-1em"
          variant="contained"
          color="success"
          onClick={handleSave}
        >
          Guardar
        </Button>
      </Stack>
    </Fragment>
  );
}
