import React from "react";
import { useState, useNavigate } from "react";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import "../index.css";

const SearchBar = () => {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        border: "1px solid #e3e3e3",
        borderRadius: 20,

        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        className="search-bar"
        placeholder="Search here.."
        value=""
        onChange={() => {}}
      />
      <IconButton
        type="submit"
        sx={{
          p: "10px",
          color: "black",
        }}
      >
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
