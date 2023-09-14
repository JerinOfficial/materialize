import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(calories, fat, carbs, protein) {
  return { calories, fat, carbs, protein };
}

const rows = [
  createData(
    "Jordan Stevenson",
    "susanna.Lind57@gmail.com",
    "Admin",
    "Pending"
  ),
  createData(
    "Robert Crawford",
    "estelle.Bailey10@gmail.com",
    "Editor",
    "Active"
  ),
  createData("Lydia Reese", "milo86@hotmail.com", "Author", "Inactive"),
  createData("Richard Sims", "lonnie35@hotmail.com", "Editor", "Pending"),
  createData("Lucile Young", "ahmad_Collins@yahoo.com", "Maintainer", "Active"),
  createData("Phoebe Patterson", "otho21@gmail.com", "Subscriber", "Inactive"),
];

export default function DashboardTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="large" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell
              style={{
                backgroundColor: "#f5f5f7",
                fontSize: "0.75rem",
                fontWeight: "var(--unstable_DataGrid-headWeight)",
              }}
              align="left"
            >
              USER
            </TableCell>
            <TableCell
              style={{
                backgroundColor: "#f5f5f7",
                fontSize: "0.75rem",
                fontWeight: "var(--unstable_DataGrid-headWeight)",
              }}
              align="left"
            >
              EMAIL
            </TableCell>
            <TableCell
              style={{
                backgroundColor: "#f5f5f7",
                fontSize: "0.75rem",
                fontWeight: "var(--unstable_DataGrid-headWeight)",
              }}
              align="left"
            >
              ROLE
            </TableCell>
            <TableCell
              style={{
                backgroundColor: "#f5f5f7",
                fontSize: "0.75rem",
                fontWeight: "var(--unstable_DataGrid-headWeight)",
              }}
              align="left"
            >
              STATUS
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.calories}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              <TableCell align="left">{row.calories}</TableCell>
              <TableCell sx={{ color: "rgba(76, 78, 100, 0.6)" }} align="left">
                {row.fat}
              </TableCell>
              <TableCell sx={{ color: "rgba(76, 78, 100, 0.6)" }} align="left">
                {row.carbs}
              </TableCell>
              <TableCell sx={{ color: "rgba(76, 78, 100, 0.6)" }} align="left">
                {row.protein}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
