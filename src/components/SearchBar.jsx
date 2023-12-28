import React from "react";
import { useState } from "react";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import "../index.css";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
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
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
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
