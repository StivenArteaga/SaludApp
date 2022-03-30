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
import { ContextComponent, componentView } from "./Context";
import { getUser } from "../common/InitialData";

export const keyCollection = "healthy-condition-collection";

export const getHealthyCondition = () => {
  const storage = localStorage.getItem(keyCollection);
  if (!storage) return [];

  const objectUser = getUser();
  const collection = JSON.parse(storage);

  return collection.filter((x) => x.idUser === objectUser.identifier);
};

export const getHealthyConditionAll = () => {
  const storage = localStorage.getItem(keyCollection);
  if (!storage) return [];

  const collection = JSON.parse(storage);

  return collection;
};

export default function BasicTable() {
  const { changeView, globalContext } = React.useContext(ContextComponent);
  const [collection, setCollection] = React.useState([]);

  React.useEffect(() => {
    getCollection();
  }, []);

  React.useEffect(() => {
    if (globalContext.refreshUser) {
      getCollection();
      globalContext.changeRefreshUser(false);
    }
  }, [globalContext.refreshUser]);

  const handleAddItem = () => changeView(componentView.form);
  const getCollection = () => {
    const data = getHealthyCondition();
    setCollection(data);
  };
  const deleteItem = (item) => {
    const data = getHealthyConditionAll();
    const newData = data.filter((x) => x.idHealthyCondition !== item);
    localStorage.setItem(keyCollection, JSON.stringify(newData));
    getCollection();
  };

  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Observación</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {collection.length === 0 && (
              <TableRow>
                <TableCell colSpan={3}>
                  <span className="center-content">
                    No cuenta con información
                  </span>
                </TableCell>
              </TableRow>
            )}
            {collection.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>
                  <Button
                    size="small"
                    variant="outlined"
                    color="error"
                    onClick={() => deleteItem(row.idHealthyCondition)}
                  >
                    Eliminar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack direction="row" className="center-content mt-1em" spacing={2}>
        <Button variant="contained" onClick={handleAddItem}>
          Agregar
        </Button>
      </Stack>
    </React.Fragment>
  );
}
