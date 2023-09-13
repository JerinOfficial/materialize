import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const columns = [
  { field: "id", headerName: "#", width: 171 },
  { field: "status", headerName: <TrendingUpIcon />, width: 171 },
  { field: "client", headerName: "Client", width: 385 },
  {
    field: "total",
    headerName: "Total",
    width: 171,
  },
  { field: "issuedDate", headerName: "Issued Date", width: 225 },
  { field: "balance", headerName: "Balance", width: 181 },
];

const rows = [
  {
    id: "#4989",
    client: "Tony Herrera",
    issuedDate: "19 Sep 2023",
    total: "$3719",
    balance: "-$344",
    status: "Sent",
  },
  {
    id: "#4990",
    client: "Kevin Patton",
    issuedDate: "17 Sep 2023",
    total: "$4749",
    balance: "Paid",
    status: "Paid",
  },
  {
    id: "#4991",
    client: "Mrs. Julie Donovan MD",
    issuedDate: "11 Sep 2023",
    total: "$4056",
    balance: "-$205",
    status: "Downloaded",
  },
  {
    id: "#4992",
    client: "Amanda Phillips",
    issuedDate: "26 Sep 2023",
    total: "$2771",
    balance: "$951",
    status: "Draft",
  },
  {
    id: "#4993",
    client: "Christina Collier",
    issuedDate: "15 Sep 2023",
    total: "$2713",
    balance: "Paid",
    status: "Partial Payment",
  },
  {
    id: "#4994",
    client: "David Flores",
    issuedDate: "27 Sep 2023",
    total: "$4309",
    balance: "Paid",
    status: "Paid",
  },
  {
    id: "#4995",
    client: "Valerie Perez",
    issuedDate: "31 Sep 2023",
    total: "$3367",
    balance: "Paid",
    status: "Sent",
  },
  {
    id: "#4996",
    client: "Tony Herrera",
    issuedDate: "19 Sep 2023",
    total: "$3719",
    balance: "-$344",
    status: "Sent",
  },
  {
    id: "#4997",
    client: "Kevin Patton",
    issuedDate: "17 Sep 2023",
    total: "$4749",
    balance: "Paid",
    status: "Paid",
  },
  {
    id: "#4998",
    client: "Mrs. Julie Donovan MD",
    issuedDate: "11 Sep 2023",
    total: "$4056",
    balance: "-$205",
    status: "Downloaded",
  },
  {
    id: "#4999",
    client: "Amanda Phillips",
    issuedDate: "26 Sep 2023",
    total: "$2771",
    balance: "$951",
    status: "Draft",
  },
  {
    id: "#5000",
    client: "Christina Collier",
    issuedDate: "15 Sep 2023",
    total: "$2713",
    balance: "Paid",
    status: "Partial Payment",
  },
  {
    id: "#5001",
    client: "David Flores",
    issuedDate: "27 Sep 2023",
    total: "$4309",
    balance: "Paid",
    status: "Paid",
  },
  {
    id: "#5002",
    client: "Valerie Perez",
    issuedDate: "31 Sep 2023",
    total: "$3367",
    balance: "Paid",
    status: "Sent",
  },
];

export default function InvoiceTable() {
  return (
    <div style={{ height: "600px", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
