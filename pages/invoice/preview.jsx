import DashboardLayout from "@/Layout/DashboardLayout";
import Stack from "@mui/material/Stack";
import React from "react";
import style from "./list.module.css";
import Box from "@mui/material/Box";
import Logo from "@/assets/Logo";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import Divider from "@mui/material/Divider";
import InvoicePreviewTable from "@/components/InvoicePreviewTable";

export default function preview() {
  return (
    <DashboardLayout>
      <Stack className={style.previewContainer}>
        <Stack className={style.boxContainer}>
          <Box className={style.firstBox}>
            <Stack>
              <Box className={style.logo}>
                <Logo customWidth={"40"} />
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "20px",
                    fontWeight: 600,
                    color: "rgba(76, 78, 100, 0.87)",
                    letterSpacing: "0.18px",
                    marginLeft: "8px",
                  }}
                >
                  Materialize
                </Typography>
              </Box>
              <Box className={style.paraBox}>
                <p>Office 149, 450 South Brand Brooklyn</p>
                <p>San Diego County, CA 91905, USA</p>
                <p>+1 (123) 456 7891, +44 (876) 543 2198</p>
              </Box>
            </Stack>
            <Box className={style.rightBox}>
              <Box className={style.paraBox}>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "20px",
                    fontWeight: 500,
                    color: "rgba(76, 78, 100, 0.87)",
                    letterSpacing: "0.18px",
                  }}
                >
                  Invoice
                </Typography>
                <p>Date Issued: </p>
                <p>Date Due: </p>
              </Box>
              <Box className={style.paraBox}>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "20px",
                    fontWeight: 500,
                    color: "rgba(76, 78, 100, 0.87)",
                    letterSpacing: "0.18px",
                  }}
                >
                  #4987
                </Typography>
                <p>13 Sep 2023</p>
                <p>23 Sep 2023</p>
              </Box>
            </Box>
          </Box>
          <Divider />
          <Box className={style.firstBox}>
            <Stack gap="12px">
              <Box className={style.rightBox}>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "rgba(76, 78, 100, 0.87)",
                    letterSpacing: "0.18px",
                  }}
                >
                  Invoice To:
                </Typography>
              </Box>
              <Box className={style.rightBox}>
                <Box className={style.paraBox}>
                  <p>Jordan Stevenson</p>
                  <p>Hall-Robbins PLC</p>
                  <p>7777 Mendez Plains</p>
                  <p>(616) 865-4180</p>
                  <p>don85@johnson.com</p>
                </Box>
              </Box>
            </Stack>
            <Stack gap="12px">
              <Box className={style.rightBox}>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "rgba(76, 78, 100, 0.87)",
                    letterSpacing: "0.18px",
                  }}
                >
                  Bill To:
                </Typography>
              </Box>
              <Box className={style.rightBox}>
                <Box className={style.paraBox}>
                  <p>Total Due:</p>
                  <p>Bank name:</p>
                  <p>Country:</p>
                  <p>IBAN:</p>
                  <p>SWIFT code:</p>
                </Box>
                <Box className={style.paraBox}>
                  <p>$12,110.55</p>
                  <p>American Bank</p>
                  <p>United States</p>
                  <p>ETD95476213874685</p>
                  <p>BR91905</p>
                </Box>
              </Box>
            </Stack>
          </Box>
          <Divider />
          <InvoicePreviewTable />
        </Stack>
        <Stack className={style.buttonBox}>
          <Button
            sx={{
              backgroundColor: "rgb(102, 108, 255) !important",
              color: "white",
              "&:hover": {
                backgroundColor: "rgb(90, 95, 224)",
                boxShadow: "rgba(76, 78, 100, 0.56) 0px 6px 18px -8px",
              },
            }}
            className={style.button}
            startIcon={<SendOutlinedIcon />}
          >
            Send Invoice
          </Button>
          <Button
            sx={{
              border: "1px solid rgba(109, 120, 141, 0.5)",
              color: "rgb(109, 120, 141)",
              "&:hover": {
                backgroundColor: "rgba(109, 120, 141, 0.08)",
                border: "1px solid rgb(109, 120, 141)",
              },
            }}
            className={style.button}
            variant="outlined"
          >
            Download
          </Button>
          <Button
            sx={{
              border: "1px solid rgba(109, 120, 141, 0.5)",
              color: "rgb(109, 120, 141)",
              "&:hover": {
                backgroundColor: "rgba(109, 120, 141, 0.08)",
                border: "1px solid rgb(109, 120, 141)",
              },
            }}
            className={style.button}
            variant="outlined"
          >
            Print
          </Button>
          <Button
            sx={{
              border: "1px solid rgba(109, 120, 141, 0.5)",
              color: "rgb(109, 120, 141)",
              "&:hover": {
                backgroundColor: "rgba(109, 120, 141, 0.08)",
                border: "1px solid rgb(109, 120, 141)",
              },
            }}
            className={style.button}
            variant="outlined"
          >
            Edit Invoice
          </Button>
          <Button
            sx={{
              background: "#72e128 !important",
              color: "white",
              "&:hover": {
                backgroundColor: "rgb(100, 198, 35)",
                boxShadow: "rgba(76, 78, 100, 0.56) 0px 6px 18px -8px",
              },
            }}
            className={style.button}
            startIcon={<AttachMoneyOutlinedIcon />}
          >
            Add Payment
          </Button>
        </Stack>
      </Stack>
    </DashboardLayout>
  );
}
