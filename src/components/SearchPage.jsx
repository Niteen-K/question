import { Button, Fab, IconButton, InputBase, Paper, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import React, { useState } from "react";

function SearchPage() {

  const [search, setSearch] = useState({
    title: ""
  });

  function handleSearch(event) {
    const { name, value } = event.target;
    setSearch(() => {
      return {
        [name]: value
      };
    });
  }

  function handleClick(event) {
    setSearch({
      title: ""
    });
  }

  return (

    <div>
      <Typography
        sx={{ textAlign: 'center', mt: 25 }}
        variant="h3"
      >
        Matrix Problems
      </Typography>
      <Typography
        sx={{ textAlign: 'center' }}
      >
        Topics/<b>Matrix</b>
      </Typography>

      <Paper
        component="form"
        elevation={16}
        sx={{ p: '2px 4px', mt: 2, display: 'flex', width: 600, marginLeft: 56 }}

      >
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <InputBase
          name="title"
          sx={{ width: 600 }}
          onChange={handleSearch}
          placeholder="Search Problem"
          color="#212121"
          value={search.title}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <Button
          onClick={handleClick}
        >Reset</Button>
      </Paper>
    </div >

  );
}
export default SearchPage;