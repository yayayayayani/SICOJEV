import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const rows = [
  {
    fecha: "28/07/2026",
    concepto: "Venta de comida",
    tipo: "Ingreso",
    monto: "Q450.00",
  },
  {
    fecha: "25/07/2026",
    concepto: "Publicidad",
    tipo: "Egreso",
    monto: "Q120.00",
  },
];

export default function DashboardTable() {
  return (
    <TableContainer component={Paper}>
      <Table>

        <TableHead>
          <TableRow>
            <TableCell>Fecha</TableCell>
            <TableCell>Concepto</TableCell>
            <TableCell>Tipo</TableCell>
            <TableCell>Monto</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.fecha}</TableCell>
              <TableCell>{row.concepto}</TableCell>
              <TableCell>{row.tipo}</TableCell>
              <TableCell>{row.monto}</TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>
  );
}