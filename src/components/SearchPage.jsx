import { Button, IconButton, InputBase, Paper, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import React from "react";

function SearchPage() {
  return (
    <div>
      <div>
        <Typography
          align="center"
          variant="h3"
        >
          Matrix Problems
        </Typography>
        <Typography
          align="center"
          variant="body1"
        >
          Topics/Matrix
        </Typography>
      </div>
      <div>
        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, marginLeft: 68, marginTop: 30 }}
        >
          <IconButton>
            <SearchIcon />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <InputBase
            sx={{ width: 400 }}
            placeholder="Search Problem"
            color="#212121"
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <Button>Reset</Button>
        </Paper>
      </div>
    </div>
  );
}
export default SearchPage;