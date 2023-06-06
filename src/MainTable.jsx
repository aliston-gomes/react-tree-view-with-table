import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TreeView from "@mui/lab/TreeView";
import { MdOutlineExpandMore } from "react-icons/md";
import { TbSquareRoundedChevronRightFilled } from "react-icons/tb"
import TreeItem from "@mui/lab/TreeItem";

export default function MainTable() {
  return (
    <TableContainer component={Paper} sx={{ width: "100%" }}>
      <Table aria-label="simple table">
        <TableHead sx={{ width: "100%" }}>
          <TableRow>
            <TableCell sx={{ background: "#47A992", width: "20%" }}>
              Tree
            </TableCell>

            <TableCell
              align="center"
              sx={{ background: "#27374D", width: "40%" }}
            >
              INDEPTH INFORMATION
            </TableCell>

            <TableCell
              align="center"
              sx={{ background: "#025464", width: "20%" }}
            >
              Extras
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
              <TreeView
                aria-label="file system navigator"
                defaultCollapseIcon={<MdOutlineExpandMore />}
                defaultExpandIcon={<TbSquareRoundedChevronRightFilled />}
                sx={{
                  height: 240,
                  flexGrow: 1,
                  maxWidth: 400,
                  overflowY: "auto",
                }}
              >
                <TreeItem nodeId="1" label="Applications">
                  <TreeItem nodeId="2" label="Calendar" />
                </TreeItem>
                <TreeItem nodeId="5" label="Documents">
                  <TreeItem nodeId="10" label="OSS" />
                  <TreeItem nodeId="6" label="MUI">
                    <TreeItem nodeId="8" label="index.js" />
                  </TreeItem>
                </TreeItem>
              </TreeView>
            </TableCell>
            <TableCell align="center" sx={{ padding: "0" }}>
              <TableContainer component={Paper} sx={{ overflowX: "auto" }}>
                <Box sx={{ width: "50vw" }}>
                  <Table aria-label="simple table">
                    <TableHead sx={{ background: "#B2B2B2" }}>
                      <TableRow sx={{ whiteSpace: "nowrap" }}>
                        <TableCell>University</TableCell>
                        <TableCell align="center">College</TableCell>
                        <TableCell align="center">
                          Agreed For Incubation
                        </TableCell>
                        <TableCell align="center">OTP Verified</TableCell>
                        <TableCell align="center">Registered</TableCell>
                        <TableCell align="center">
                          Appointment Scheduled
                        </TableCell>
                        <TableCell align="center">Incubation Login</TableCell>
                        <TableCell align="center">
                          Addressing Attended
                        </TableCell>
                        <TableCell align="center">Profile Filled</TableCell>
                        <TableCell align="center">Quiz Attended</TableCell>
                        <TableCell align="center">
                          5 Questions Attended
                        </TableCell>
                        <TableCell align="center">GD Shortlist</TableCell>
                        <TableCell align="center">GD Attended</TableCell>
                        <TableCell align="center">Offered</TableCell>
                        <TableCell align="center">Offer Declined</TableCell>
                        <TableCell align="center">
                          Replacement Before Joining Date
                        </TableCell>
                        <TableCell align="center">Joined</TableCell>
                        <TableCell align="center">Org Dropouts</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell component="th" scope="row">
                          DATA
                        </TableCell>
                        <TableCell component="th" scope="row">
                          DATA
                        </TableCell>
                        {/* Rest of the cells */}
                      </TableRow>
                    </TableBody>
                  </Table>
                </Box>
              </TableContainer>
            </TableCell>

            <TableCell align="center">C</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
