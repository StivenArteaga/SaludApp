import React, { Fragment, useState } from "react";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import { getUser } from "../common/InitialData";

export default function UserProfile() {
  const user = getUser();
  return (
    <Fragment>
      <FormControl className="w-100 mt-1em">
        <InputLabel htmlFor="my-input">Nombres</InputLabel>
        <Input name="nameCondition" value="Brayan Stiven" aria-describedby="my-helper-text" />
      </FormControl>
      <FormControl className="w-100 mt-1em">
        <InputLabel htmlFor="my-input">Apellidos</InputLabel>
        <Input name="nameCondition" value="Mora Arteaga" aria-describedby="my-helper-text" />
      </FormControl>
      <FormControl className="w-100 mt-1em">
        <InputLabel htmlFor="my-input">Edad</InputLabel>
        <Input
          type="number"
          name="nameCondition"
          aria-describedby="my-helper-text"
          value="22"
        />
      </FormControl>
      <FormControl className="w-100 mt-1em">
        <InputLabel htmlFor="my-input">Correo</InputLabel>
        <Input
          type="email"
          name="nameCondition"
          aria-describedby="my-helper-text"
          value="stiv_mos@yopmail.com"
        />
      </FormControl>
      <FormControl variant="standard" className="w-100 mt-1em">
        <InputLabel htmlFor="my-input">Genero</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          defaultValue={20}
        >
          <MenuItem value={10}>Femenino</MenuItem>
          <MenuItem value={20}>Masculino</MenuItem>
          <MenuItem value={30}>Otro</MenuItem>
        </Select>
      </FormControl>
      <Stack direction="row" className="center-content mt-1em" spacing={2}>
        <Button className="mt-1em" variant="contained" color="success">
          Guardar
        </Button>
      </Stack>
    </Fragment>
  );
}
