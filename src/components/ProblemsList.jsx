import React from "react";
import { Box, Divider, Paper, Typography } from "@mui/material";
import { } from "@mui/icons-material";

function ProblemsList() {


  return (
    <div>
      <Box
        component={Paper}
        elevation={2}
        sx={{
          width: 700,
          height: 40,
          alignItems: 'center'
        }}
      >
        <Typography
          variant="body1"
          display={"inline-"}
          flex={"wrap"}
        >
          ID
        </Typography>
        <Divider orientation="vertical" flexItem >
          here
        </Divider>
        <Typography
          variant="body1"
          display={"inline-flex"}
          flex={"wrap"}
        >
          Question(s)
        </Typography>

        <Typography
          display={"inline-flex"}
          flex={"wrap"}
          variant="body1"
        >
          Status
        </Typography>

        <Typography
          variant="body1"
          display={"inline-flex"}
          flex={"wrap"}
        >
          Done
        </Typography>
      </Box>
    </div>
  );
}
export default ProblemsList;