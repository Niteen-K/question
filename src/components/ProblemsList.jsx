import React from "react";
import { Box, Divider, Paper, Typography } from "@mui/material";
import { } from "@mui/icons-material";
import { height } from "@mui/system";

function ProblemsList() {


  return (
    <div>
      <Box
        component={Paper}
        elevation={12}
        sx={{
          width: "50%"
        }}
      >
        <Typography>
          Item No.
        </Typography>
        <Divider />
      </Box>
    </div>
  );
}
export default ProblemsList;