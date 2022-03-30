import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { getFamilyCollection } from "../common/InitialData";

export default function FamilyGroup() {
  const collection = getFamilyCollection();
  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Abreviación</TableCell>
              <TableCell>Correo</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {collection.map((row) => (
              <TableRow
                key={row.fullName}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.fullName}</TableCell>
                <TableCell>{row.minName}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>
                  <Button size="small" variant="outlined" color="error">
                    Eliminar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack direction="row" className="center-content mt-1em" spacing={2}>
        <Button variant="contained">Agregar</Button>
      </Stack>
    </React.Fragment>
  );
}
