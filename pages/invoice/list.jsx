import DashboardLayout from "@/Layout/DashboardLayout";
import Box from "@mui/material/Box";
import React from "react";
import style from "./list.module.css";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InvoiceTable from "@/components/InvoiceTable";
import { Button, OutlinedInput } from "@mui/material";

export default function List() {
  return (
    <DashboardLayout>
      <Box className={style.inputContainer}>
        <Box className={style.titleBox}>
          <Typography variant="body1">Filters</Typography>
        </Box>
        <FormControl className={style.form}>
          <FormControl fullWidth sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">
              Invoice Status
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="Invoice Status"
              fullWidth
              sx={{ borderRadius: "10px" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Downloaded"}>Downloaded</MenuItem>
              <MenuItem value={"Draft"}>Draft</MenuItem>
              <MenuItem value={"Paid"}>Paid</MenuItem>
              <MenuItem value={"Partial Payment"}>Partial Payment</MenuItem>
              <MenuItem value={"Past Due"}>Past Due</MenuItem>
              <MenuItem value={"Sent"}>Sent</MenuItem>
            </Select>
          </FormControl>
          <TextField
            InputProps={{ style: { borderRadius: "10px" } }}
            fullWidth
            id=""
            label="Invoice Date"
          />
        </FormControl>
      </Box>
      <Box className={style.invoiceContainer}>
        <Box className={style.headerBox}>
          <FormControl
            sx={{ minWidth: 120 }}
            size="small"
            className={style.invoiceForm}
          >
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <Select
                disabled
                defaultValue="Actions"
                size="small"
                sx={{ borderRadius: "8px" }}
              >
                <MenuItem disabled value="Actions">
                  Actions
                </MenuItem>
                <MenuItem value={"Delete"}>Delete</MenuItem>
                <MenuItem value={"Edit"}>Edit</MenuItem>
                <MenuItem value={"Send"}>Send</MenuItem>
              </Select>
            </FormControl>
            <Box className={style.buttonContainer}>
              <OutlinedInput
                sx={{
                  borderRadius: "8px",
                  width: "170px",
                  marginRight: "15px",
                }}
                placeholder="Search Invoice"
              />
              <Button
                sx={{
                  backgroundColor: "#666cff !important",
                  "&:hover": {
                    backgroundColor: "#1565c0 !important",
                  },
                  borderRadius: "8px",
                }}
                variant="contained"
              >
                Create Invoice
              </Button>
            </Box>
          </FormControl>
        </Box>
        <InvoiceTable />
      </Box>
    </DashboardLayout>
  );
}
