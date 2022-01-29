import React from "react";
import { Box, Divider, TableCell, TableContainer, TableHead, TableRow, Table, Paper } from "@mui/material";

function ProblemsList() {
  return (
    <div>
      <div>
        <TableContainer component={Paper}
          sx={{ width: 800 }}
          elevation={12}
        >
          <Table sx={{}}
            size="small"
            stickyHeader
          >
            <TableHead>
              <TableRow>
                <TableCell>Item</TableCell>
                <TableCell align="left" >Item</TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
export default ProblemsList;