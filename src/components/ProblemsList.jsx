import React from "react";
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Checkbox, Typography, Button, IconButton, Divider, InputBase } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Background from '../Images/dsabg.jpg';

function ProblemsList() {

  return (
    <div style={{ marginTop: "7%" }} >
      <div style={{ marginBottom: "2%" }}>
        <Typography variant="h3" align='center' >
          <AutoAwesomeIcon />Topic_Name
        </Typography>
        <Typography variant="body1" align='center' >
          Topics/Topic_Name
        </Typography>
      </div>
      <div>
        <Paper
          component="form"
          elevation={10}
          sx={{ p: '2px 4px', mt: 2, display: 'flex', width: 600, margin: 'auto' }}
        >
          <IconButton>
            <SearchIcon />
          </IconButton>
          <Divider sx={{ height: 30, m: 0.5 }} orientation="vertical" />
          <InputBase
            name="title"
            sx={{ width: 600 }}
            placeholder="Search Problem"
            color="#212121"
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <Button>Reset</Button>
        </Paper>
      </div>
      <div style={{ marginTop: '2%' }}>
        <Paper component='div' elevation='2' sx={{ width: '70%', overflow: 'hidden', margin: 'auto' }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader >
              <TableHead>
                <TableRow>
                  <TableCell align="center" >
                    ID
                  </TableCell>
                  <TableCell align="center" >
                    Question(s)
                  </TableCell>
                  <TableCell align="center" >
                    Status
                  </TableCell>
                  <TableCell align="center" >
                    Done
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="center" >
                    1.
                  </TableCell>
                  <TableCell align="center" >
                    AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                  </TableCell>
                  <TableCell align="center" >
                    X Incomplete
                  </TableCell>
                  <TableCell align="center" >
                    <Checkbox />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center" >
                    1.
                  </TableCell>
                  <TableCell align="center" >
                    AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                  </TableCell>
                  <TableCell align="center" >
                    X Incomplete
                  </TableCell>
                  <TableCell align="center" >
                    <Checkbox />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center" >
                    1.
                  </TableCell>
                  <TableCell align="center" >
                    AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                  </TableCell>
                  <TableCell align="center" >
                    X Incomplete
                  </TableCell>
                  <TableCell align="center" >
                    <Checkbox />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center" >
                    1.
                  </TableCell>
                  <TableCell align="center" >
                    AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                  </TableCell>
                  <TableCell align="center" >
                    X Incomplete
                  </TableCell>
                  <TableCell align="center" >
                    <Checkbox />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center" >
                    1.
                  </TableCell>
                  <TableCell align="center" >
                    AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                  </TableCell>
                  <TableCell align="center" >
                    X Incomplete
                  </TableCell>
                  <TableCell align="center" >
                    <Checkbox />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
    </div>
  );
}
export default ProblemsList;