import React, { Fragment, useState } from "react";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import Stack from "@mui/material/Stack";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import TextField from "@mui/material/TextField";

export default function MedicalControl() {
  const [age, setAge] = useState("");
  const [valueDate, setValueDate] = useState(new Date("2014-08-18T21:11:54"));
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleChangeDate = (newValue) => {
    setValueDate(newValue);
  };

  return (
    <Fragment>
      <FormControl variant="standard" className="w-100 mt-1em">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            label="Fecha de cita"
            inputFormat="MM/dd/yyyy"
            value={valueDate}
            onChange={handleChangeDate}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </FormControl>
      <FormControl variant="standard" className="w-100 mt-1em">
        <InputLabel htmlFor="my-input">Tipo cita</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Tipo 1</MenuItem>
          <MenuItem value={20}>Tipo 2</MenuItem>
          <MenuItem value={30}>Tipo 3</MenuItem>
          <MenuItem value={30}>Tipo 4</MenuItem>
        </Select>
      </FormControl>
      <FormControl className="w-100 mt-1em">
        <InputLabel htmlFor="my-input">Nombre médico</InputLabel>
        <Input name="nameCondition" aria-describedby="my-helper-text" />
      </FormControl>
      <FormControl className="w-100 mt-1em">
        <InputLabel htmlFor="my-input">Observación</InputLabel>
        <Input name="descriptionCondition" aria-describedby="my-helper-text" />
      </FormControl>
      <Stack direction="row" className="center-content mt-1em" spacing={2}>
        <Button className="mt-1em" variant="contained" color="success">
          Guardar
        </Button>
      </Stack>
    </Fragment>
  );
}
